<template>
  <div style="width: 1000px; margin: 0 auto">
    <div style="margin: 20px 0">
      <div style="margin: 10px 0">
        <el-input type="textarea" placeholder="请输入互动内容" v-model="comment.content"></el-input>
        <div style="text-align: right; margin: 10px 0" >
          <el-button type="primary" @click="submit" >提交</el-button>
        </div>
      </div>
    </div>

    <div style="margin: 20px 0">
      <div style="margin: 10px 0; font-size: 24px; padding: 10px 0; border-bottom: 1px solid #ccc; text-align: left">
        互动广场
      </div>
      <div style="margin: 20px 0; text-align: left">
        <div style="padding: 10px 0;border-bottom: 1px solid #ccc;"  v-for="item in comments" :key = "item.id">
          <div style=" display: flex">
            <div style="width: 80px"><el-avatar :size="50" :src="'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png'"></el-avatar></div>
            <div style="flex: 1">
              <div style="color: black ">  <b>{{ item.username }}：</b><span>{{ item.content }}</span></div>

              <div style="width: 200px;margin-top: 15px">
                <i class="el-icon-time"></i><span style="margin-left: 5px">{{ item.createTime}}</span>
              </div>
              <!--多级回复-->
              <div>
                <el-button type="text" @click="reply(item.id, item.username)">回复</el-button>
              </div>

              <!--回复列表-->
              <div v-if="item.children.length" style="margin-left: 100px;background-color:aliceblue;padding: 10px;border-radius: 10px">
                <div v-for="sub in item.children" :key="sub.id">
                  <div style="padding: 5px 0">
                    <b style="cursor: pointer" @click="reply(sub.pid,sub.username)">{{ sub.username }}</b>
                    <span>
                      回复
                    <span style="color: cornflowerblue">@{{ sub.target }}</span>
                    <span style="color: #666; margin-left: 10px">{{ sub.content }}</span>
                    </span>
                    <div style="width: 200px;margin-top: 15px">
                      <i class="el-icon-time"></i><span style="margin-left: 5px">{{ sub.createTime }}</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

    <el-dialog title="回复" :visible.sync="dialogFormVisible" width="40%">
      <el-form :model="replyComment">
        <el-form-item label="内容" :label-width="100">
          <el-input v-model="replyComment.content" autocomplete="off" style="width: 80%"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="saveReply">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data(){
    return{
      value: 0,
      comments: [],
      pid: 0,
      comment: {
        content: ''
      },
      replyComment:{

      },
      dialogFormVisible:false
    }
  },
  created() {
    this.load()
  },
  methods:{
    reply(parentId, target){
      this.replyComment = {parentId: parentId, userId: 3, username:'dzr', foreignId: -1, target: target}
      console.log(this.replyComment)
      this.dialogFormVisible = true
    },
    load(){
      axios.get('http://localhost:8081/comment?foreignId=-1').then(res => {
        this.comments = res.data.data
      })
    },
    saveReply(){
      axios.post('http://localhost:8081/comment/save', this.replyComment).then(res => {
        if (res.status === 200){
          this.$notify.success("评论成功")
          this.load();
          this.replyComment = {}
          this.dialogFormVisible = false
        }
      })
    },
    submit(){
      this.comment.userId = 4
      this.comment.username = 'gsh'
      this.comment.foreignId = -1
      axios.post('http://localhost:8081/comment/save', this.comment).then(res => {
        this.$notify.success("评论成功")
        this.load();
        this.comment = {}
      })
    }
  }
}
</script>
