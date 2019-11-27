<template>
  <div class="page-container">
    <b-container>
        <br />
      <header>
        <h2>
          Example heading
          <b-badge variant="success">New</b-badge>
        </h2>
        <h6>Example heading</h6>
      </header>
      <br />
      <div>
        <code>
          sadfasdkf
          <br />sadfasdkfasdf
          <br />asdfasdf
          <br />asdfasdfasdf
          <br />asdfasdfsdf
        </code>
        <b-img-lazy v-bind="mainProps" src="https://picsum.photos/300/150/?image=41" alt="Image 8"></b-img-lazy>
        <br />
        <div>
            <h4>Example heading</h4>
            <p>
                asdfasdfasdfasdfadf
                <br />asdfasdfasdf
                <br />asdfasdfasdfasdfadf
                <br />asdfasdfasdfasdfadf
                <br />asdfasdfasdfasdfasdf
                <br />asdfasdfasdf
            </p>
        </div>
      </div>
    </b-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mainProps: {
        center: true,
        fluidGrow: true,
        blank: true,
        blankColor: "#bbb",
        width: 600,
        height: 400,
        class: "my-1"
      }
    };
  }
};
</script>