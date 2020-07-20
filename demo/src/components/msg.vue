<!-- 热点提示框 -->
<template>
  <transition>
    <div class="msg" :class="{dir: dir}" :style="style" v-if="show">
      <div class="tabs" v-if="showTabs">
        <template v-if="item.descrptImgs && item.descrptImgs.length && current == 0">
          <el-carousel indicator-position="none" @change="change">
            <el-carousel-item v-for="one in modelObj.hotImgs[item.index]" :key="one">
              <img :src="one" @click="open('img')" :style="{height: '100%', margin: 'auto', display: 'block', maxWidth: '80%'}" />
            </el-carousel-item>
          </el-carousel>
          <div class="dic">
            <span>{{index}}</span>
            / {{modelObj.hotImgs[item.index].length}}
          </div>
        </template>
        <div class="video" v-if="item.descrptVideos && current == 1" @click="open('video')">
          <video :src="videoUrl"></video>
          <img src="/assets/model/playBtn.png" class="btn" />
        </div>
        <div class="tab flex-center" v-if="showTab">
          <div :class="{active: current == 0}" @click="current = 0"><span class="svg"><svg-icon icon-class="img" /></span>图片</div>
          <div :class="{active: current == 1}" @click="current = 1"><span class="svg"><svg-icon icon-class="video" /></span>视频</div>
        </div>
      </div>
      <div class="flex">
        <div class="h2" :class="{link}" @click="golink">{{item.name}}</div>
        <div class="music" v-if="item.descrptMusic">
          <img :src="pause ? '/assets/model/audio.png' : '/assets/model/audios.png'" @click="play" />
        </div>
      </div>
      <div class="content" v-html="desc">
      </div>
      <audio ref="audio" v-if="item.descrptMusic" :src="audioUrl" />
    </div>
  </transition>
</template>

<script>
import SvgIcon from 'vue-svgicon'
export default {
  data() {
    return{
      pause: false,
      base: process.env.VUE_APP_UPLOADBASE,
      index: 1,
    }
  },
  props: ['top','bottom','left','dir','item','modelObj'],
  methods: {
    open(type) {
      this.$emit('open', type)
    },
    golink() {
      if (this.link) {
        open(this.item.link);
      }
    },

    change(e) {
      this.index = e + 1
    },

    play() {
      let { audio } = this.$refs;
      if (audio) {
        if (audio.paused) {
          audio.play();
          this.pause = true;
        } else {
          audio.pause();
          this.pause = false;
        }
      }
    }
  },
  computed: {
    videoUrl() {
      return  URL.createObjectURL(this.modelObj.hotVideo[this.item.index])
    },
    audioUrl() {
      return  URL.createObjectURL(this.modelObj.descrptMusic[this.item.index])
    },
    current() {
      let val = this.item.descrptImgs;
      if (val && val.length === 0) {
        return 1
      } else {
       return  0
      }
    },
    style() {
      let style = {
        left: this.left + 'px',
        top: '',
        bottom: ''
      }
      if (typeof this.bottom === 'number') {
        style.bottom = this.bottom + 'px'
      } else {
        style.top = this.top + 'px'
      }
      return style
    },
    show() {
      let len =
              (this.item.descrptWords && this.item.descrptWords.length) ||
              (this.item.descrptVideos && this.item.descrptVideos.length) ||
              (this.item.descrptImgs && this.item.descrptImgs.length) ||
              (this.item.descrptMusic && this.item.descrptMusic.length);
      return len > 0;
    },
    desc() {
      return this.item.descrptWords;
      // return marked(this.item.descrptWords, {sanitize: true})
    },
    link() {
      return this.item.showLink && this.item.link && this.item.link.length > 0;
    },
    showTab() {
      let len = this.item.descrptImgs.length && this.item.descrptVideos.length;
      return len > 0;
    },
    showTabs() {
      if (this.item.descrptImgs && this.item.descrptImgs.length > 0) {
        return true
      } else if (this.item.descrptVideos && this.item.descrptVideos.length > 0) {
        return true
      }
    }
  }
}
</script>
<style lang='scss' scoped>
.msg {
  width: 320px;
  // max-height: 290px;
  position: absolute;
  padding: 20px;
  font-weight: bold;
  box-sizing: border-box;
  z-index: 1000;
  background-color: rgba(14, 14, 14, 0.8);
  transform: perspective(700px) rotateY(-20deg);
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  transform-style: preserve-3d;
  transition: transform 0.3s;
  border-radius: 10px;
  &::v-deep .el-carousel__container{
    height: 170px!important;
  }
  &.dir {
    transform: perspective(700px) rotateY(20deg);
  }
  &:hover {
    transform: rotateY(0deg);
  }
  .h2 {
    font-size: 22px;
    padding-bottom: 14px;
    color: #fff;
    &.link {
      color: var(--active);
      cursor: pointer;
    }
  }
  .music img {
    cursor: pointer;
  }
  .content {
    line-height: 22px;
    color: #fff;
    word-break: break-all;
    max-height: 120px;
    overflow-y: scroll;
    &:v-deep ol li {
      list-style: decimal inside;
    }

    &:v-deep ul li {
      list-style: disc inside;
    }
  }
  .tabs {
    margin-bottom: 10px;
    position: relative;
    height: 170px;
    .dic {
      position: absolute;
      bottom: 7px;
      right: 0;
      background: rgba(51, 51, 51, 0.4);
      font-size: 12px;
      color: #b5b5b5;
      z-index: 100;
      span {
        color: #fff;
      }
    }
  }
  .tab {
    position: absolute;
    bottom: 7px;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 4000;
    div {
      line-height: 20px;
      border-radius: 10px;
      color: #fff;
      background: rgba(0, 0, 0, 0.4);
      margin: 0 5px;
      font-size: 12px;
      padding: 0 10px;
      cursor: pointer;
      .svg {
        margin-right: 4px;
      }
      &.active {
        background: var(--active);
        color: #fff;
      }
    }
  }
  .imgs img {
    max-width: 100%;
    cursor: pointer;
  }
  .video {
    position: relative;
    cursor: pointer;
    height: 100%;
    video {
      display: block;
      max-height: 170px;
      max-width: 100%;
      margin: auto;
    }
    .btn {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      width: 80px;
      height: 80px;
      filter: drop-shadow(0 0 6px rgba(0, 0, 0, 0.5));
    }
  }
}
</style>
