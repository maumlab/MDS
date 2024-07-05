# MDS

Metri Design System

## 프로젝트 키워드

<!-- ![node](https://badgen.net/badge/node/v14/green?icon=npm) -->

![typescript](https://badgen.net/badge/language/typescript/blue?icon=typescript)
![react](https://badgen.net/badge/library/react/blue?icon=atom)
![next](https://badgen.net/badge/framework/next/blue?icon=atom)
![github-action](https://badgen.net/badge/devops/github-action/purple?icon=github)
![storybook](https://badgen.net/badge/tool/storybook/orange?icon=npm)

## 사전 작업

1. 깃허브의 개발자 세팅 메뉴에서 **Personal access tokens**를 생성한다.

2. 터미널을 열어 데스크탑의 루트 디렉토리에 `.npmrc`를 생성한다.

   ```properties
   cd
   vi .npmrc
   ```

3. 1번에서 생성한 토큰을 `.npmrc`에 입력한다.

   ```properties
   //npm.pkg.github.com/:_authToken=[personal_access_tokens]
   ```

## MDS 등록 방법

1. 패키지를 설치한다.

   ```properties
   npm install
   ```

2. 라이브러리에 등록하고자 하는 파일을 생성 및 작성한다.

3. 생성한 컴포넌트를 barrel 파일에 작성한다.

4. 태그를 아래 형식에 맞추어 생성한 후, remote로 push한다.

   ```properties
   v[major].[minor].[patch]
   ```

### icongen 사용 방법

1. `/public/assets/icons` 폴더 하위에 아이콘 파일을 추가한다. (폴더 추가도 가능)

2. 아래 코드를 실행하면 `/src/common/icons.ts` 파일에 추가한 아이콘이 적용된다.

   ```properties
   npm run icongen
   ```

## MDS 사용 방법

1. MDS를 사용하고자 하는 프로젝트 루트에 `.npmrc`를 작성한다.

   ```properties
   @maumlab:registry=https://npm.pkg.github.com/
   ```

2. MDS를 설치한다. (latest를 사용할 경우, 최신버전 다운로드)

   ```properties
   npm install @maumlab/mds@[latest | tag_version]
   ```
