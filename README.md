# project

> test

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
#技术栈 vue+element+axios+scss

# 1.数据通信
1.项目目录 :src/api
2.子文件说明:
src/api/lib/api.js 用于管理接口 所有通信的接口都写在这里
src/api/lib/crypto.js 做加密的类
src/api/lib/request.js 数据请求的函数,做统一的数据拦截处理
src/api/static/config.json 静态配置文件,一些固定不变的配置如(请求的base接口地址,加密解密的key什么的)

#2.静态资源

1.项目目录 src/assets
2.子文件说明:
src/assets/css 用于存放css样式
src/assets/css/common.css  公共样式文件
src/assets/js 用于存放公共js
src/assets/js/util.js 公共工具类

#3.公共组件
1.项目目录 src/components


#4.页面(所有的开发页面)

1.项目目录 src/pages

#5.路由配置(页面路径配置)

1.项目目录 src/router
#6.vuex仓库 (vue公共数据存储)
1.项目目录 src/store
2.子文件说明
src/store/components 该文件下放多个模块的vuex操作 在下面建立子模块 对vue进行操作
src/store/index.js 在此将仓库模块导入vuex
src/store/modules.js 定义仓库模块
#7.静态图片/资源文件
1.项目目录 src/static

#7.vue入口文件(整个项目的入口文件,一些公共模块的引入在此模块操作)
1.项目目录 src/index 