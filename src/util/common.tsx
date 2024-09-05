const emailRegEx =
  /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/

// 최소 8자, 최소 하나의 문자, 하나의 숫자
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/

const validateEmail = (email: string) => {
  if (!emailRegEx.test(email)) {
    return false
  } else {
    return true
  }
}

const validatePass = (password: string) => {
  if (!passwordRegex.test(password)) {
    return false
  } else {
    return true
  }
}

const isEmptyObject = (object: any) => {
  let emptyKey = ''
  Object.keys(object).map((key) => {
    if (object[key] === null || object[key] === '') {
      emptyKey = key
    }
  })
  return emptyKey
}

const removeTag = (text: string) => {
  return text.replace(/(<([^>]+)>)/gi, '')
}

const calDate = (datetime: string) => {
  // 입력된 datetime을 JavaScript의 Date 객체로 변환
  const inputDate = new Date(datetime)
  // 현재 날짜
  const currentDate = new Date()
  // 날짜 차이 (밀리초 단위)
  const timeDifference = currentDate.getTime() - inputDate.getTime()
  // 밀리초를 일(day) 단위로 변환 (1일 = 1000밀리초 * 60초 * 60분 * 24시간)
  return Math.floor(timeDifference / (1000 * 60 * 60 * 24))
}

export { validateEmail, validatePass, isEmptyObject, removeTag, calDate }
