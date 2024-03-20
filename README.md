# 김석진 202030407

## 3월 20일 강의 내용

### 리액트의 장점

1. Virtual DOM을 기반으로 빠른 업데이트와 렌더링 속도 제공

Virtual DOM은 DOM과 다르게 서버에서 받은 파일을 분석해 바뀐 부분만 내려받는
비동기식 렌더링 방법을 사용합니다.

2. 컴포넌트 기반 구조

리액트의 모든 페이지는 컴포넌트로 구성되고 하나의 컴포넌트는 다른 여러개의 조합으로 구성 할 수 있다.

그래서 리액트로 개발을 할 경우 컴포넌트를 조합해서 웹사이트를 개발하게 되어 재사용성이 높다. 또한 유지 보수에도 용이하다.

재사용이 가능하려면 해당 모듈의 의존성이 없어야 한다.

3. 지속적인 관리

메타( 구 페이스북 ) 에서 오픈소스 프로젝트로 관리하고 있다.

4. 활발한 지식 공유 , 커뮤니티

5. 모바일 앱 개발 기능

리액트 네이티브라는 모바일 환경 UI프레임워크가 있어 크로스 플랫폼 앱을 개발할 수 있다.

### 리액트의 단점

1. 많은 학습량

2. 높은 상태 관리 복잡도


### 리액트 파일 생성

npx create-react-app test-app

사방에서 오류가 나는거 보니 집 가서 설정하는거 벌써 어지럽다 


## 3월 13일 강의 내용


### GitHub 사용법
git bash 명령어  
 git init  
 git config user.name  
 git config user.email  


 파일을 수정하고 소스 컨트롤에서 commit 하고 푸쉬 / 소스 컨트롤에서 수정 전과 후도 비교 가능  
 여기에서 commit 한 내역은 git Graph를 깔아서 내역 확인 밑 태그 달기 등으로 정리오른쪽 아래 타임라인으로 확인해도 된다.

 github랑 연동하기 
 레포지스토리 만들고 레포지스토리 주소 복사하고 vs 코드 웰컴 화면에서 4번째 줄에 git 연동 누르고 주소 넣고 원하는 폴더 지정하면   
 그 폴더에서 수정된 내역은 연동된 폴더로 푸쉬된다.