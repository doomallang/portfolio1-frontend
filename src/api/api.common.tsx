import { ApiUrl } from '@/enums/url'
import ClientHttpClient from '@/util/clientHttpClient'

/** 토큰 인증 */
export async function validToken() {
  const response = await ClientHttpClient.get(ApiUrl.VALID_TOKEN)

  return response
}
