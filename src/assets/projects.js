import drMain from "./drMain.png"
import gemPng from "./gemMain.png"
import nutritionCodersMainPng from "./nutritionCodersMain.png"
import stackOverflowPng from "./stackOverflowMain.png"
import goldenCityPng from "./goldenCityMain.png"

const projects = [
  {
    title: "Dr *** (제작중)",
    mainImg: drMain,
    description: `돈 버느라 아픈건데, 아프도록 번 돈을 병원에서 써야해? 돈 버느라 병원 갈 시간도 없다고!\n바쁜 현대인의 육체적/정신적 치료를 위한 비대면 의료지원 서비스 Dr ***`,
    detailDescription: "바쁜 현대인들에겐 쉽고 빠른 진료를 제공하며,\n의료진과 상담사들에게는 짜투리 경제활동을 제공하는\nWin-Win App",
    stack: ["React-Native", "React", "AWS", "OAuth", "Redux", "Axios", "Styled-components",],
    myTask:
`1. 프론트엔드 팀 리더
- 팀원 관리 및 케어
- 의사소통 및 의견 조율
2. 계정 관리
- 신규 회원가입 및 로그인 페이지 구현
- OAuth 로그인 페이지 구현
- 개인의 건강정보 입력 폼 구현
3. 데이터 흐름 정리
- 프론트엔드 데이터 흐름 파악
- 백엔드 ERD 테이블 피드백
4. 기획 및 디자인
- UX 흐름 상 오류 검토
- Figma 디자인 페이지 협업
- 디자인 토큰 발급 및 공유
5. 상태관리
- Redux를 통한 상태관리 진행
- store 폴더로 상태관리 페이지 통합
6. index.html 관리
`,
    github: "코드 비공개 입니다.",
    demo: "개발중인 사이트 입니다."
  },
  {
    title: "Gem** ****** (제작중)",
    mainImg: gemPng,
    description: `개발자들을 위한 커뮤니티 Gem** ******`,
    detailDescription: "블로그 기능과, 질문답변 커뮤니티까지\n한 곳에 모아놓은 개발자들의 지상낙원",
    stack: ["Next.js", "React", "BlockNote", "ReactNotionX", "AWS", "OAuth", "Zustand", "Axios", "Styled-components",],
    myTask:
`1. 계정 관리
- OAuth 로그인 페이지 구현
2. 데이터 흐름 정리
- 프론트엔드 데이터 흐름 파악
- 백엔드 ERD 테이블 피드백
- Postman API 헤더,바디 및 쿼리 피드백
3. 기획 및 디자인
- UX 흐름 상 오류 검토
- Figma 디자인 페이지 협업
4. 상태관리
- Zustand를 통한 상태관리 진행
- store 폴더로 상태관리 페이지 통합
5. index.html 관리
`,
    github: "코드 비공개 입니다.",
    demo: "개발중인 사이트 입니다."
  },
  {
    title: "Nutrition Coders",
    mainImg: nutritionCodersMainPng,
    description: `바쁘다 바빠 현대사회! 하지만…아무리 바빠도 내 건강은 내가 챙겨야만 하니까!\n나만의, 나로 인한, 오직 나만을 위한 개인 맞춤형 식단관리 프로그램! '뉴트리션 코더스'`,
    detailDescription: "나의 식단에 대한 평가는 물론,\nAI에게 식단을 추천받을 수도 있고,\n다른 이들과의 식단을 공유하여 비교/분석할 수 있는\n커뮤니티를 구축하였습니다.",
    stack: ["React", "AWS", "OAuth", "Zustand", "Axios", "Styled-components", "Big-calendar"],
    myTask:
`1. 계정 관리
- 신규 회원가입 및 로그인 페이지 구현
- OAuth 로그인 페이지 구현
2. AWS S3 버킷관리
- 패치파일 업데이트
- 불필요 파일 정리/삭제
3. 데이터 흐름 정리
- 프론트엔드 데이터 흐름 파악
- 백엔드 ERD 테이블 피드백
- Postman API 헤더,바디 및 쿼리 피드백
4. 기획 및 디자인
- Figma 디자인 페이지 협업
- 기획을 구체화하여 화면정의서 작성
5. 상태관리
- Zustand를 통한 상태관리 진행
- store 폴더로 상태관리 페이지 통합
6. index.html 관리
`,
    github: "https://github.com/codestates-seb/seb45_main_002",
    demo: "http://nutrients-coders.com"
  },
  {
    title: "StackOverflow",
    mainImg: stackOverflowPng,
    description: "개발자들의 지식인! 전 세계 모든 개발자들의 질문에 답해주는 개발자들의 보물창고!\nStackOverflow(copy)",
    detailDescription: "협업과정을 배우기 위하여\n첫번째 프로젝트는\nStackOverflow\n클론코딩 작업이 되었습니다.",
    stack: ["React", "AWS", "OAuth", "Redux", "Axios", "Styled-components", "MySQL", "JAVA", "JWT"],
    myTask:
`1. AWS S3 + github-Action CI/CD
  - yaml 파일을 통한 CI/CD 작성
  - 특정 브랜치에 push할 시에, 자동 S3 빌드파일 업로드 설정
2. 기획 결정
  - 구현할 페이지와 그렇지 않은 페이지 구분
  - 페이지와 버튼들의 흐름 파악
3. 상태관리
  - Redux를 통한 상태관리 진행
  - store 폴더로 상태관리 페이지 통합
4. index.html 관리`,
    github: "https://github.com/codestates-seb/seb45_pre_031",
    demo: "http://se-sof.s3-website.ap-northeast-2.amazonaws.com"
  },
  {
    title: "Golden City",
    mainImg: goldenCityPng
,
    description: "역사의 중심, 경주! 지금 혹시, 경주여행을 준비중이신가요?\n금빛도시 경주",
    detailDescription: "공공데이터포털(https://www.data.go.kr/)을\n사용해보기 위해,\n경주관광정보를 활용한\n간단한 여행팁을 제작했습니다.",
    stack: ["React", "Axios", "Styled-components"],
    myTask: "솔로 프로젝트 (1인 개발)",
    github: "https://github.com/poiuy4004/goldencity",
    demo: "https://poiuy4004.github.io/goldencity/"
  },
]
export default projects;