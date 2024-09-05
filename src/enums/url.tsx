enum ApiUrl {
  ACCOUNT_LOGIN = '/account/login',
  ACCOUNT_JOIN = '/account/join',
  ACCOUNT_INFO = '/account/info',
  PASSWORD_CHANGE = '/account/passwordChange',
  ACCOUNT_MODIFY = '/account/modify',
  FREE_NOTICE_LIST = '/freeNotice/list',
  FREE_NOTICE_IMAGE = '/freeNotice/image',
  FREE_NOTICE_WRITE = '/freeNotice/write',
  FREE_NOTICE_VIEW = '/freeNotice/view',
  FREE_NOTICE_COMMENT = '/freeNotice/comment',
  FREE_NOTICE_RECOMMEND = '/freeNotice/recommend',
  COMMENT_RECOMMEND = '/freeNotice/comment/recommend',
  VALID_TOKEN = '/common/validToken',
}

enum RouteUrl {
  ROOT = '/',
  HOME = '/home',
  ACCOUNT_JOIN = '/account/join',
  ACCOUNT_LOGIN = '/account/login',
  FREE_NOTICE_WRITE = '/freeNotice/write',
  FREE_NOTICE = '/freeNotice',
}

export { ApiUrl, RouteUrl }
