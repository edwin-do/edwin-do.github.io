<template>
  <section class="container-fluid px-0 section black">
    <!-- row1 -->
    <div class="container section-head">
      <div id="top"></div>
      <h1 id="heading">About Me.</h1>
      <div class="row">
        <div class="col-12 sect-sm blue">
          <div class="d-none d-md-flex rounded">
            <!-- <img
              class="rounded-circle"
              id="profile"
              src="./img/profile2.jpg"
              alt=""
            /> -->
          </div>
          <div class="col-xs-12 col-md-6 text">
            <h1>Biography</h1>
            <!-- <img
              class="rounded-circle d-xs-flex d-md-none"
              id="thumbnail"
              src="./img/profile2.jpg"
              alt=""
            /> -->
            <div class="divider"></div>
            <p>
              Hello! Welcome to my website! I'm Edwin, it's nice to e-meet you!
            </p>
            <p>
              I have always been drawn to tech and curious about how things are
              built. I think that problems is what drives the development of
              innovative solutions. Problems will vary based on industry, the
              end-users and the current technological development.
            </p>
          </div>
        </div>
      </div>
      <!-- row 2 -->
      <div class="row">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-md-6 sect-sm red">
              <div class="container text">
                <h1>Education</h1>
                <div class="divider"></div>
                <p>
                  I started my post secondary education studying life sciences
                  at McMaster University located in Hamilton, ON. In effort to
                  become more involve with tech, I chose to switch from Life
                  Sciences to Engineering after my first year of university.
                </p>
                <p>
                  After switching programs, I noticed that my courses are more
                  aligned with my interests and that this is something I wish to
                  pursue as a career. Today, I am a fourth year Software
                  Engineering and Management Student aspiring to be a future
                  Software Engineer and Product Manager.
                </p>
              </div>
            </div>
            <div class="col-xs-12 col-md-6 sect-sm purple">
              <div class="container text">
                <h1>Interests</h1>
                <div class="divider"></div>
                <p>
                  As a tech enthusiast, I enjoy reading about new upcoming tech
                  and watching the latest tech reviews. I also enjoy reading the
                  TLDR newsletter which I highly recommend. You can subscribe to
                  it here: https://www.tldrnewsletter.com/. Aside from tech, I
                  love to play board games and go out to eat with my friends.
                </p>
                <p>
                  I believe very strongly about a good work-life balance. In my
                  free time, I try to find activities away from my workspace
                  such as cooking or going out for a nature walk. Occasionally I
                  would also watch some TV shows and some of my favourites
                  include Friends, The IT Crowd and The Boys.
                </p>
                <vs-button
                  shadow
                  gradient
                  :active="active == 1"
                  @click="active = 1"
                >
                  Default
                </vs-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
  components: {},
};
</script>

<style></style>
