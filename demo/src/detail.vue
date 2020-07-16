<template>
  <div class="minyueState">
    <div class="cover">
      <div>
        <img class="logoimg" src="@/assets/logo.png" alt />
      </div>
      <div class="content">
        <div class="examine-3D" >
          <div class="examine-3D-watch" @click="vidiomodel">
            <img src="../src/assets/3d.png" alt />
            <p>查看3D</p>
          </div>
          <!-- <img src="../src/assets/wansui.png" class="img1" :style="item.icon"/> -->
          <p class="img1" :style="item.icon"></p>
        </div>
        <div class="header">{{item.descript}}</div>
        <div class="subcontent">
          <div class="subsubcontent">
            <div class="headercontent">{{item.descript}}</div>
            <div class="leftcontent">
              <p>级别：{{item.rank}}</p>
              <p>年代：{{item.time}}</p>
              <p>瓦当直径：{{item.diameter}}</p>
              <p>简瓦厚：{{item.janewattsthickness}}</p>
            </div>
            <div class="rightcontent">
              <p>质地：{{item.texture}}</p>
              <p>尺寸（厘米）：{{item.size}}</p>
              <p>瓦当厚:{{item.vatanthickness}}</p>
              <p>质量（克）：{{item.weight}}</p>
            </div>
          </div>
        </div>
        <img src="../src/assets/goback.png" alt @click="gobackidnex" class="gobackimg" />
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
import model from "./components/model";
import {modelInfo} from "@/api/api";
export default {
  name: "detail",
  data() {
    return {
      id: this.$route.params.id,
      item: [],
      isImg: true,
      // modelInfo: {},
      detailinfo: [
        {
          id: 1,
          icon: {
            backgroundImage: "url(" + require("../src/assets/wansui.png") + ")",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cotain"
          },
          descript: "“万岁”瓦当",
          rank: "三级",
          texture: "陶",
          time: "西汉",
          size: "通高45.5",
          diameter: "15.6",
          vatanthickness: "1.3",
          janewattsthickness: "1.2",
          weight: "1840"
        },
        {
          id: 2,
          icon: {
            backgroundImage:
              "url(" + require("../src/assets/shuiguan.png") + ")",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cotain"
          },
          descript: "西汉闽越国橙黄陶水管",
          rank: "三级",
          texture: "陶",
          time: "西汉",
          size: "通高45.5",
          diameter: "15.6",
          vatanthickness: "1.3",
          janewattsthickness: "1.2",
          weight: "1840"
        },
        {
          id: 3,
          icon: {
            backgroundImage:
              "url(" + require("../src/assets/daitong.png") + ")",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cotain"
          },
          descript: "西汉闽越国带筒瓦云树纹瓦当",
          rank: "三级",
          texture: "陶",
          time: "西汉",
          size: "通高45.5",
          diameter: "15.6",
          vatanthickness: "1.3",
          janewattsthickness: "1.2",
          weight: "1840"
        },
        {
          id: 4,
          icon: {
            backgroundImage: "url(" + require("../src/assets/wenyu.png") + ")",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cotain"
          },
          descript: "西汉谷纹玉璜",
          rank: "三级",
          texture: "陶",
          time: "西汉",
          size: "通高45.5",
          diameter: "15.6",
          vatanthickness: "1.3",
          janewattsthickness: "1.2",
          weight: "1840"
        },
        {
          id: 5,
          icon: {
            backgroundImage: "url(" + require("../src/assets/huitao.png") + ")",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cotain"
          },
          descript: "西汉闽越国三足灰陶鼎",
          rank: "三级",
          texture: "陶",
          time: "西汉",
          size: "通高45.5",
          diameter: "15.6",
          vatanthickness: "1.3",
          janewattsthickness: "1.2",
          weight: "1840"
        },
        {
          id: 6,
          icon: {
            backgroundImage: "url(" + require("../src/assets/yunwen.png") + ")",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cotain"
          },
          descript: "西汉闽越国卷云纹双耳",
          rank: "三级",
          texture: "陶",
          time: "西汉",
          size: "通高45.5",
          diameter: "15.6",
          vatanthickness: "1.3",
          janewattsthickness: "1.2",
          weight: "1840"
        }
      ]
    };
  },
  methods: {
    gobackidnex() {
      this.$router.push("/");
    },
    vidiomodel(){
      alert(666)
    }
  },
  // created() {
  //   let me = this;
  //   me.id = me.$route.query.id;
  //   // me.getComment();
  //   modelInfo({
  //     id: me.id
  //   }).then(res => {
  //     me.modelInfo = res;
  //     if (!res.model) {
  //       me.isImg = true;
  //     }
  //   });
  // },

  mounted() {
    console.log(this.$route.params.id);
    for (var i = 0; i < this.detailinfo.length; i++) {
      if (this.detailinfo[i].id == this.id) {
        this.item = this.detailinfo[i];
      }
    }
    console.log(this.item);
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
      opacity: 0.6;
      margin: 0 auto;
      margin-top: 187px;
      .toplist {
        display: flex;
        width: 49%;
        height: 375px;
      }
    }
    .content {
      width: 994px;
      height: 1518px;
      background: url("../src/assets/detailborder.png");
      margin: 80px auto;
      .examine-3D {
        position: relative;
        width: 921px;
        height: 752px;
        overflow: hidden;
        margin: 25px auto;
        .examine-3D-watch {
          position: absolute;
          left: 780px;
          top: 73px;
          width: 89.3px;
          height: 89.3px;
          border-radius: 45px;
          background-color: #1b1b1b;
          cursor: pointer;
          
          // margin-left:780px;
          img {
            width: 28.3px;
            height: 28.3px;
            padding-top: 12px;
          }
          p {
            color: #ffffff;
            font-size: 18px;
            margin-top: 5px;
          }
        }
        .img1 {
          width: 921px;
          height: 752px;
          margin-top: 41px;
          background-size: 100% 100%;
        }
      }
      .header {
        //   padding-top: 100px;
        width: 915px;
        height: 114px;
        background: url("../src/assets/header.png");
        margin: 0 auto;
        line-height: 114px;
        font-size: 35px;
        color: #33241f;
        font-style: Adobe Heiti Std R;
        padding-bottom: 50px;
      }
      .subcontent {
        height: 858px;
        height: 349px;
        margin: 0 auto;
        .subsubcontent {
          .headercontent {
            font-size: 30px;
            color: #33241f;
            font-style: Adobe Heiti Std R;
            text-align: left;
            margin-left: 75px;
            padding-bottom: 5px;
            padding-top: 10px;
          }
          .leftcontent {
            font-size: 30px;
            color: #33241f;
            font-style: Adobe Heiti Std R;
            text-align: left;
            margin-left: 75px;
            float: left;
            p {
              padding-top: 8px;
            }
          }
          .rightcontent {
            font-size: 30px;
            color: #33241f;
            font-style: Adobe Heiti Std R;
            text-align: left;
            margin-left: 600px;
            p {
              padding-top: 8px;
            }
          }
        }
      }
      .gobackimg {
        width: 198px;
        height: 72px;
        margin-top: 182px;
        margin-right: 290px;
        cursor: pointer;
      }
    }
  }
}
</style>