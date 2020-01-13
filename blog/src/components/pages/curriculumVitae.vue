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
            <use xlink:href="#icon-tubiaozhizuomoban3" />
          </svg> 工作经验总结
        </h4>
        <div class="info-body">
          <div class="info-body-item">
            <div class="info-content">
              <p>熟练利用vue相关技术进行管理平台和H5开发</p>
              <p>1.熟悉vue以及vue有关的实用轮子如vue-router,vuex等，并可手动实现简易版vue-router，vuex</p>
              <p>2.熟悉vue1.0原理并曾手动实现简易MVVM框架</p>
              <p>3.阅读过vue2.0源码，知晓相对1.0优势，同时能够简要描述虚拟数与diff算法</p>
              <p>视频相关</p>
              <p>工作之余帮助朋友开发过浏览器录屏、音视频播放等功能，对该内容有所了解</p>
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
              <p>
                <strong>项目开发情况</strong> 项目围绕两个核心模块进行展开：流程引擎模块和表单引擎模块。
                <br /><strong>流程引擎：</strong>
                <br />1.配置表单
                <br />2.用户手动配置流程节点，确定基本流程环节，包括流转节点(开始、结束、条件、事务)，流转条件，流转分支，节点代理委托
                <br />3.流程确定之后，针对各个节点进行角色配置，包括操作权限，访问权限
                <br />4.角色确定之后，只需在角色管理进行账号绑定就可为系统用户提供相对应的流程服务。
                <br /><strong>表单引擎：</strong>
                <br />备注：有些事务不需要走审批流，只是一个各个角色参与下的信息收集过程，比如学生信息收集
                <br />1.配置表单
                <br />2.用户手动配置新增表单角色(与系统角色为一对多关系，与上述流程节点相似)
                <br />3.为对应的表单角色配置操作权限与访问权限以及该表单角色下所包含的系统角色
                <br />4.角色确定之后，只需在角色管理进行账号绑定就可为系统用户提供相对应的表单服务。
                <br /><strong>二者前提：</strong>
                <br />表单布局与事件触发器：通过用户手动配置表单展示与事件触发器从而实现在流程和表单引擎操作表单的时候可以实现联动。
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
                <strong>涉及开发技术栈</strong> elementUI，MintUI，uniapp
              </p>
              <p>
                <strong>对账平台、免疫预约管理平台、便民邮寄管理平台等pc端平台</strong>
                <br /><strong>便民邮寄，预约免疫等公众号H5页面</strong>
                <br /><strong>榕医通计免小程序</strong>
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
              <p>工作认真负责，吃苦耐劳，勤奋好学，勇于挑战，不畏艰难。</p>
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
