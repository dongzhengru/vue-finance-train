<template>
  <div class="video-container">
    <div class="video-frame" style="width: 800px"  v-for="(course, index) in courseInfo" :key="index" v-if="course.id==courseId">
      <div class="course-title-info">
        <h2>{{course2.title}}</h2>
        <p style="color: #888;font-size: 14px;">{{course2.intro}}</p>
      </div>
      <video controls width="832px" height="468px">1
        <source :src="course2.videoUrl" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <div class="rating-section">
        <div style="display: flex; align-items: center;">


          
          <h3 style="margin-right: 10px;">评分</h3>
          <el-rate v-model="rating" :max="5" allow-half></el-rate>
        </div>
      </div>
      <el-divider></el-divider>
      <div class="comment-section">
        <h3>评论区</h3>
        <!-- 评论区 -->
      </div>
    </div>
    <div class="right-container">
      <div class="instructor-info">
        <img src="https://www.goldenfinance.com.cn/static/goldenfinance/images/pic4.png" style="width: 75px;height: 75px;" alt="讲师头像">
        <div>
          <h3 style="margin-bottom: 0;line-height: 0;">周立</h3>
          <p style="color: #888;">清华大学经济管理学院会计系</p>
        </div>
      </div>

      <div class="recommended-videos">
        <h3>推荐课程</h3>
        <el-row :gutter="20">
          <el-col :span="24" v-for="(course, index) in courseInfo" :key="index" v-if="index<5">
            <el-card :body-style="{ padding: '10px' }" style="width: 400px;margin-bottom: 8px">
              <div class="course-content">
                <img :src="course.coverUrl" class="course-cover" style="height: 100px;width: 180px;" alt="课程封面" />
                <div class="course-info">
                  <h4>{{course.title}}</h4>
                  <p>{{course.intro}}</p>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import course from "./index.vue";

export default {
  data() {
    return {
      courseId:2,
      rating: 0,
      id:1,
      course2:[],
      courseInfo: [
        // {
        //   title: '课程1',
        //   cover: 'https://z1.ax1x.com/2023/11/05/piQshLV.jpg',
        //   intro: '这是课程1的简介。',
        // },
        // {
        //   title: '课程2',
        //   cover: 'https://z1.ax1x.com/2023/11/05/piQshLV.jpg',
        //   intro: '这是课程2的简介。',
        // },
        // {
        //   title: '课程3',
        //   cover: 'https://z1.ax1x.com/2023/11/05/piQshLV.jpg',
        //   intro: '这是课程3的简介。',
        // },
        // {
        //   title: '课程4',
        //   cover: 'https://z1.ax1x.com/2023/11/05/piQshLV.jpg',
        //   intro: '这是课程4的简介。',
        // },
        // {
        //   title: '课程5',
        //   cover: 'https://z1.ax1x.com/2023/11/05/piQshLV.jpg',
        //   intro: '这是课程5的简介。',
        // }
      ],
    };
  },
  methods:{
    initCourse(){
      const data = {
        page: 1,
        pageSize: 32,
        courseTypeId: '',
        courseName: ''
      };
      axios.post('http://localhost:8081/getCourse', data).then(res => {
        this.courseInfo = res.data.data.records
        console.log(this.courseInfo);
      });
      axios.post('http://localhost:8081/getCourseById/'+this.courseId).then(res => {
        this.course2 = res.data.data
        console.log(this.course2);
      })
    },
  },
  mounted() {
    this.initCourse();
  }
};
</script>

<style scoped>
.video-container {
  display: flex;
  justify-content: space-between;
}

.video-frame {
  margin: 0 auto;
}

.right-container {
  width: 30%;
  display: flex;
  flex-direction: column;
}

.instructor-info,
.recommended-videos {
  margin-bottom: 20px;
}

.rating-section,
.comment-section {
  margin-top: 20px;
}

.instructor-info {
  display: flex;
  align-items: center;
  max-width: 400px; /* 根据需要调整最大宽度 */
}

.instructor-info img {
  border-radius: 50%; /* 使图像呈圆形 */
  margin-right: 15px; /* 根据需要调整图像与文本之间的间距 */
}

.instructor-info div {
  flex-grow: 1;
}

.course-cover {
  width: 100%;
  height: 150px; /* 调整课程封面的高度 */
  object-fit: cover;
}

.course-content {
  display: flex;
  align-items: center;
}

.course-info {
  margin-left: 20px; /* 调整课程标题和简介与封面的间距 */
}

.course-info h4 {
  margin: 0;
  font-size: 16px;
}

.course-info p {
  margin: 0;
  color: #666;
  font-size: 14px;
}
</style>
