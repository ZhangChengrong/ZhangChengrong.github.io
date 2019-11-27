<template>
  <div class="main">
    <b-navbar class="main-header" :toggleable="false" type="dark" variant="dark">
      <b-navbar-brand href="#/index">ZcrBlog</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">我的博文</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <img width="20" src="../assets/img.jpg" alt="">
            </template>
            <b-dropdown-item href="#/curriculumVitae">Curriculum Vitae</b-dropdown-item>
            <!-- <b-dropdown-item href="#">Sign Out</b-dropdown-item> -->
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div class="main-content">
        <router-view />
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less">
.main{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    .main-content{
        flex: auto;
        box-sizing: border-box;
        overflow: auto;
    }
}
</style>
