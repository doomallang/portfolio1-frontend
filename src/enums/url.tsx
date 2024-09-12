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

enum MovieApi {
  HOST = 'https://api.themoviedb.org/3',
  GENRE = '/genre/movie/list?language=ko',
  NOW_PLAYING = '/movie/now_playing?language=ko-KR&page=1',
  POPULAR = '/movie/popular?language=ko-KR&page=1',
  UPCOMING = '/movie/upcoming?language=ko-KR&page=1',
}

enum RouteUrl {
  ROOT = '/',
  HOME = '/home',
  ACCOUNT_JOIN = '/account/join',
  ACCOUNT_LOGIN = '/account/login',
  FREE_NOTICE_WRITE = '/freeNotice/write',
  FREE_NOTICE = '/freeNotice',
}

export { ApiUrl, RouteUrl, MovieApi }
