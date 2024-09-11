const defaultHeaders = {
  'Content-Type': 'application/json',
}

function headers(header?: any): any {
  const token = localStorage.getItem('token')
  if (token !== null) {
    return {
      ...defaultHeaders,
      Authorization: `Bearer ${token}`,
      ...header,
    }
  } else {
    return { ...defaultHeaders, ...header }
  }
}

async function request(
  url: string,
  method: string = 'GET',
  data?: any,
  headerParams?: any,
): Promise<any> {
  const res = await fetch(url, {
    method,
    headers: {
      ...headers(),
      ...headerParams,
    },
    body: data && JSON.stringify(data),
  })

  if (res.status === 200) {
    return res.json()
  } else if (res.status === 422) {
    const errorData = await res.json() // 서버에서 제공한 에러 메시지 등을 가져옴
    throw new Error(errorData.message || 'Unprocessable Entity')
  } else if (res.status === 401) {
    localStorage.clear()
    window.location.href = '/account/login'
  }
}

const get = (url: string, query?: Record<string, string>, headers?: any) => {
  const response = request(
    `${process.env.API_URL}${url}${query ? `?${new URLSearchParams(query)}` : ''}`,
    'GET',
    undefined,
    headers,
  )

  return response
}

const post = async (url: string, data?: object, headers?: any) => {
  const response = await request(`${process.env.API_URL}${url}`, 'POST', data, headers)

  return response
}

const put = async (url: string, data?: object, headers?: any) => {
  return await request(`${process.env.API_URL}${url}`, 'PUT', data, headers)
}

const filePost = async (url: string, formData: FormData) => {
  const response = await fetch(`${process.env.API_URL}${url}`, {
    method: 'POST',
    body: formData,
  })

  if (response.status === 200) {
    return response.json()
  }
}

const HttpClient = {
  get,
  post,
  put,
  filePost,
}

export default HttpClient
