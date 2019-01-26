import vueCity from './vueCity.vue';

const vueCitySelect= {
    install:function(Vue){
        Vue.component(vueCity.name,vueCity)
    }
}
// global 情况下 自动安装
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(vueCitySelect)
}
// 导出模块
export default vueCitySelect
