<template>
  <div>
    <swiper :options="swiperOption" ref="mySwiper" id="mySwiper">
      <!--每页幻灯片使用swiper-slide标签-->
      <!--幻灯片组件生成的标签自带.swiper-slide的类名，但单类名选择器设置的部分css(如宽高)将被覆盖-->
      <swiper-slide class="swiper_slide_item" v-for="(image, index) in images" :key="index">
        <img :src="image.url" :alt="image.alt">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
        { url: 'https://z1.ax1x.com/2023/11/05/piQshLV.jpg'},
        { url: 'https://z1.ax1x.com/2023/11/05/piQsIdU.jpg'},
        { url: 'https://z1.ax1x.com/2023/11/05/piQs5ZT.jpg'}
      ],
    };
  },
  //计算属性
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  }
};
</script>

<style scoped>

#mySwiper{
  width: 1100px;
  height: 400px;
  border-radius: 15px;
}

.swiper-slide.swiper_slide_item{
  width: 1100px;
  height: 400px;
}
</style>
