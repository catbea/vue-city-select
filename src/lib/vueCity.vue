<template>
    <transition name="slide">
        <div class="vue-city-container"> 
            <div class="vue-city-content" @touchstart="cityListTouchstart" @touchend="cityListTouchend" ref="vueCityContent">
            <!-- <div class="vue-city-content" ref="vueCityContent"> -->
                <div class="hot-city-list-box">
                    <span class="hot-title">热门城市</span>
                    <div class="hot-city-list">
                        <span v-for="(item,index) in hotCityList" :key="index" @click="hotCityChange(item.cityName)">{{item.cityName}}</span>
                    </div>
                </div>
                <div class="city-sort-box">
                    <div class="city-panel" v-for="(item,index) in cityList" :key="index">
                        <div class="sort_letter" :ref="item.w">{{item.w}}</div>
                        <div class="sort_item"> 
                            <div class="sort_name" v-for="(item,index) in item.option" :key="index" @click="clickCity(item.c)">{{item.c}}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="slidebar">
                <ul>
                    <li v-for="(item,index) in cityList" :key="index" @touchstart.stop.prevent="cityTouchstart" @touchmove.stop.prevent="cityTouchmove" @touchend.stop.prevent="cityTouchend">
                        {{item.w}}
                    </li>
                </ul>
            </div>
        </div>
	</transition>
</template>
<script>
const cityList = require('./city.js').citys;
console.log(cityList);
export default {
        props: {
           
        },
        data: function(){
            return {
                hotCityList:[
                    {cityName:"深圳市"},
                    {cityName:"上海市"},
                    {cityName:"北京市"},
                    {cityName:"广州市"},
                    {cityName:"杭州市"},
                    {cityName:"武汉市"},
                    {cityName:"天津市"},
                    {cityName:"南京市"},
                    {cityName:"成都市"}
                ],
                cityList:cityList,
                LIHeight:0,
                startY:0,
                endY:0,
                touchStratSelected:"",
                touchMouveSelected:"",
                saveCharIndex:0,
                chars:['A','B','C','D','E','F','G','H','J','K','L','M','N','P','Q','R','S','T','W','X','Y','Z'],
                startY2:0,
                endY2:0,
                distance:0,
                domHeight:0
            }
        },  
        mounted(){
            this.domHeight = this.$refs.vueCityContent
        },
        methods: {
            hotCityChange(cityName){

            },
            clickCity(cityName){

            },
            cityTouchstart(e){
                console.log("cityTouchstart",e)
                this.LIHeight = e.target.offsetHeight;
                this.startY = e.changedTouches[0].pageY;
                this.touchStratSelected = e.target.outerText;
                this.saveCharIndex = this.chars.indexOf(this.touchStratSelected);

                console.log(this.chars.indexOf(this.touchStratSelected));                
            },
            cityTouchmove(e){
                let index = this.saveCharIndex;
                this.endY = e.changedTouches[0].pageY;
                let countY = Math.ceil((this.endY - this.startY)/this.LIHeight);
                index += countY;
                this.touchMouveSelected = this.chars[index];
                console.log(this.endY,this.touchMouveSelected,countY);
            },
            cityTouchend(e){
                let index = this.saveCharIndex;
                this.endY = e.changedTouches[0].pageY;
                let countY = Math.ceil((this.endY - this.startY)/this.LIHeight);
                index += countY;
                this.touchMouveSelected = this.chars[index];    
                let distance = this.$refs[this.touchMouveSelected][0].offsetTop;  
                this.$refs.vueCityContent.style.transform = `translateY(-${distance}px)`;  
                console.log('cityTouchend',this.$refs[this.touchMouveSelected][0].offsetTop);                
            },
            cityListTouchstart(e){
                this.startY2 = e.changedTouches[0].pageY;
            },
            cityListTouchend(e){
                // event.preventDefault();
                let xdistance = parseInt(this.$refs.vueCityContent.style.transform.replace(/[^0-9]+/g, '')||0);
                this.endY2 = e.changedTouches[0].pageY;
                let countY = Math.floor(this.endY2 - this.startY2);
                xdistance += countY;
                if(this.distance < 0){
                    this.distance = 0;
                }       
                if(this.distance > this.domHeight){
                    this.distance = this.domHeight;
                }         
                console.log("距离",xdistance);
                this.$refs.vueCityContent.style.transform = `translateY(${xdistance}px)`;    
            },            
            
        }
    }
</script> 
<style lang="scss" scoped>
.vue-city-container{
    width: 100vw;
    min-height: 100vh;
    background: #f4f4f4;
    .vue-city-content{
        .hot-city-list-box{
            background: #f8f8f8;
            border-top: 1px solid #e5e5e5;
            .hot-title{
                font-size: 13px;
                color: #999;
                padding: 9px 0 9px 15px;
                display: block;  
            }
            .hot-city-list{
                -webkit-column-count: 3;
                column-count: 3;
                padding: 0 30px 0 15px;
                -webkit-column-gap: 2px;
                column-gap: 2px; 
                span{   
                    width: 90%;
                    height: 39px;
                    font-size: 13px;
                    line-height: 39px;
                    color: #333;
                    display: block;
                    border: 1px solid #999;
                    border-radius: 6px;
                    text-align: center;
                    margin-bottom: 10px;
                    background: #fff;  
                }
            }
        }
        .city-sort-box{
            width: 100%;
            border-top: 1px solid #e5e5e5;
            .sort_letter{
                height: 30px;
                line-height: 30px;
                padding-left: 15px;
                background: #f8f8f8;
                font-size: 13px;
                color: #999;
                border-bottom: 1px solid #e5e5e5;  
            }
            .sort_item{
                padding-left: 15px;
                position: relative;                
                .sort_name{
                    height: 40px;
                    line-height: 40px;
                    color: #333;
                    font-size: 15px; 
                    border-bottom: 1px solid #e5e5e5;
                }
            }            
        }
    }
    .slidebar{
        position: fixed;
        top: 8vh;
        right: 0;
        height: 100%;
        width: 30px;
        text-align: center;
        font-size: 12px;
        z-index: 99;
        font-size: 13px;
        color: #1c94eb;
        ul{
            background: #fff;
            padding: 10px 0;
            border-radius: 10px;
            li{
                list-style: none;
                height: 3vh;
            }
        }
    }
}
</style>