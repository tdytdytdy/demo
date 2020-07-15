<template>
  <div class="minyueState">
    <div class="cover">
      <div>
        <img class="logoimg" src="@/assets/logo.png" alt />
      </div>
      <div class="content">
        <div class="examine-3D">
          <div class="examine-3D-watch">
            <img src="../src/assets/3d.png" alt />
            <p>查看3D</p>
          </div>
          <img src="../src/assets/wansui.png" class="img1" />
        </div>
        <div class="header">西汉闽越国带筒瓦云树纹瓦当</div>
        <div class="subcontent">
          <div class="subsubcontent">
            <div class="headercontent">西汉闽越国带筒瓦云树纹瓦当</div>
            <div class="leftcontent">
              <p>级别：三级</p>
              <p>年代：西汉</p>
              <p>瓦当直径：15.6</p>
              <p>简瓦厚：1.2</p>
            </div>
            <div class="rightcontent">
              <p>质地：陶</p>
              <p>尺寸（厘米）：通高45.5</p>
              <p>瓦当厚：1.3</p>
              <p>质量（克）：1840</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src="../src/assets/goback.png" alt="" @click="goback">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detail"
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
        // margin:1% 0;
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
        // text-align: center;
        // background: url("../src/assets/wansui.png");
        margin: 25px auto;
        .examine-3D-watch {
          position: absolute;
          left: 780px;
          top: 73px;
          width: 89.3px;
          height: 89.3px;
          border-radius: 45px;
          background-color: #1b1b1b;
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
            padding-top:10px;
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
    }
  }
}
</style>