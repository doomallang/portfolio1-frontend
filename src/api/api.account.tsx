import ClientHttpClient from '@/util/clientHttpClient'
import { ApiUrl } from '@/enums/url'

export async function login(accountId: string, password: string) {
  const data = {
    accountId: accountId,
    password: password,
  }

  const response = await ClientHttpClient.post(ApiUrl.ACCOUNT_LOGIN, data)

  return response
}

export async function join(
  accountId: string,
  password: string,
  name: string,
  nickname: string,
  email: string,
) {
  const data = {
    accountId: accountId,
    password: password,
    name: name,
    nickname: nickname,
    email: email,
  }

  const response = await ClientHttpClient.post(ApiUrl.ACCOUNT_JOIN, data)

  return response
}

export async function getInfo(accountId: string) {
  const response = await ClientHttpClient.get(ApiUrl.ACCOUNT_INFO, { accountId: accountId })

  return response
}

export async function passwordChange(
  accountIdx: number,
  prevPassword: string,
  nextPassword: string,
) {
  const data = {
    accountIdx: accountIdx,
    prevPassword: prevPassword,
    nextPassword: nextPassword,
  }

  const response = await ClientHttpClient.post(ApiUrl.PASSWORD_CHANGE, data)

  return response
}

export async function modifyAccount(nickname: string, avatar: string, accountIdx?: number) {
  const data = {
    accountIdx: accountIdx,
    nickname: nickname,
    avatar: avatar,
  }

  const response = await ClientHttpClient.post(ApiUrl.ACCOUNT_MODIFY, data)

  return response
}
