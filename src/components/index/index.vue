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


    <div style="margin-top: 100px">
      <div class="firstimg">
        <img src="../../assets/用户.png"/>
        <img src="../../assets/奖牌.png"/>
        <img src="../../assets/书本.png"/>
        <img src="../../assets/公文包.png"/>
      </div>
      <div class="firstimg">
        <div class="word"><center>111</center></div>
        <div class="word"><center>111</center></div>
        <div class="word"><center>111</center></div>
        <div class="word"><center>111</center></div>
      </div>

    </div>


    <div class="choose"><center>分类1</center></div>
    <div class="recommend">
      <ul>
        <li>
          <el-card style="background-color: aliceblue;
              border-radius: 10px;"  shadow="always">
            <div class="imgGet">
              <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png">
              <span>题目1111</span>
            </div>
              <div style="padding: 14px;">
                <div class="introduction">
                  简介四五字简介四五字简介四五字简介四五字简介四五字简介四五字...
                </div>
              </div>
            <div class="other-container">
              <div style="font-size: 14px; color: rgb(255, 129, 9);">
                ￥99.99
              </div>
              <div style="font-size: 14px; color: #888;width:50px">
                <img src="../../assets/查看次数.png" style="height: 12px;width: 12px;"/>3333
              </div>
              <div>
                  <el-rate
                    v-model="value2"
                    :colors="colors" disabled>
                  </el-rate>
              </div>
            </div>
          </el-card>
        </li>
        <li>
          <el-card style="background-color: aliceblue;
              border-radius: 10px;"  shadow="always">
            <div class="imgGet">
              <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png">
              <span>题目1111</span>
            </div>
            <div style="padding: 14px;">
              <div class="introduction">
                简介四五字简介四五字简介四五字简介四五字简介四五字简介四五字...
              </div>
            </div>
            <div class="other-container">
              <div style="font-size: 14px; color: rgb(255, 129, 9);">
                ￥99.99
              </div>
              <div style="font-size: 14px; color: #888;width:50px">
                <img src="../../assets/查看次数.png" style="height: 12px;width: 12px;"/>3333
              </div>
              <div>
                <el-rate
                  v-model="value2"
                  :colors="colors" disabled>
                </el-rate>
              </div>
            </div>
          </el-card>
        </li><li>
        <el-card style="background-color: aliceblue;
              border-radius: 10px;"  shadow="always">
          <div class="imgGet">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png">
            <span>题目1111</span>
          </div>
          <div style="padding: 14px;">
            <div class="introduction">
              简介四五字简介四五字简介四五字简介四五字简介四五字简介四五字...
            </div>
          </div>
          <div class="other-container">
            <div style="font-size: 14px; color: rgb(255, 129, 9);">
              ￥99.99
            </div>
            <div style="font-size: 14px; color: #888;width:50px">
              <img src="../../assets/查看次数.png" style="height: 12px;width: 12px;"/>3333
            </div>
            <div>
              <el-rate
                v-model="value2"
                :colors="colors" disabled>
              </el-rate>
            </div>
          </div>
        </el-card>
      </li><li>
        <el-card style="background-color: aliceblue;
              border-radius: 10px;"  shadow="always">
          <div class="imgGet">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png">
            <span>题目1111</span>
          </div>
          <div style="padding: 14px;">
            <div class="introduction">
              简介四五字简介四五字简介四五字简介四五字简介四五字简介四五字...
            </div>
          </div>
          <div class="other-container">
            <div style="font-size: 14px; color: rgb(255, 129, 9);">
              ￥99.99
            </div>
            <div style="font-size: 14px; color: #888;width:50px">
              <img src="../../assets/查看次数.png" style="height: 12px;width: 12px;"/>3333
            </div>
            <div>
              <el-rate
                v-model="value2"
                :colors="colors" disabled>
              </el-rate>
            </div>
          </div>
        </el-card>
      </li><li>
        <el-card style="background-color: aliceblue;
              border-radius: 10px;"  shadow="always">
          <div class="imgGet">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png">
            <span>题目1111</span>
          </div>
          <div style="padding: 14px;">
            <div class="introduction">
              简介四五字简介四五字简介四五字简介四五字简介四五字简介四五字...
            </div>
          </div>
          <div class="other-container">
            <div style="font-size: 14px; color: rgb(255, 129, 9);">
              ￥99.99
            </div>
            <div style="font-size: 14px; color: #888;width:50px">
              <img src="../../assets/查看次数.png" style="height: 12px;width: 12px;"/>3333
            </div>
            <div>
              <el-rate
                v-model="value2"
                :colors="colors" disabled>
              </el-rate>
            </div>
          </div>
        </el-card>
      </li><li>
        <el-card style="background-color: aliceblue;
              border-radius: 10px;"  shadow="always">
          <div class="imgGet">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png">
            <span>题目1111</span>
          </div>
          <div style="padding: 14px;">
            <div class="introduction">
              简介四五字简介四五字简介四五字简介四五字简介四五字简介四五字...
            </div>
          </div>
          <div class="other-container">
            <div style="font-size: 14px; color: rgb(255, 129, 9);">
              ￥99.99
            </div>
            <div style="font-size: 14px; color: #888;width:50px">
              <img src="../../assets/查看次数.png" style="height: 12px;width: 12px;"/>3333
            </div>
            <div>
              <el-rate
                v-model="value2"
                :colors="colors" disabled>
              </el-rate>
            </div>
          </div>
        </el-card>
      </li><li>
        <el-card style="background-color: aliceblue;
              border-radius: 10px;"  shadow="always">
          <div class="imgGet">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png">
            <span>题目1111</span>
          </div>
          <div style="padding: 14px;">
            <div class="introduction">
              简介四五字简介四五字简介四五字简介四五字简介四五字简介四五字...
            </div>
          </div>
          <div class="other-container">
            <div style="font-size: 14px; color: rgb(255, 129, 9);">
              ￥99.99
            </div>
            <div style="font-size: 14px; color: #888;width:50px">
              <img src="../../assets/查看次数.png" style="height: 12px;width: 12px;"/>3333
            </div>
            <div>
              <el-rate
                v-model="value2"
                :colors="colors" disabled>
              </el-rate>
            </div>
          </div>
        </el-card>
      </li><li>
        <el-card style="background-color: aliceblue;
              border-radius: 10px;"  shadow="always">
          <div class="imgGet">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png">
            <span>题目1111</span>
          </div>
          <div style="padding: 14px;">
            <div class="introduction">
              简介四五字简介四五字简介四五字简介四五字简介四五字简介四五字...
            </div>
          </div>
          <div class="other-container">
            <div style="font-size: 14px; color: rgb(255, 129, 9);">
              ￥99.99
            </div>
            <div style="font-size: 14px; color: #888;width:50px">
              <img src="../../assets/查看次数.png" style="height: 12px;width: 12px;"/>3333
            </div>
            <div>
              <el-rate
                v-model="value2"
                :colors="colors" disabled>
              </el-rate>
            </div>
          </div>
        </el-card>
      </li>
      </ul>
    </div>


    <div class="choose"><center>分类2</center></div>
    <div class="recommend">
      <ul>
        <li>
          <el-card style="background-color: aliceblue;
              border-radius: 10px;"  shadow="always">
            <div class="imgGet">
              <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png">
              <span>题目1111</span>
            </div>
            <div style="padding: 14px;">
              <div class="introduction">
                简介四五字简介四五字简介四五字简介四五字简介四五字简介四五字...
              </div>
            </div>
            <div class="other-container">
              <div style="font-size: 14px; color: rgb(255, 129, 9);">
                ￥99.99
              </div>
              <div style="font-size: 14px; color: #888;width:50px">
                <img src="../../assets/查看次数.png" style="height: 12px;width: 12px;"/>3333
              </div>
              <div>
                <el-rate
                  v-model="value2"
                  :colors="colors" disabled>
                </el-rate>
              </div>
            </div>
          </el-card>
        </li>
        <li>
        <el-card style="background-color: aliceblue;
              border-radius: 10px;"  shadow="always">
          <div class="imgGet">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png">
            <span>题目1111</span>
          </div>
          <div style="padding: 14px;">
            <div class="introduction">
              简介四五字简介四五字简介四五字简介四五字简介四五字简介四五字...
            </div>
          </div>
          <div class="other-container">
            <div style="font-size: 14px; color: rgb(255, 129, 9);">
              ￥99.99
            </div>
            <div style="font-size: 14px; color: #888;width:50px">
              <img src="../../assets/查看次数.png" style="height: 12px;width: 12px;"/>3333
            </div>
            <div>
              <el-rate
                v-model="value2"
                :colors="colors" disabled>
              </el-rate>
            </div>
          </div>
        </el-card>
      </li><li>
        <el-card style="background-color: aliceblue;
              border-radius: 10px;"  shadow="always">
          <div class="imgGet">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png">
            <span>题目1111</span>
          </div>
          <div style="padding: 14px;">
            <div class="introduction">
              简介四五字简介四五字简介四五字简介四五字简介四五字简介四五字...
            </div>
          </div>
          <div class="other-container">
            <div style="font-size: 14px; color: rgb(255, 129, 9);">
              ￥99.99
            </div>
            <div style="font-size: 14px; color: #888;width:50px">
              <img src="../../assets/查看次数.png" style="height: 12px;width: 12px;"/>3333
            </div>
            <div>
              <el-rate
                v-model="value2"
                :colors="colors" disabled>
              </el-rate>
            </div>
          </div>
        </el-card>
      </li><li>
        <el-card style="background-color: aliceblue;
              border-radius: 10px;"  shadow="always">
          <div class="imgGet">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png">
            <span>题目1111</span>
          </div>
          <div style="padding: 14px;">
            <div class="introduction">
              简介四五字简介四五字简介四五字简介四五字简介四五字简介四五字...
            </div>
          </div>
          <div class="other-container">
            <div style="font-size: 14px; color: rgb(255, 129, 9);">
              ￥99.99
            </div>
            <div style="font-size: 14px; color: #888;width:50px">
              <img src="../../assets/查看次数.png" style="height: 12px;width: 12px;"/>3333
            </div>
            <div>
              <el-rate
                v-model="value2"
                :colors="colors" disabled>
              </el-rate>
            </div>
          </div>
        </el-card>
      </li><li>
        <el-card style="background-color: aliceblue;
              border-radius: 10px;"  shadow="always">
          <div class="imgGet">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png">
            <span>题目1111</span>
          </div>
          <div style="padding: 14px;">
            <div class="introduction">
              简介四五字简介四五字简介四五字简介四五字简介四五字简介四五字...
            </div>
          </div>
          <div class="other-container">
            <div style="font-size: 14px; color: rgb(255, 129, 9);">
              ￥99.99
            </div>
            <div style="font-size: 14px; color: #888;width:50px">
              <img src="../../assets/查看次数.png" style="height: 12px;width: 12px;"/>3333
            </div>
            <div>
              <el-rate
                v-model="value2"
                :colors="colors" disabled>
              </el-rate>
            </div>
          </div>
        </el-card>
      </li><li>
        <el-card style="background-color: aliceblue;
              border-radius: 10px;"  shadow="always">
          <div class="imgGet">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png">
            <span>题目1111</span>
          </div>
          <div style="padding: 14px;">
            <div class="introduction">
              简介四五字简介四五字简介四五字简介四五字简介四五字简介四五字...
            </div>
          </div>
          <div class="other-container">
            <div style="font-size: 14px; color: rgb(255, 129, 9);">
              ￥99.99
            </div>
            <div style="font-size: 14px; color: #888;width:50px">
              <img src="../../assets/查看次数.png" style="height: 12px;width: 12px;"/>3333
            </div>
            <div>
              <el-rate
                v-model="value2"
                :colors="colors" disabled>
              </el-rate>
            </div>
          </div>
        </el-card>
      </li><li>
        <el-card style="background-color: aliceblue;
              border-radius: 10px;"  shadow="always">
          <div class="imgGet">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png">
            <span>题目1111</span>
          </div>
          <div style="padding: 14px;">
            <div class="introduction">
              简介四五字简介四五字简介四五字简介四五字简介四五字简介四五字...
            </div>
          </div>
          <div class="other-container">
            <div style="font-size: 14px; color: rgb(255, 129, 9);">
              ￥99.99
            </div>
            <div style="font-size: 14px; color: #888;width:50px">
              <img src="../../assets/查看次数.png" style="height: 12px;width: 12px;"/>3333
            </div>
            <div>
              <el-rate
                v-model="value2"
                :colors="colors" disabled>
              </el-rate>
            </div>
          </div>
        </el-card>
      </li><li>
        <el-card style="background-color: aliceblue;
              border-radius: 10px;"  shadow="always">
          <div class="imgGet">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png">
            <span>题目1111</span>
          </div>
          <div style="padding: 14px;">
            <div class="introduction">
              简介四五字简介四五字简介四五字简介四五字简介四五字简介四五字...
            </div>
          </div>
          <div class="other-container">
            <div style="font-size: 14px; color: rgb(255, 129, 9);">
              ￥99.99
            </div>
            <div style="font-size: 14px; color: #888;width:50px">
              <img src="../../assets/查看次数.png" style="height: 12px;width: 12px;"/>3333
            </div>
            <div>
              <el-rate
                v-model="value2"
                :colors="colors" disabled>
              </el-rate>
            </div>
          </div>
        </el-card>
      </li>
      </ul>
    </div>
    <div class="choose"><center>分类3</center></div>
    <div class="recommend">
      <ul>
        <li>
          <el-card style="background-color: aliceblue;
              border-radius: 10px;"  shadow="always">
            <div class="imgGet">
              <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png">
              <span>题目1111</span>
            </div>
            <div style="padding: 14px;">
              <div class="introduction">
                简介四五字简介四五字简介四五字简介四五字简介四五字简介四五字...
              </div>
            </div>
            <div class="other-container">
              <div style="font-size: 14px; color: rgb(255, 129, 9);">
                ￥99.99
              </div>
              <div style="font-size: 14px; color: #888;width:50px">
                <img src="../../assets/查看次数.png" style="height: 12px;width: 12px;"/>3333
              </div>
              <div>
                <el-rate
                  v-model="value2"
                  :colors="colors" disabled>
                </el-rate>
              </div>
            </div>
          </el-card>
        </li>
        <li>
        <el-card style="background-color: aliceblue;
              border-radius: 10px;"  shadow="always">
          <div class="imgGet">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png">
            <span>题目1111</span>
          </div>
          <div style="padding: 14px;">
            <div class="introduction">
              简介四五字简介四五字简介四五字简介四五字简介四五字简介四五字...
            </div>
          </div>
          <div class="other-container">
            <div style="font-size: 14px; color: rgb(255, 129, 9);">
              ￥99.99
            </div>
            <div style="font-size: 14px; color: #888;width:50px">
              <img src="../../assets/查看次数.png" style="height: 12px;width: 12px;"/>3333
            </div>
            <div>
              <el-rate
                v-model="value2"
                :colors="colors" disabled>
              </el-rate>
            </div>
          </div>
        </el-card>
      </li><li>
        <el-card style="background-color: aliceblue;
              border-radius: 10px;"  shadow="always">
          <div class="imgGet">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png">
            <span>题目1111</span>
          </div>
          <div style="padding: 14px;">
            <div class="introduction">
              简介四五字简介四五字简介四五字简介四五字简介四五字简介四五字...
            </div>
          </div>
          <div class="other-container">
            <div style="font-size: 14px; color: rgb(255, 129, 9);">
              ￥99.99
            </div>
            <div style="font-size: 14px; color: #888;width:50px">
              <img src="../../assets/查看次数.png" style="height: 12px;width: 12px;"/>3333
            </div>
            <div>
              <el-rate
                v-model="value2"
                :colors="colors" disabled>
              </el-rate>
            </div>
          </div>
        </el-card>
      </li><li>
        <el-card style="background-color: aliceblue;
              border-radius: 10px;"  shadow="always">
          <div class="imgGet">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png">
            <span>题目1111</span>
          </div>
          <div style="padding: 14px;">
            <div class="introduction">
              简介四五字简介四五字简介四五字简介四五字简介四五字简介四五字...
            </div>
          </div>
          <div class="other-container">
            <div style="font-size: 14px; color: rgb(255, 129, 9);">
              ￥99.99
            </div>
            <div style="font-size: 14px; color: #888;width:50px">
              <img src="../../assets/查看次数.png" style="height: 12px;width: 12px;"/>3333
            </div>
            <div>
              <el-rate
                v-model="value2"
                :colors="colors" disabled>
              </el-rate>
            </div>
          </div>
        </el-card>
      </li><li>
        <el-card style="background-color: aliceblue;
              border-radius: 10px;"  shadow="always">
          <div class="imgGet">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png">
            <span>题目1111</span>
          </div>
          <div style="padding: 14px;">
            <div class="introduction">
              简介四五字简介四五字简介四五字简介四五字简介四五字简介四五字...
            </div>
          </div>
          <div class="other-container">
            <div style="font-size: 14px; color: rgb(255, 129, 9);">
              ￥99.99
            </div>
            <div style="font-size: 14px; color: #888;width:50px">
              <img src="../../assets/查看次数.png" style="height: 12px;width: 12px;"/>3333
            </div>
            <div>
              <el-rate
                v-model="value2"
                :colors="colors" disabled>
              </el-rate>
            </div>
          </div>
        </el-card>
      </li><li>
        <el-card style="background-color: aliceblue;
              border-radius: 10px;"  shadow="always">
          <div class="imgGet">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png">
            <span>题目1111</span>
          </div>
          <div style="padding: 14px;">
            <div class="introduction">
              简介四五字简介四五字简介四五字简介四五字简介四五字简介四五字...
            </div>
          </div>
          <div class="other-container">
            <div style="font-size: 14px; color: rgb(255, 129, 9);">
              ￥99.99
            </div>
            <div style="font-size: 14px; color: #888;width:50px">
              <img src="../../assets/查看次数.png" style="height: 12px;width: 12px;"/>3333
            </div>
            <div>
              <el-rate
                v-model="value2"
                :colors="colors" disabled>
              </el-rate>
            </div>
          </div>
        </el-card>
      </li><li>
        <el-card style="background-color: aliceblue;
              border-radius: 10px;"  shadow="always">
          <div class="imgGet">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png">
            <span>题目1111</span>
          </div>
          <div style="padding: 14px;">
            <div class="introduction">
              简介四五字简介四五字简介四五字简介四五字简介四五字简介四五字...
            </div>
          </div>
          <div class="other-container">
            <div style="font-size: 14px; color: rgb(255, 129, 9);">
              ￥99.99
            </div>
            <div style="font-size: 14px; color: #888;width:50px">
              <img src="../../assets/查看次数.png" style="height: 12px;width: 12px;"/>3333
            </div>
            <div>
              <el-rate
                v-model="value2"
                :colors="colors" disabled>
              </el-rate>
            </div>
          </div>
        </el-card>
      </li><li>
        <el-card style="background-color: aliceblue;
              border-radius: 10px;"  shadow="always">
          <div class="imgGet">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png">
            <span>题目1111</span>
          </div>
          <div style="padding: 14px;">
            <div class="introduction">
              简介四五字简介四五字简介四五字简介四五字简介四五字简介四五字...
            </div>
          </div>
          <div class="other-container">
            <div style="font-size: 14px; color: rgb(255, 129, 9);">
              ￥99.99
            </div>
            <div style="font-size: 14px; color: #888;width:50px">
              <img src="../../assets/查看次数.png" style="height: 12px;width: 12px;"/>3333
            </div>
            <div>
              <el-rate
                v-model="value2"
                :colors="colors" disabled>
              </el-rate>
            </div>
          </div>
        </el-card>
      </li>
      </ul>
    </div>


  </div>
</template>

<script>
export default {
  data() {
    return {
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
  box-shadow: 0 0 5px;
  border-radius: 15px;
}

.swiper-slide.swiper_slide_item{
  width: 1100px;
  height: 400px;
}
.recommend{
  width: 80%;
  margin-left: 10%;
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
  height: 130px;
  width: 90%;
  margin-left: 5%;
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
  font-size: 14px; /* 设置字体大小为14像素，你可以根据需要进行调整 */
  color: #888; /* 使用灰色 (#888) 作为文字颜色，你可以选择不同的灰色值 */
  font-style: italic;
}
.choose{
  background-color: #888888;
  width: 80%;
  margin-left: 10%;
  height: 40px;
  font-size: 28px;
  line-height: 40px;
  margin-top: 40px;
  margin-bottom: 0;
}

.firstimg{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 60%;
  margin-left: 20%;
}
.firstimg img{
  width: 80px;
  height: 80px;
}

.firstimg .word{
  width: 80px;
  height: 20px;
  font-size: 20px;
  line-height: 20px;
}

.firstimg img:hover{
  transform: scaleX(-1);
  transition: all.6s;
}
</style>
