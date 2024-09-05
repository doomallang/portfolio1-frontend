import OpenAI from 'openai'

export default async function handler(req: any, res: any) {
  const openai = new OpenAI({
    apiKey: process.env.API_KEY,
  })

  const { message } = req.body

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: message }],
      temperature: 0,
      max_tokens: 1000,
    })

    res.status(200).json(response)
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while processing your request.' })
  }
}
