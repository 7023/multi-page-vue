最近做一些简单独立的页面(好多个啦)，单页面并不一定符合业务需求，所有整理了个vue的多页面应用


# 准备工作

在本地用`vue-cli`新建一个项目，这个步骤vue的官网上有，我就不再说了。


# 修改webpack配置


需要改动的文件都在`build`文件下，分别是：

- utils.js
- webpack.base.conf.js
- webpack.dev.conf.js
- webpack.prod.conf.js



# bless-project

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev || npm run start
```

### Compiles and minifies for production
```
npm run build
```

# tips

这个dome我引入了vant UI组件库，axios封装（/src/assets/js/http.js） 以及做了移动端的适配（移动端项目)

