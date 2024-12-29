<template>
  <div class="page-container">
    <b-container class="resume" id="pdfDom">
      <header>
        <div>
          <h2>张程荣  前端开发工程师</h2>
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
                <span>浙江杭州临平区</span>
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
            <use xlink:href="#icon-tubiaozhizuomoban3" />
          </svg> 工作经验总结
        </h4>
        <div class="info-body">
          <div class="info-body-item">
            <div class="info-content">
              <p>精通vue/angular对项目进行开发与看护</p>
              <p>精通git日常使用场景命令对项目代码进行管理</p>
              <p>善于与人沟通、合理安排工作、保证业务质量</p>
            </div>
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
                <strong>涉及开发技术栈</strong> mui框架、H5+、jq+bootstrap+服务端ejs模板引擎、vue全家桶、nodejs(初步了解)
              </p>
              <p>
                <strong>优秀项目经验</strong> 全国高校学工saas平台
              </p>
              <p>
                <strong>项目推广情况</strong> 目前已经在厦门大学、上海外国语大学、云南财经大学等211/985高校成功应用，作为各个地区的标杆院校，同时辐射周边地区的高校。
              </p>
            </div>
          </div>
          <div class="info-body-item">
            <div class="info-title">
              <span class="info-title-item">2019.02-2020.03</span>
              <span class="info-title-item">厦门易联众-易惠网络科技有限公司</span>
              <span class="info-title-item">前端开发工程师</span>
            </div>
            <div class="info-content">
              <p>
                <strong>涉及开发技术栈</strong> elementUI，MintUI，uniapp
              </p>
              <p>
                <strong>对账平台、免疫预约管理平台、便民邮寄管理平台等pc端平台</strong>
                <br /><strong>便民邮寄，预约免疫等公众号H5页面</strong>
                <br /><strong>榕医通计免小程序</strong>
              </p>
            </div>
          </div>
          <div class="info-body-item">
            <div class="info-title">
              <span class="info-title-item">2020.03-{{today}}</span>
              <span class="info-title-item">北京外企德科OD-华为杭州研究所</span>
              <span class="info-title-item">前端开发工程师</span>
            </div>
            <div class="info-content">
              <p>
                <strong>涉及开发技术栈</strong> vue2/vue3/angular
              </p>
              <p>
                <strong>负责Codehub代码仓研发工作2年半，期间针对codehub代码仓文件模块、MR、变更Diff等关键功能进行重构与调优</strong>
                <br />
                <strong>负责云龙流水线交付工作1年左右，期间主要负责云龙特性交付、插件变更、版本归一工作以及</strong>
                <br />
                <strong>负责伏羲侧流水线业务1年，主要承担伏羲流水线小组工作需求分析接纳与重要模块看护，保障迭代交付质量与变更</strong>
                <br />
                <strong>在负责伏羲项目期间，另外还参与过一些公共事项的维护：</strong>
                <br /><span>1.fuxi-web下的应用构建工具整改</span>
                <br /><span>2.fuxi-web下的应用送检整改等</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="info-wrap">
        <h4>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-tubiaozhizuomoban3" />
          </svg> 技能描述
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
