import { StockApi } from '@/enums/url'

async function stockApi(url: string, method: string) {
  const uri = StockApi.HOST + url + StockApi.API_KEY
  console.log(uri)
  const response = await fetch(uri, {
    method: method,
    headers: {
      accept: 'application/json',
    },
  })

  if (response.status === 200) {
    return response.json()
  }
}

/** 장르 리스트 */
export async function getKoeList(stockCode: string) {
  const url = StockApi.KOE + stockCode
  return stockApi(url, 'GET')
}

export async function getKscList(stockCode: string) {
  const url = StockApi.KSC + stockCode
  return stockApi(url, 'GET')
}

export async function getDogImage() {
  const response = await fetch('https://random.dog/woof.json', {
    method: 'GET',
  })

  return response.json()
}

export async function getCatImage() {
  const response = await fetch('https://randomfox.ca/floof', {
    method: 'GET',
  })

  return response.json()
}

export async function getYesGif() {
  const response = await fetch('https://yesno.wtf/api', {
    method: 'GET',
  })

  return response.json()
}

export async function getFaceImage() {
  const response = await fetch('https://thispersondoesnotexist.com', {
    method: 'GET',
    mode: 'no-cors',
  })

  return response.json()
}
