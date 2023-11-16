<script>
export default {
  data(){
    return{
      number:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
      value2: 5,
      colors: ['#99A9BF', '#F7BA2A', '#FF9900'], // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
    }
  }
};
</script>

<template>
  <div>



    <nav>
      <ul>
        <li><a href="#">全部</a></li>
        <li><a href="#">财务方向</a></li>
        <li><a href="#">税务方向</a></li>
        <li><a href="#">财税方向</a></li>
        <div class="search-container">
          <input type="text" placeholder="搜索...">
          <button type="submit"><img src="../../assets/搜索.png"/></button>
        </div>
      </ul>
    </nav>



    <div class="recommend">
      <ul>
        <li v-for="(number,index) in number" :key="number" >
          <el-card shadow="always">
            <div class="imgGet">
              <img src="https://z1.ax1x.com/2023/11/05/piQshLV.jpg">
              <div>
                <span style="margin-top: 10px">测试课程{{number}}</span>
              </div>
            </div>
            <div style="padding: 14px;">
              <div class="introduction">
                关于测试课程{{number}}的一段简介，关于测试课程{{number}}的一段简介，关于测试课程{{number}}的一段简介
              </div>
            </div>
            <div class="other-container" style="display: grid; grid-template-columns: 1fr auto;">
              <i class="el-icon-view">1248</i>
              <el-rate v-model="value2" :colors="colors" disabled></el-rate>
            </div>
          </el-card>
        </li>
      </ul>
      <center>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage3"
          :page-size="100"
          layout="prev, pager, next, jumper"
          :total="1000">
        </el-pagination>
      </center>
    </div>

  </div>

</template>

<style scoped>

.search-container {
  margin: 0;
  display: flex;
  max-width: 400px;
  background-color: #fff;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 2px 2px black;
  float: right;
}

input {
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 5px 0 0 5px;
  outline: none;
}
.search-container img{
  width: 15px;
  height: 15px;
}
button {
  padding: 10px 15px;
  background-color: #ffc3c3;
  color: #fff;
  border: none;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #ff3434;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
nav {
  width: 70%;
  margin-left: 15%;
}

nav ul {
  display: flex; /* 使用弹性布局使链接横向排列 */
  justify-content: space-around; /* 将链接水平均匀分布 */
  padding: 10px 0; /* 上下内边距 */
}

nav li {
  margin: 0;
  height: 30px;
}

nav a {
  color: black;
  text-decoration: none;
  padding: 10px 20px;
  transition: background-color 0.3s;
  border-radius: 20px;
  line-height: 30px;
  font-size: 20px;
}

nav a:hover {
  background-color: #ffc3c3;
  color: #ff3434;
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
</style>
