<template>
  <div>
    <el-tabs v-model="activeTab" type="border-card" tab-position="left" style="height: 600px;border-radius: 15px">
      <el-tab-pane label="个人资料" name="profile">
        <el-form label-position="top">
          <el-form-item label="姓名">
            <el-input v-model="profile.name" style="width: 200px"></el-input>
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input v-model="profile.email" style="width: 200px"></el-input>
          </el-form-item>
          <el-button @click="updateProfile">保存</el-button>
        </el-form>
      </el-tab-pane>

      <el-tab-pane label="学习记录" name="study">
        <el-table :data="playRecords" style="width: 100%">
          <el-table-column label="课程封面">
            <template slot-scope="scope">
              <img :src="scope.row.coverUrl" alt="课程封面" style="width: 120px; height: 60px;">
            </template>
          </el-table-column>
          <el-table-column prop="title" label="课程标题"></el-table-column>
          <el-table-column prop="watchDuration" label="观看时长"></el-table-column>
          <el-table-column prop="watchTime" label="观看时间"></el-table-column>
        </el-table>
      </el-tab-pane>

      <el-tab-pane label="课程管理" name="courses">
        <div class="course-management">
          <el-form :model="form" label-width="80px">
            <el-form-item label="课程名称">
              <el-input size="small" v-model="form.courseName" style="width: 150px;"></el-input>
              <el-button size="small" type="primary" @click="searchCourses" style="margin-left: 10px;">搜索</el-button>
              <el-button size="small" type="success" @click="uploadCourse" style="margin-left: 10px;">课程上传</el-button>
            </el-form-item>
          </el-form>
          <el-table :data="courseList" style="width: 100%">
            <el-table-column label="课程封面">
              <template slot-scope="scope">
                <img :src="scope.row.coverUrl" alt="课程封面" style="width: 120px; height: 60px;">
              </template>
            </el-table-column>
            <el-table-column prop="courseName" label="课程名称"></el-table-column>
            <el-table-column prop="courseSummary" label="课程简介"></el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button type="danger" size="small" @click="deleteCourse(scope.$index)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-pagination
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[10, 20, 30, 40]"
            :page-size="pageSize"
            style="margin-top: 10px;"
            layout="total, sizes, prev, pager, next, jumper"
            :total="totalCourses">
          </el-pagination>
        </div>
      </el-tab-pane>

      <el-tab-pane label="学情分析" name="analysis">
        <div class="chart-row">
          <div style="width: 48%;height: 300px" class="chart-container" id="echarts-container1"></div>
          <div style="width: 48%;height: 300px" class="chart-container" id="echarts-container2"></div>
        </div>
        <div class="chart-row">
          <div style="width: 48%;height: 300px" class="chart-container" id="echarts-container3"></div>
          <div style="width: 48%;height: 300px" class="chart-container" id="echarts-container4"></div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  data() {
    return {
      form: {
        courseName: ''
      },
      courseList: [{
        coverUrl: 'https://z1.ax1x.com/2023/11/05/piQshLV.jpg',
        courseName: '测试课程1',
        courseSummary: '一条简介'
      },{
        coverUrl: 'https://z1.ax1x.com/2023/11/05/piQshLV.jpg',
        courseName: '测试课程2',
        courseSummary: '一条简介'
      },{
        coverUrl: 'https://z1.ax1x.com/2023/11/05/piQshLV.jpg',
        courseName: '测试课程3',
        courseSummary: '一条简介'
      }], // 课程列表数据
      currentPage: 1, // 当前页码
      pageSize: 10, // 每页显示的条目数
      totalCourses: 0, // 总课程数
      playRecords: [{
        coverUrl: 'https://z1.ax1x.com/2023/11/05/piQshLV.jpg',
        title: '测试课程1',
        watchDuration: '02:04:23',
        watchTime: '2023年11月8日 13:27'
      },{
        coverUrl: 'https://z1.ax1x.com/2023/11/05/piQshLV.jpg',
        title: '测试课程2',
        watchDuration: '01:16:20',
        watchTime: '2023年11月8日 13:21'
      },{
        coverUrl: 'https://z1.ax1x.com/2023/11/05/piQshLV.jpg',
        title: '测试课程3',
        watchDuration: '00:26:12',
        watchTime: '2023年11月8日 08:45'
      }],
      activeTab: "profile",
      profile: {
        name: "dzr",
        email: "dzr@example.com",
        // 其他个人资料字段
      },
      courseData: [
        { date: '2023-11-06', views: 92 },
        { date: '2023-11-07', views: 75 },
        { date: '2023-11-08', views: 60 },
        { date: '2023-11-09', views: 85 },
        { date: '2023-11-10', views: 50 },
        { date: '2023-11-11', views: 65 },
        { date: '2023-11-12', views: 78 },
      ],
    };
  },
  mounted() {
    setTimeout(() => {
      this.initECharts()
    }, 1000)
  },
  methods: {
    updateProfile() {
      // 处理个人资料保存逻辑
    },
    searchCourses() {
      // 在这里实现搜索课程的逻辑，你可以使用AJAX请求获取数据
      // 更新 courseList 和 totalCourses
    },
    uploadCourse() {

    },
    deleteCourse(index) {
      // 在这里实现删除课程的逻辑，可以通过AJAX请求进行删除操作
      // 更新 courseList 和 totalCourses
    },
    handleCurrentChange(currentPage) {
      this.currentPage = currentPage;
      this.searchCourses();
    },
    initECharts() {
      // 在组件挂载后初始化 ECharts 图表
      const echartsContainer1 = document.getElementById('echarts-container1');
      const echartsContainer2 = document.getElementById('echarts-container2');
      const echartsContainer3 = document.getElementById('echarts-container3');
      const echartsContainer4 = document.getElementById('echarts-container4');
      const myChart1 = echarts.init(echartsContainer1);
      const myChart2 = echarts.init(echartsContainer2);
      const myChart3 = echarts.init(echartsContainer3);
      const myChart4 = echarts.init(echartsContainer4);

      // 获取最近7天的日期和观看人数数据
      const recentDays = this.courseData.slice(-7);
      const dates = recentDays.map(day => day.date);
      const views = recentDays.map(day => day.views);

      // ECharts 配置
      const option = {
        title: {
          text: '近7天课程观看人数统计',
        },
        xAxis: {
          type: 'category',
          data: dates,
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data: views,
            type: 'line',
            smooth: true, // 使折线平滑
            areaStyle: {}, // 可以添加区域填充
            itemStyle: { color: '#1da2e3' }, // 修改折线颜色
          },
        ],
      };

      // 使用配置项显示图表
      myChart1.setOption(option);
      myChart2.setOption(option);
      myChart3.setOption(option);
      myChart4.setOption(option);
    }
  },
};
</script>

<style scoped>
/* 样式可以根据实际需求进行定制 */
.course-management {
  padding: 20px;
}

/* 使用Flex布局 */
.chart-row {
  display: flex;
  justify-content: space-between; /* 在每行上均匀分布图表 */
}

.chart-container {
  width: 48%; /* 设置图表容器的宽度为48%，留下一些空白 */
  height: 300px;
}

</style>
