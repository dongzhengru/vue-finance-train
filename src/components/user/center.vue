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
        coverUrl: 'https://xgfm737.github.io/2023/02/28/hello-world/touzishiwu.png',
        courseName: '国际税收优惠政策解读',
        courseSummary: '详细解读国际税收优惠政策，指导企业如何合理利用税收优惠。'
      },{
        coverUrl: 'https://xgfm737.github.io/2023/02/28/hello-world/chunashiwu.png',
        courseName: '资本运作税务筹划',
        courseSummary: '学习如何为资本运作进行税务筹划，降低税收成本。'
      },{
        coverUrl: 'https://xgfm737.github.io/2023/02/28/hello-world/caiwufenxi.png',
        courseName: '税务风险防控',
        courseSummary: '了解税务风险的来源，学习如何进行税务风险防控。'
      }], // 课程列表数据
      currentPage: 1, // 当前页码
      pageSize: 10, // 每页显示的条目数
      totalCourses: 3, // 总课程数
      playRecords: [{
        coverUrl: 'https://xgfm737.github.io/2023/02/28/hello-world/touzishiwu.png',
        title: '国际税收合规',
        watchDuration: '02:04:23',
        watchTime: '2023年11月8日 13:27'
      },{
        coverUrl: 'https://xgfm737.github.io/2023/02/28/hello-world/zaiquanshiwu.png',
        title: '资本运作税收争议解决',
        watchDuration: '01:16:20',
        watchTime: '2023年11月8日 13:21'
      },{
        coverUrl: 'https://xgfm737.github.io/2023/02/28/hello-world/zaiquanshiwu.png',
        title: '个人所得税优惠政策解读',
        watchDuration: '00:26:12',
        watchTime: '2023年11月8日 08:45'
      }],
      activeTab: "profile",
      profile: {
        name: "dzr",
        email: "dzr@example.com",
        // 其他个人资料字段
      },
      option: {
        title: {
          text: '近7天课程观看人数统计',
        },
        xAxis: {
          type: 'category',
          data: '',
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data: '',
            type: 'line',
            smooth: true, // 使折线平滑
            areaStyle: {}, // 可以添加区域填充
            itemStyle: { color: '#1da2e3' }, // 修改折线颜色
          },
        ],
      },
      courseData1: [
        { date: '2023-11-06', views: 92 },
        { date: '2023-11-07', views: 75 },
        { date: '2023-11-08', views: 60 },
        { date: '2023-11-09', views: 85 },
        { date: '2023-11-10', views: 50 },
        { date: '2023-11-11', views: 65 },
        { date: '2023-11-12', views: 78 },
      ],
      courseData2: [
        { date: '2023-11-06', views: 1244 },
        { date: '2023-11-07', views: 843 },
        { date: '2023-11-08', views: 1043 },
        { date: '2023-11-09', views: 1340 },
        { date: '2023-11-10', views: 916 },
        { date: '2023-11-11', views: 1215 },
        { date: '2023-11-12', views: 1046 },
      ],
      courseData3: [
        { date: '2023-11-06', views: 1254 },
        { date: '2023-11-07', views: 1357 },
        { date: '2023-11-08', views: 1253 },
        { date: '2023-11-09', views: 1757 },
        { date: '2023-11-10', views: 1252 },
        { date: '2023-11-11', views: 1157 },
        { date: '2023-11-12', views: 1059 },
      ],
      courseData4: [
        { date: '2023-11-06', views: 5 },
        { date: '2023-11-07', views: 3 },
        { date: '2023-11-08', views: 1 },
        { date: '2023-11-09', views: 8 },
        { date: '2023-11-10', views: 2 },
        { date: '2023-11-11', views: 3 },
        { date: '2023-11-12', views: 1 },
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
      const recentDays1 = this.courseData1.slice(-7);
      const recentDays2 = this.courseData2.slice(-7);
      const recentDays3 = this.courseData3.slice(-7);
      const recentDays4 = this.courseData4.slice(-7);
      const dates1 = recentDays1.map(day => day.date);
      const dates2 = recentDays2.map(day => day.date);
      const dates3 = recentDays3.map(day => day.date);
      const dates4 = recentDays4.map(day => day.date);
      const views1 = recentDays1.map(day => day.views);
      const views2 = recentDays2.map(day => day.views);
      const views3 = recentDays3.map(day => day.views);
      const views4 = recentDays4.map(day => day.views);

      // ECharts 配置


      // 使用配置项显示图表
      this.option.title.text = '近7天课程观看人数统计'
      this.option.xAxis.data = dates1
      this.option.series[0].data = views1
      myChart1.setOption(this.option);
      this.option.title.text = '近7天课程观看时长统计'
      this.option.xAxis.data = dates2
      this.option.series[0].data = views2
      this.option.series[0].itemStyle.color = '#123042'
      myChart2.setOption(this.option);
      this.option.title.text = '近7天互动人数统计'
      this.option.xAxis.data = dates3
      this.option.series[0].data = views3
      myChart3.setOption(this.option);
      this.option.title.text = '近7天课程更新次数统计'
      this.option.xAxis.data = dates4
      this.option.series[0].data = views4
      this.option.series[0].itemStyle.color = '#1da2e3'
      myChart4.setOption(this.option);
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
