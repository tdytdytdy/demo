<template>
  <div class="minyueState">
    <div class="cover">
      <div>
        <img class="logoimg" src="@/assets/logo.png" alt />
      </div>
      <div class="goodsList">
        <ul class="list">
          <!-- <li class="topList" v-for="(item,index) in topList" :key="index">
            <p>{{item.descript}}</p> 
          </li>-->
          <li
            class="toplist"
            v-for="(item, index) in topList"
            :key="index"
            @click="toDetail(item.id)"
            :style="{background:'url('+item.img+')'}"
          >
            <p>{{item.descript}}</p>
          </li>
          <li
            class="bottomList"
            v-for="(item,index) in bottomList"
            :key="index+4"
            @click="toDetail(item.id)"
            :style="{backgroundImage:'url('+item.img+')'}"
          >
            <p>{{item.descript}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import detail from "../static/major_info.json";
export default {
  name: "index",
  data() {
    return {
      detail
      // detail: [
      //   {
      //     id:1,
      //     icon: {
      //       backgroundImage: "url(" + require("../src/assets/wansui.png") + ")",
      //       backgroundRepeat: "no-repeat",
      //       backgroundSize: "cotain"
      //     },
      //     descript: "“万岁”瓦当",
      //     rank: "三级",
      //     texture: "陶",
      //     time: "西汉",
      //     size: "通高45.5",
      //     diameter: "15.6",
      //     vatanthickness: "1.3",
      //     janewattsthickness: "1.2",
      //     weight: "1840"
      //   },
      //   {
      //      id:2,
      //     icon: {
      //       backgroundImage:
      //         "url(" + require("../src/assets/shuiguan.png") + ")",
      //       backgroundRepeat: "no-repeat",
      //       backgroundSize: "cotain"
      //     },
      //     descript: "西汉闽越国橙黄陶水管",
      //     rank: "三级",
      //     texture: "陶",
      //     time: "西汉",
      //     size: "通高45.5",
      //     diameter: "15.6",
      //     vatanthickness: "1.3",
      //     janewattsthickness: "1.2",
      //     weight: "1840"
      //   },
      //   {
      //      id:3,
      //     icon: {
      //       backgroundImage:
      //         "url(" + require("../src/assets/daitong.png") + ")",
      //       backgroundRepeat: "no-repeat",
      //       backgroundSize: "cotain"
      //     },
      //     descript: "西汉闽越国带筒瓦云树纹瓦当",
      //     rank: "三级",
      //     texture: "陶",
      //     time: "西汉",
      //     size: "通高45.5",
      //     diameter: "15.6",
      //     vatanthickness: "1.3",
      //     janewattsthickness: "1.2",
      //     weight: "1840"
      //   },
      //   {
      //      id:4,
      //     icon: {
      //       backgroundImage: "url(" + require("../src/assets/wenyu.png") + ")",
      //       backgroundRepeat: "no-repeat",
      //       backgroundSize: "cotain"
      //     },
      //     descript: "西汉谷纹玉璜",
      //     rank: "三级",
      //     texture: "陶",
      //     time: "西汉",
      //     size: "通高45.5",
      //     diameter: "15.6",
      //     vatanthickness: "1.3",
      //     janewattsthickness: "1.2",
      //     weight: "1840"
      //   },
      //   {
      //      id:5,
      //     icon: {
      //       backgroundImage: "url(" + require("../src/assets/huitao.png") + ")",
      //       backgroundRepeat: "no-repeat",
      //       backgroundSize: "cotain"
      //     },
      //     descript: "西汉闽越国三足灰陶鼎",
      //     rank: "三级",
      //     texture: "陶",
      //     time: "西汉",
      //     size: "通高45.5",
      //     diameter: "15.6",
      //     vatanthickness: "1.3",
      //     janewattsthickness: "1.2",
      //     weight: "1840"
      //   },
      //   {
      //      id:6,
      //     icon: {
      //       backgroundImage: "url(" + require("../src/assets/yunwen.png") + ")",
      //       backgroundRepeat: "no-repeat",
      //       backgroundSize: "cotain"
      //     },
      //     descript: "西汉闽越国卷云纹双耳",
      //     rank: "三级",
      //     texture: "陶",
      //     time: "西汉",
      //     size: "通高45.5",
      //     diameter: "15.6",
      //     vatanthickness: "1.3",
      //     janewattsthickness: "1.2",
      //     weight: "1840"
      //   }
      // ]
    };
  },
  computed: {
    topList() {
      let topList = [];
      this.detail.filter((item, index) => {
        if (index < 4) {
          topList.push(item);
        }
      });
      return topList;
    },
    bottomList() {
      let bottomList = [];
      this.detail.filter((item, index) => {
        if (index > 3) {
          bottomList.push(item);
        }
      });
      return bottomList;
    }
  },
  methods: {
    toDetail(id) {
      // this.$router.push("/detail")
      this.$router.push({ name: "detail", params: { id: id } });
      // console.log(item.img)
    }
  }
};
</script>

<style  scoped lang="scss">
.minyueState {
  width: 100%;

  .cover {
    width: 100%;
    height: 1920px;
    background-image: url("../src/assets/background.png");
    // background-position:center center;
    overflow: hidden;
    background-repeat: no-repeat;
    background-position: center top;
    text-align: center;
    .logoimg {
      width: 331px;
      height: 53px;
      // margin-top: 134px;
      // margin-left: 37.5%;
      margin-top: 134px;
    }
    .goodsList {
      width: 1020px;
      height: 1270px;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 1px 16px 0px rgba(92, 92, 92, 1);
      margin: 0 auto;
      margin-top: 187px;
      .list {
        padding-top: 1%;
        // margin-left: 0.5%;
        // text-align: center;
        li {
          list-style: none;
          background-repeat: "no-repeat";
          background-size: "cotain";
        }
        .toplist {
          float: left;
          width: 49.01%;
          height: 375px;
          margin-left: -0.7%;
          position: relative;
          background-repeat: "no-repeat";
          background-size: "cotain";

          cursor: pointer;
          &:hover {
            transition: All 0.3s ease-in-out;
            transform: scale(1.009);
          }

          p {
            position: absolute;
            left: 0;
            bottom: -24px;
            width: 100%;
            height: 70px;
            background: rgba(0, 0, 0, 1);
            opacity: 0.5;
            color: #ffffff;
            font-size: 24px;
            line-height: 70px;
            font-style: MicrosoftYaHei;
          }

          //  &:hover{
          //            border: 2px solid #9E7C4C;
          //           }

          //           p {
          //             position: absolute;
          //             width: 200px;
          //             left: 50%;
          //             bottom: 42px;
          //             transform: translateX(-50%);
          //             font-size: 20px;
          //             color: rgba(255, 255, 255, 1);
          //           }
          //         }
        }
        .bottomList {
          float: left;
          width: 49.01%;
          height: 500px;
          margin-left: -0.7%;
          position: relative;
          cursor: pointer;
          background-repeat: no-repeat;
          background-size:100% 100%;
          &:hover {
            transition: All 0.3s ease-in-out;
            transform: scale(1.009);
          }

          p {
            position: absolute;
            left: 0;
            bottom: -25px;
            width: 100%;
            height: 70px;
            background: rgba(0, 0, 0, 1);
            opacity: 0.5;
            color: #ffffff;
            font-size: 24px;
            line-height: 70px;
            font-style: MicrosoftYaHei;
          }
        }
      }
    }
  }
}
</style>