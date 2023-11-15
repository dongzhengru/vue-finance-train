<script>
export default {
  data(){
    return{
      number:[1,2,3,4,5],
      number2:[1,2,3,4,5],
      value2: 5,
      textarea:[],
      textareaFirst:""
    }
  }
};
</script>

<template>
<div>
  <div class="body">

    <div class="input">
      <el-input
        type="textarea"
        :rows="8"
        placeholder="请输入内容"
        v-model="textareaFirst" style="width: 70%;margin-left: 15%;margin-top: 20px;">
      </el-input>
      <center><el-button type="primary" style="height: 50px;width: 100px;margin-top: 10px;margin-bottom: 10px;">发送</el-button></center>
    </div>

    <el-card  v-for="(number1,index) in number" :key="number1"  class="community" shadow="always">
      <div class="head">
        <div class="imageGet"><img src="https://z1.ax1x.com/2023/11/05/piQshLV.jpg"></div>
        <div class="username">username</div>
      </div>
      <div class="between">
        简单的评测简单的评测简单的评测简单的评测简单的评测简单的评测简单的评测简单的评测简单的评测简单的评测简单的评测简单的评测评测简单的评测简单的评测简单的评测简单的评测简单的评测简单的评测简单的评测简单的评测简单的评测简单的评测简单的评测简单的评测
      </div>
      <div class="end">
        <div></div>
        <div class="gb">
          <i class="fa fa-heart" style="font-size: 25px"></i>
        </div>
      </div>
      <div class="comments">
        <div v-for="(number3,index) in number2" :key="number3">
          <div class="comment">
            <div class="imageGet2"><img src="https://z1.ax1x.com/2023/11/05/piQshLV.jpg"></div>
            <div class="username2">username</div>:
            <div class="word">
              简单的评测简单的评测简单的评测简单的评测简单的评测简单的评测简单的评测简单的评测{{number3}}
            </div>
          </div>
          <div class="end2">
            <div></div>
            <div class="gb2">
              <i class="fa fa-heart" style="font-size: 15px"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="endInput">
        <el-input
        type="textarea"
        :rows="3"
        placeholder="请输入内容"
        v-model="textarea[number1]">
      </el-input>
          <el-button type="primary" style="height: 40px">发送</el-button>
      </div>
    </el-card>
  </div>
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
</template>

<style scoped>
.body{
  display: flex;
  flex-direction: column;
}
.community{
  width: 60%;
  margin-left: 20%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
}
.head{
  display: flex;
  flex-direction: row;
}
.imageGet img{
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.username{
  font-size: 30px;
  line-height: 40px;
}
.between{
  width: 80%;
  margin-left: 10%;
}
.end{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.gb{
  display: flex;
  flex-direction: row;
}
.gb img{
  width: 25px;
  height: 25px;
  margin-left: 10px;
  margin-right: 10px;
}
.comments{
  display: flex;
  flex-direction: column;
}
.comment{
  display: flex;
  flex-direction: row;
  margin-top: 10px;
}
.imageGet2 img{
  width: 20px;
  height: 20px;
  border-radius: 50%;
}
.username2{
  font-size: 15px;
  line-height: 20px;
  color: cornflowerblue;
}

.end2{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.gb2{
  display: flex;
  flex-direction: row;
}
.gb2 img{
  width: 15px;
  height: 15px;
  margin-left: 7px;
  margin-right: 10px;
}
.endInput{
  display: flex;
  flex-direction: row;
  margin-top: 20px;
}
.input{
  background-color: darkgray;
}
</style>
