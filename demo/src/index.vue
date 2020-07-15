<template>
  <div class="minyueState">
    <div class="cover">
      <div>
        <img class="logoimg" src="@/assets/logo.png" alt />
      </div>
      <div class="goodsList">
        <ul class="List">
          <!-- <li class="topList" v-for="(item,index) in topList" :key="index">
            <p>{{item.descript}}</p> 
          </li>-->
          <li class="toplist" v-for="(item, index) in topList" :key="index" @click="toDetail">
            <!-- <img src="item.images" alt=""> -->
            <img :src="item.images" alt v-for="(item,index) in topList" />
            <p>{{item.descript}}</p>
            <p>{{item.rank}}</p>
            <p>{{item.time}}</p>
          </li>
          <li class="bottomList" v-for="(item,index) in bottomList" :key="index">
            <p>{{item.descript}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
// import detail from "../static/major_info.json";
export default {
  name: "index",
  data() {
    return {
      detail:
 [
      {
        "img":"../src/images/detailimg.png",
        "descript": "“万岁”瓦当",
        "rank": "三级",
        "texture": "陶",
        "time": "西汉",
        "size":"通高45.5",
        "diameter":"15.6",
        "vatanthickness":"1.3",
        "janewattsthickness":"1.2",
        "weight":"1840"
      },
      {
        "img":"../src/images/detailimg.png",
        "descript": "西汉闽越国橙黄陶水管",
        "rank": "三级",
        "texture": "陶",
        "time": "西汉",
        "size":"通高45.5",
        "diameter":"15.6",
        "vatanthickness":"1.3",
        "janewattsthickness":"1.2",
        "weight":"1840"
      },
      {
        "img":"../src/images/detailimg.png",
        "descript": "西汉闽越国带筒瓦云树纹瓦当",
        "rank": "三级",
        "texture": "陶",
        "time": "西汉",
        "size":"通高45.5",
        "diameter":"15.6",
        "vatanthickness":"1.3",
        "janewattsthickness":"1.2",
        "weight":"1840"
      },
      {
        "img":"../src/images/detailimg.png",
        "descript": "西汉谷纹玉璜",
        "rank": "三级",
        "texture": "陶",
        "time": "西汉",
        "size":"通高45.5",
        "diameter":"15.6",
        "vatanthickness":"1.3",
        "janewattsthickness":"1.2",
        "weight":"1840"
      },
      {
        "img":"../src/images/detailimg.png",
        "descript": "西汉闽越国三足灰陶鼎",
        "rank": "三级",
        "texture": "陶",
        "time": "西汉",
        "size":"通高45.5",
        "diameter":"15.6",
        "vatanthickness":"1.3",
        "janewattsthickness":"1.2",
        "weight":"1840"
      },
      {
        "img":"../src/images/detailimg.png",
        "descript": "西汉闽越国卷云纹双耳",
        "rank": "三级",
        "texture": "陶",
        "time": "西汉",
        "size":"通高45.5",
        "diameter":"15.6",
        "vatanthickness":"1.3",
        "janewattsthickness":"1.2",
        "weight":"1840"
      }    
]
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
  methods:{
toDetail(){
  this.$router.push('/detail')
}
  },
  mounted() {
    console.log(detail);
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
        // margin:1% 0;
      }
    }
  }
}
</style>