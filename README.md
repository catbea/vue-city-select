# vue-city-select

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

### 插件使用方法

npm i vue-city-select -S 

在main.js中引入注册
``` import vueCity from 'vue-city-select'
``` vue.use(vueCity);
然后就可以在项目中引用了

 ``` <vue-city :hotCityList="hotCityList" @changeCity="changeCity"></vue-city>

 注意这里的vue-city就是组件vueCity.vue中的name 的名称。否则会报错的。