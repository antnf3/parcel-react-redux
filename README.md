# parcel-react-redux

react-redux with parcel

## 프로젝트 환경설정

1. github repository 생성 parcel-react-redux
2. pc에 local 프로젝트 폴더 생성 parcel-react-redux
3. local pc parcel-react-redux 폴더에서 git init
4. git remote add origin git@github.com:antnf3/parcel-react-redux.git
5. git pull origin master github소스 내려받기
6. yarn init
7. git add .
8. git.commit -m "first init"
9. git push origin master

## parcel 설치

```shell
> yarn global add parcel-bundler
```

## react 설치

```shell
> yarn add react react-dom
```

## babel 설치(devDependencies)

```shell
> yarn add @babel/preset-env @babel/preset-react --dev
```

## babel 설정

### 프로젝트 root 디렉토리에 .babelrc 파일 생성하여 아래 스크립트 입력

```shell
> touch .babelrc

 .babelrc 파일에 입력 후 저장
{
    "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

## 프로젝트 파일 및 폴더 구조 생성

```shell
> touch index.html
> touch index.js
> mkdir src
> touch src/App.js
```

## package.json파일의 scripts에 parcel 설정

```json
"scripts": {
    "dev": "parcel index.html --target browser --port 3000 --open",
    "build": "parcel build index.html -d build --public-url ./"
  }
```
