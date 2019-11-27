<template>
  <div class="page-container">
    <b-container class="resume" id="pdfDom">
      <header>
        <div>
          <h2>张程荣</h2>
          <h6>求职意向：前端开发工程师</h6>
          <h6>简历github：https://zhangchengrong.github.io/#/curriculumVitae</h6>
          <div class="base-info">
            <div class="base-info-item">
              <div>
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-tubiaozhizuomoban5" />
                </svg>生日:
                <span>1993.10.09</span>
              </div>
              <div>
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-tubiaozhizuomoban" />
                </svg>现居:
                <span>福建厦门</span>
              </div>
            </div>
            <div class="base-info-item">
              <div>
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-tubiaozhizuomoban6" />
                </svg>电话:
                <span>19959285494</span>
              </div>
              <div>
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-tubiaozhizuomoban1" />
                </svg>邮箱:
                <span>2690572824@qq.com</span>
              </div>
            </div>
            <div class="base-info-item"></div>
          </div>
        </div>
        <div>
          <img src="../../assets/img.jpg" alt srcset />
        </div>
      </header>
      <!-- <div class="divide-line"></div> -->
      <div class="info-wrap">
        <h4>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-tubiaozhizuomoban7" />
          </svg> 教育背景
        </h4>
        <div class="info-body">
          <div class="info-title">
            <span class="info-title-item">2012.09-2016-06</span>
            <span class="info-title-item">厦门大学</span>
            <span class="info-title-item">软件学院软件工程系</span>
          </div>
          <div class="info-content">
            <p>主修课程: 软件工程，面向对象开发与实践，软件测试，c，c++，c#，java，数据库设计，算法与数据结构等</p>
            <p>在校活动: 大学生创新与创业训练项目获"国家级"评价，参与厦门大学软件学院checkIT中荷交流班</p>
            <p>毕业设计：厦门大学学生公寓管理系统，主要负责前端开发。至今仍被厦大学生公寓办使用中，且能满足新生抢宿舍等要求，表现优秀。</p>
          </div>
        </div>
      </div>
      <div class="info-wrap">
        <h4>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-tubiaozhizuomoban4" />
          </svg> 工作经历
        </h4>
        <div class="info-body">
          <div class="info-body-item">
            <div class="info-title">
              <span class="info-title-item">2016.06-2019-01</span>
              <span class="info-title-item">厦门旭昶恒盛网络科技股份有限公司</span>
              <span class="info-title-item">前端开发工程师</span>
            </div>
            <div class="info-content">
              <p>
                <strong>2016.06-2016.12 mui应用i厦大</strong> 前端开发，使用技术：mui框架、H5+
              </p>
              <p>
                <strong>2017.01-2017.04 辅导员工作平台</strong> 前端开发，使用技术：jq+bootstrap+服务端ejs模板引擎
              </p>
              <p>
                <strong>2017.04-2018.01 全国高校学工平台1.0</strong> 前端开发，使用技术：vuejs+vue-router+ajax
              </p>
              <p>
                <strong>2018.01-2019.02 全国高校学工平台2.0</strong> 前端开发，使用技术：vuejs+vue-router+vuex+ajax
              </p>
              <p>
                <strong>工作总结</strong>：精通vue开发，可以独立开发并维护一些类似element的组件库，如下拉框、表格、树等复杂组件；
                <br />熟练使用一些前端优化技术和配置对项目进行优化：雪碧图，gzip，路由懒加载，组件按需加载，cdn，缓存等。
                <br />熟练使用photoshop对asd文件进行切图取色
              </p>
            </div>
          </div>
          <div class="info-body-item">
            <div class="info-title">
              <span class="info-title-item">2019.02-{{today}}</span>
              <span class="info-title-item">厦门易联众-易惠网络科技有限公司</span>
              <span class="info-title-item">前端开发工程师</span>
            </div>
            <div class="info-content">
              <p>
                <strong>对账平台、免疫预约管理平台、便民邮寄管理平台等</strong> 前端开发，使用技术：vuejs+vue-router+vuex+axios/elementUI
              </p>
              <p>
                <strong>便民邮寄H5，预约免疫H5</strong> 前端开发， 使用技术： vuejs+vue-router+vuex+axios/MintUI
              </p>
              <p>
                <strong>榕医通计免小程序</strong> 前端开发， 使用技术：uniapp
              </p>
              <p>
                <strong>工作总结：</strong>精通平台类型产品的开发和维护，
                <br />熟练使用flexiblejs，rem开发H5响应式布局，
                <br />熟练使用uniapp进行跨平台小程序开发。
                <br />熟练使用蓝湖。
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="info-wrap">
        <h4>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-tubiaozhizuomoban3" />
          </svg> 技能证书
        </h4>
        <div class="info-body">
          <div class="info-body-item">
            <div class="info-content">
              <p>语言技能：大学英语四级，可简单进行口语交流和英文阅读</p>
              <p>专业技能：了解java，c，c++等编程语言，了解数据库设计与算法结构</p>
            </div>
          </div>
        </div>
      </div>
      <div class="info-wrap">
        <h4>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-tubiaozhizuomoban2" />
          </svg> 自我评价
        </h4>
        <div class="info-body">
          <div class="info-body-item">
            <div class="info-content">
              <p>个性乐观开朗，积极热情。</p>
              <p>工作认真负责，勇于挑战，不畏艰难。</p>
              <p>业余爱好：羽毛球，唱歌，游戏，偶尔逛逛技术博客以及为qq技术群新人提供技术帮助</p>
            </div>
          </div>
        </div>
      </div>
    </b-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      today: "至今"
    };
  },
  created() {
    let d = new Date();
    this.today = `${d.getFullYear()}-${("00" + (d.getMonth() + 1)).slice(
      -2
    )}-${("00" + d.getDate()).slice(-2)}`;
  },
  mounted() {
    window.addEventListener("keydown", e => {
      console.log(e.keyCode);
      if (e.ctrlKey && e.keyCode === 83) {
          e.preventDefault();
          this.getPdf('张程荣-前端开发工程师');
      }
    });
  },
  beforeDestroy() {
    window.removeEventListener("keydown", () => {
      console.log("destroy");
    });
  }
};
</script>
