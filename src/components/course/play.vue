<template>
  <div class="video-container">
    <div class="video-frame" style="width: 800px">
      <div class="course-title-info">
        <h2>全面预算编制以及预算的执行、 控制与分析实务</h2>
        <p style="color: #888;font-size: 14px;">掌握预算作为计划与控制系统在企业应用中的关键节点，明确不同部门在预算管理体系中的职责定位。学习领会通过预算管理体系实现业务运营管控的有效机制，以及在不同业务和不同企业应用的方式</p>
      </div>
      <video controls width="832px" height="468px">
        <source src="https://media.w3.org/2010/05/sintel/trailer.mp4" type="video/mp4">
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
          <el-col :span="24" v-for="(course, index) in courses" :key="index">
            <el-card :body-style="{ padding: '10px' }" style="width: 400px;margin-bottom: 8px">
              <div class="course-content">
                <img :src="course.cover" class="course-cover" style="height: 100px;width: 180px;" alt="课程封面" />
                <div class="course-info">
                  <h4>{{ course.title }}</h4>
                  <p>{{ course.intro }}</p>
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
export default {
  data() {
    return {
      rating: 0,
      courses: [
        {
          title: '课程1',
          cover: 'https://z1.ax1x.com/2023/11/05/piQshLV.jpg',
          intro: '这是课程1的简介。',
        },
        {
          title: '课程2',
          cover: 'https://z1.ax1x.com/2023/11/05/piQshLV.jpg',
          intro: '这是课程2的简介。',
        },
        {
          title: '课程3',
          cover: 'https://z1.ax1x.com/2023/11/05/piQshLV.jpg',
          intro: '这是课程3的简介。',
        },
        {
          title: '课程4',
          cover: 'https://z1.ax1x.com/2023/11/05/piQshLV.jpg',
          intro: '这是课程4的简介。',
        },
        {
          title: '课程5',
          cover: 'https://z1.ax1x.com/2023/11/05/piQshLV.jpg',
          intro: '这是课程5的简介。',
        }
      ],
    };
  },
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
