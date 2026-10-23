# 강호록

세계관 · 인물 22명 · 나의 강호(페르소나 만들기)를 포함한 정적 웹사이트입니다.
별도 설치, 빌드 또는 API 키가 필요하지 않습니다.

## GitHub에 올리기

1. ZIP 파일을 압축 해제합니다.
2. 압축을 푼 내용물 전체를 저장소 최상위에 올립니다. ZIP 자체를 올리는 것이 아닙니다.
3. index.html과 assets 폴더가 같은 위치에 있도록 유지합니다.
4. 해당 저장소에서 GitHub Pages를 활성화합니다.

## 구성

- index.html: 페이지 구조 및 세계관 내용
- style.css: 기본 디자인
- app.js: 인물 정보 및 화면 동작
- persona.css / persona.js / persona-engine.js: 페르소나 생성 기능
- assets/: 배경과 인물 이미지 44장 등 이미지 자료
- .nojekyll: 정적 파일 배포용 설정

전체 기능은 GitHub Pages 주소 또는 로컬 웹 서버에서 확인하세요.
로컬 확인: 이 폴더에서 `python3 -m http.server 8000` 실행 후 http://localhost:8000 접속.
페르소나 저장 내용은 각 브라우저와 사이트 주소별로 저장됩니다.
글꼴은 Google Fonts를 통해 불러옵니다.

팽호연의 도법은 오호단문도로 수정했으며, 모용란의 무기 항목은 삭제한 최신본입니다.
