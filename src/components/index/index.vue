<template>
  <div>
    <swiper :options="swiperOption" ref="mySwiper" id="mySwiper">
      <!--每页幻灯片使用swiper-slide标签-->
      <!--幻灯片组件生成的标签自带.swiper-slide的类名，但单类名选择器设置的部分css(如宽高)将被覆盖-->
      <swiper-slide class="swiper_slide_item" v-for="(image, index) in images" :key="index">
        <img :src="image.photoUrl" :alt="image.alt">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>

    <div style="margin-top: 40px;text-align: center;color: #888;font-size: 18px">独创一流的教育体系，步步提升自己</div>
    <div style="margin-top: 20px">
      <div class="firstImg">
        <img src="../../assets/HomeIcon/lxzd.png"/>
        <img src="../../assets/HomeIcon/sktx.png"/>
        <img src="../../assets/HomeIcon/kcsj.png"/>
        <img src="../../assets/HomeIcon/xxxd.png"/>
        <img src="../../assets/HomeIcon/zysp.png"/>
        <img  src="../../assets/HomeIcon/hydw.png"/>
        <img src="../../assets/HomeIcon/zyjs.png"/>
      </div>
      <div class="firstImg">
        <div class="word"><center>路线指导</center></div>
        <div class="word"><center>上课提醒</center></div>
        <div class="word"><center>课程升级</center></div>
        <div class="word"><center>学习向导</center></div>
        <div class="word"><center>专业视频</center></div>
        <div class="word"><center>行业定位</center></div>
        <div class="word"><center>专业讲师</center></div>
      </div>
      </div>
      <div class="choose"><center>税务管理与筹划</center></div>
    <div class="recommend">
      <ul>
        <li v-for="(course,index) in courseInfo.slice(0, 8)" :key="number" >
          <el-card shadow="always" style="width: 300px;height: 241px;">
            <div class="imgGet">
              <img :src="course.coverUrl">
              <div>
                <span style="margin-top: 10px">{{course.title}}</span>
              </div>
            </div>
            <div style="padding: 14px;">
              <div class="introduction">
                {{course.intro}}
              </div>
            </div>
            <div class="other-container" style="display: grid; grid-template-columns: 1fr auto;">
              <i class="el-icon-view">{{course.userNumber}}</i>
              <el-rate v-model="course.level" :colors="colors" disabled></el-rate>
            </div>
          </el-card>
        </li>
      </ul>
    </div>

    <div class="choose"><center>国际税务筹划与管理</center></div>
    <div class="recommend">
      <ul>
        <li v-for="(course,index) in courseInfo.slice(8, 16)" :key="number" >
          <el-card shadow="always" style="width: 300px;height: 241px;">
            <div class="imgGet">
              <img :src="course.coverUrl">
              <div>
                <span style="margin-top: 10px">{{course.title}}</span>
              </div>
            </div>
            <div style="padding: 14px;">
              <div class="introduction">
                {{course.intro}}
              </div>
            </div>
            <div class="other-container" style="display: grid; grid-template-columns: 1fr auto;">
              <i class="el-icon-view">{{course.userNumber}}</i>
              <el-rate v-model="course.level" :colors="colors" disabled></el-rate>
            </div>
          </el-card>
        </li>
      </ul>
    </div>

    <div class="choose"><center>资本运作中的税务筹划</center></div>
    <div class="recommend">
      <ul>
        <li v-for="(course,index) in courseInfo.slice(16, 32)" :key="number" >
          <el-card shadow="always" style="width: 300px;height: 241px;">
            <div class="imgGet">
              <img :src="course.coverUrl">
              <div>
                <span style="margin-top: 10px">{{course.title}}</span>
              </div>
            </div>
            <div style="padding: 14px;">
              <div class="introduction">
                {{course.intro}}
              </div>
            </div>
            <div class="other-container" style="display: grid; grid-template-columns: 1fr auto;">
              <i class="el-icon-view">{{course.userNumber}}</i>
              <el-rate v-model="course.level" :colors="colors" disabled ></el-rate>
            </div>
          </el-card>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

import axios from "axios";

export default {
  data() {
    return {
      number:[1,2,3,4,5,6,7,8],
      value2: 5,
      colors: ['#99A9BF', '#F7BA2A', '#FF9900'], // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
      //swiperOption：swiper配置项信息，需要绑定在swiper标签的 :option 属性中
      swiperOption: {
        //分页器配置项
        pagination: {
          el: ".swiper-pagination", //分页器的类名
          clickable: true, // 点击分页器跳切换到相应的幻灯片
          type: 'bullets', //小圆点|进度条|数字页码
          dynamicBullets: false,  //动态小圆点(type:'bullets'时)
        },

        //前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        //幻灯片播放配置项
        loop: true, //是否循环播放
        slidesPerView: 1, // 每个幻灯片显示的图片数量
        speed: 1000, // 发生页面切换动画时，动画的切换速度
        autoplay: {
          delay: 2000, // 幻灯片停留时间
          disableOnInteraction: false, // 用户操作swiper之后，是否禁止autoplay
        }
      },
      images: [
        // { url: 'https://z1.ax1x.com/2023/11/05/piQshLV.jpg'},
        // { url: 'https://z1.ax1x.com/2023/11/05/piQsIdU.jpg'},
        // { url: 'https://z1.ax1x.com/2023/11/05/piQs5ZT.jpg'}
      ],
      courseInfo: []
    };
  },
  //计算属性
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  created() {
    this.getCourse();
    this.getPhoto();
  },
  methods: {
    getCourse(){
      const data = {
        page: 1,
        pageSize: 32,
        courseTypeId: '',
        courseName: ''
      };
      axios.post('http://localhost:8081/getCourse', data).then(res => {
        this.courseInfo = res.data.data.records
        console.log(this.courseInfo)
      })
    },
    getPhoto(){
      axios.post('http://localhost:8081/getPhoto').then(res => {
        this.images = res.data.data
        console.log(this.images)
      })
    }
  }

};
</script>

<style scoped>

#mySwiper{
  width: 1100px;
  height: 400px;
  box-shadow: 0 0 5px;
  border-radius: 15px;
}

.swiper-slide.swiper_slide_item{
  width: 1100px;
  height: 400px;
}
.recommend{
  width: 1500px;
  margin: 0 auto;
  border-radius: 15px;
}

.recommend ul{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.other-container{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.other-container div{
  margin: 0;
}
.recommend ul li{
  list-style: none;
  width: 22%;
  height: 270px;
  margin-top: 50px;
}

.recommend ul li img{
  height: 100px;
  width: 180px;
  display: block;
  margin: 0 auto;
  border-radius: 5px;
}
.recommend ul li .imgGet{
  font-weight: bolder;
}

.recommend ul li img:hover{
  transform: scale(1.08);
  transition: all.4s;
}
.recommend ul li .imgGet:hover{
  color:red;
}

.recommend ul li .introduction{
  font-size: 11px;
  color: #888;
}
.choose{
  width: 80%;
  margin-left: 10%;
  height: 40px;
  font-size: 20px;
  font-weight: bold;
  line-height: 40px;
  margin-top: 40px;
  margin-bottom: 0;
}

.firstImg{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 60%;
  margin-left: 20%;
}
.firstImg img{
  width: 60px;
  height: 60px;
}

.firstImg .word{
  width: 80px;
  height: 20px;
  color: #888;
  margin-top: 15px;
  font-size: 17px;
  line-height: 20px;
}
</style>
