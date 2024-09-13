enum ViewTitle {
  TITLE = 'DOOMOLE',
  ACCOUNT_INFO = '회원 정보',
  FREE_NOTICE = '자유게시판',
  FREE_NOTICE_VIEW = '자유 글',
  FREE_NOTICE_WRITE = '글 작성하기',
  Q_AND_A = 'Q&A',
  MOVIE = '영화',
  STOCK = '주식',
  LOGIN = '로그인',
  ID = '아이디',
  PASSWORD = '비밀번호',
  NAME = '이름',
  NICKNAME = '닉네임',
  EMAIL = '이메일',
  JOIN = '회원가입',
  TITLE_TEXT = '제목',
  CONTENT = '내용',
  REGIST = '등록하기',
  LIST = '목록',
  CANCEL = '취소',
  INFO = '정보',
  LOGOUT = '로그아웃',
  PASSWORD_CHANGE = '비밀번호 변경',
  CHANGE = '변경',
  SUCCESS = '성공',
  LOGIN_FAIL = '로그인 실패',
  AVATAR = '아바타',
  ACCOUNT_MODIFY = '회원 수정',
  HOME = '홈',
  WRITE_COMMENT = '댓글 쓰기',
}

enum ViewDesc {
  LOGIN_TITLE_DESC = '로그인하고 더욱 다양한 활동을 해보세요.',
  JOIN_TITLE_DESC = 'DOOMOLE에 회원가입',
  ACCOUNT_INFO_TITLE_DESC = '사용자 정보를 확인하세요.',
  FREE_NOTICE_DESC = '자유롭고 다양한 글을 작성하고 읽어보세요.',
  FREE_NOTICE_VIEW_DESC = '다양한 생각을 읽어보세요.',
  FREE_NOTICE_WRITE_DESC = '자신의 생각을 자유롭게 작성해보세요.',
  LOGIN_JOIN_DESC = '아직 회원이 아니신가요?',
  JOIN_LOGIN_DESC = '이미 회원이신가요?',
  ID_PLACE_HOLDER = '아이디를 입력하세요.',
  PASSWORD_PLACE_HOLDER = '최소 8자 이상(영어, 숫자, 특수문자 포함)',
  NAME_PLACE_HOLDER = '두더지',
  NICKNAME_PLACE_HOLDER = '20자 이내로 별명을 입력하세요.',
  EMAIL_PLACE_HOLDER = 'test@test.com',
  SUCCESS_DESC = '완료되었습니다.',
  LOGIN_FAIL_DESC = '아이디와 비밀번호를 확인해주세요.',
  NOT_CHANGE = '변경된 항목이 없습니다.',
}

enum ErrorTitle {
  EMAIL_ERROR = '이메일 오류!',
  PASSWORD_ERROR = '비밀번호 오류!',
  EMPTY_OBJECT_ERROR = '빈값 오류!',
  FETCH_ERROR = '데이터 페치 오류!',
}

enum ErrorDesc {
  EMAIL_ERROR_DESC = '올바른 이메일 형식을 입력하세요.',
  PASSWORD_ERROR_DESC = '올바른 비밀번호 형식을 입력하세요.\n최소 8자 이상(영어, 숫자, 특수문자 포함)',
  EMPTY_OBJECT_ERROR_DESC = '이 빈 값입니다. 값을 입력해주세요.',
}

export { ViewTitle, ViewDesc, ErrorTitle, ErrorDesc }
