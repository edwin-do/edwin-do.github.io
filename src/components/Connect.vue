<template>
  <section class="container-fluid px-0 section black">
    <!-- row1 -->
    <div class="container section-head">
      <div id="top"></div>
      <h1 id="heading">Connect.</h1>
      <div class="row">
        <div class="col-12 sect-sm pink">
          <div class="d-none d-md-flex rounded">
            <img
              class="rounded-circle"
              id="profile"
              src="../assets/img/profile.jpg"
              alt=""
            />
          </div>
          <div class="col-xs-12 col-md-6 text">
            <h1>Hello World</h1>
            <img
              class="rounded-circle d-xs-flex d-md-none"
              id="thumbnail"
              src="../assets/img/profile.jpg"
              alt=""
            />
            <div class="divider"></div>
            <div class="text-left">
              <p>
                I am always open to meeting someone new! Feel free to connect
                and message me! :)
              </p>
            </div>
            <div class="container text-center">
              <a href="https://www.linkedin.com/in/edwin-do/"
                ><img class="connect" src="../assets/img/linkedin2.png" alt=""
              /></a>
              <a href="https://github.com/edwin-do"
                ><img class="connect" src="../assets/img/github2.png" alt=""
              /></a>
              <a href="mailto:doe@mcmaster.ca"
                ><img class="connect" src="../assets/img/email2.png" alt=""
              /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Connect",
  components: {},
};
</script>

<style></style>
