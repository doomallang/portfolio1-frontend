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

export { validateEmail, validatePass, isEmptyObject, removeTag }
