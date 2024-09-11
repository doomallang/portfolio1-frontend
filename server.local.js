const express = require('express')
const next = require('next')
const fs = require('fs')
const path = require('path')
const requestIp = require('request-ip')
const moment = require('moment-timezone')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  // Middleware to log requests
  server.use((req, res, next) => {
    const clientIp = requestIp.getClientIp(req)
    const logTime = moment().tz('Asia/Seoul').format('YYYY-MM-DD HH:mm:ss.SSS')
    const log = `${logTime} - ${clientIp} - ${req.method} ${req.url}\n`
    const logDirectory = path.join(__dirname, 'accessLog')

    // Ensure log directory exists
    if (!fs.existsSync(logDirectory)) {
      fs.mkdirSync(logDirectory)
    }

    // Create log file name with current date
    const logFileName = `accesslog_${moment().tz('Asia/Seoul').format('YYYYMMDD')}.log`
    const logFilePath = path.join(logDirectory, logFileName)

    const skipLogging = [
      '/_next/static/',
      '/images/',
      '/favicon.ico',
      '/__nextjs_original-stack-frame',
    ].some((path) => req.url.startsWith(path))

    if (!skipLogging) {
      // Append log to the file
      fs.appendFile(logFilePath, log, (err) => {
        if (err) {
          console.error('Failed to write log:', err)
        }
      })
    }
    next()
  })

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
