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

enum StockApi {
  HOST = 'https://financialmodelingprep.com/api/v3',
  API_KEY = '&apikey=OTJkCBiQU8yDILzzfIU4FsGYIwEiFGVG',
  KOE = '/search?exchange=KOE&query=',
  KSC = '/search?exchange=KSC&query=',
}

enum RouteUrl {
  ROOT = '/',
  HOME = '/home',
  ACCOUNT_JOIN = '/account/join',
  ACCOUNT_LOGIN = '/account/login',
  FREE_NOTICE_WRITE = '/freeNotice/write',
  FREE_NOTICE = '/freeNotice',
}

enum FinanceApi {
  STOCK_SECTOR_LIST = '/finance/stock/sector/list',
  STOCK_LIST = '/finance/stock/list',
  STOCK_RECOMMEND_LIST = '/finance/stock/recommend/list',
  STOCK = '/finance/stock',
  STOCK_PRICE = '/finance/stock/price',
  STOCK_NEWS = '/finance/stock/news',
}

export { ApiUrl, RouteUrl, MovieApi, StockApi, FinanceApi }
