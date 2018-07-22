Welcome to Video-Platform
===

Welcome Video-Platform


2018-07-22
===

## next.config.js 수정 진행
  - css loader 추가
  - alias path 추가

```
const path = require("path");
const withCSS = require('@zeit/next-css')

---

config.resolve.alias = {
            'common': path.join(__dirname, './components/common/'),
            'components': path.join(__dirname, './components/'),
            'public': path.join(__dirname, './public/'),
            'img': path.join(__dirname, './public/img/'),
        }

```

## 파일 구조 개선
 - public folder 생성 및 적용
 - bootstrap.css 파일 수정