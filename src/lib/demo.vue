<template>
    <div>
        <cityList :hotCityList="hotCityList" @changeCity="changeCity"></cityList>
    </div>
</template>
<script>
import cityList from './vueCity'
export default {
    data(){
        return {
            //hotCityList数组最好是3的倍数个，好看一点
            hotCityList:[
                {cityName:"深圳市"},
                {cityName:"上海市"},
                {cityName:"北京市"},
                {cityName:"广州市"},
                {cityName:"杭州市"},
                {cityName:"武汉市"},
                {cityName:"天津市"},
                {cityName:"南京市"},
                {cityName:"成都市"},
                {cityName:"西安市"},
                {cityName:"洛阳市"},
                {cityName:"石家庄市"}
            ]
        }
    },
    methods:{
        changeCity(cityName){   
            alert("选择的城市是"+cityName);
        }
    },
    components:{
        cityList
    }
}
</script>   
<style>

</style>
