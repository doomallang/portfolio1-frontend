import cryptoJs from 'crypto-js'

// 암호화
export const aesEncrypt = (text: string) => {
  const cipher = cryptoJs.AES.encrypt(text, cryptoJs.enc.Utf8.parse(`${process.env.SECRET_KEY}`), {
    iv: cryptoJs.enc.Utf8.parse(`${process.env.IV}`),
    padding: cryptoJs.pad.Pkcs7,
    mode: cryptoJs.mode.CBC,
  })

  return cipher.toString()
}

// 복호화
export const aesDecrypt = (encryptedText: string) => {
  const decipher = cryptoJs.AES.decrypt(
    encryptedText,
    cryptoJs.enc.Utf8.parse(`${process.env.SECRET_KEY}`),
    {
      iv: cryptoJs.enc.Utf8.parse(`${process.env.IV}`),
      padding: cryptoJs.pad.Pkcs7,
      mode: cryptoJs.mode.CBC,
    },
  )

  return decipher.toString(cryptoJs.enc.Utf8)
}
