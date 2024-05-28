import HttpClient from '@/util/httpClient'
import { ApiUrl } from '@/enums/url'

/** 토큰 인증 */
export async function validToken() {
  const response = await HttpClient.get(ApiUrl.VALID_TOKEN)

  return response
}
