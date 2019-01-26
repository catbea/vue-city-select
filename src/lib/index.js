import vueCity from './vueCity'

const vueCityPlugin = { };
vueCityPlugin.install = function(Vue){
    Vue.component(vueCity.name,vueCity);       
} 
// global 情况下 自动安装
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(vueCityPlugin)
}

export default vueCityPlugin