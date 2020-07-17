<template>
    <div class="model" id="modelBox">
<!--        <div class="isLoaded flex-column-center" :class="{hide: isLoaded}">-->
        <div class="isLoaded flex-column-center" :class="{hide: isLoaded}">
            <div class="loading-txt flex-center">
                <img src="/assets/1.gif"/>
<!--                <div>模型加载中</div>-->
            </div>
        </div>
        <div id="model"></div>
        <ul class="icon flex" v-if="isLoaded">
            <li v-for="(item,index) in total" :key="index" @click="toggleIcon(item)">
                <el-tooltip :content="item.text" placement="top">
              <span class="svg" :class="{active: item.isHover && item.icon != 'full'}">
                <svg-icon
                        v-if="item.icon == 'icon'"
                        :icon-class="item.isHover? 'i_full' : 'i_exit'"
                />
                <svg-icon v-else :icon-class="'i_'+item.icon" />
              </span>
                </el-tooltip>
            </li>
        </ul>
        <div
                class="hot flex-center"
                v-if="showhot"
                :class="{hotbot: animation && animation.length}">
            <div class="flex cont">
                <div class="btns flex">
                    <div class="flex" @click="playhot" :class="{active: isplayhot}">
                        <img :src="isplayhot ? '/assets/model/pause_.png' : '/assets/model/play_.png'" alt />
                        <div>热点动画</div>
                    </div>
                    <img src="/assets/model/round.png" class="round" @click="toggle = !toggle" />
                </div>
                <ul class="flex-start" :class="{active: toggle}">
                    <li
                            v-for="(item,index) in modelObj.state.restoredCameras"
                            :key="index"
                            :class="{active: hotindex == index}"
                            @click="changehot(index)">
                        <div class="img">
                            <img :src="modelObj.hotscreen[index]" alt />
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <Msg v-if="showmsg" :left="lefts" :top="tops" :bottom="bottom" :dir="dir" :item="item" :modelObj="modelObj" @open="dialog" />
        <div class="maskdialog" v-if="isopen">
            <div class="close" @click="isopen = false">
                <i class="el-icon-close"></i>
            </div>
            <div class="img flex-center" v-if="hottype == 'img'">
                <img
                        v-for="(one,index) in modelObj.hotImgs[item.index]"
                        :key="index"
                        :src="one"
                        v-show="imgIndex == index"
                />
            </div>
            <div class="img flex-center" v-else>
                <video :src="videoUrl" controls autoplay></video>
            </div>
            <div v-if="hottype == 'img' && item.descrptImgs.length > 1">
                <i class="left el-icon-arrow-left" @click="moveImg(1)"></i>
                <i class="right el-icon-arrow-right" @click="moveImg(2)"></i>
            </div>
            <div class="bot">
                <div class="flex">
                    <div class="name">{{item.name}}</div>
                    <div class="flex">
                        <div
                                class="tip"
                                v-if="hottype == 'img'"
                        >{{imgIndex + 1 + '/' + item.descrptImgs.length}}</div>
                        <div
                                class="btn"
                                v-if="item.descrptImgs.length"
                                :class="{active: hottype == 'img'}"
                                @click="hottype = 'img'"
                        >图片</div>
                        <div
                                class="btn"
                                v-if="item.descrptVideos"
                                :class="{active: hottype == 'video'}"
                                @click="hottype = 'video'"
                        >视频</div>
                    </div>
                </div>
                <div class="desc" v-html="item.descrptWords"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import Msg from "./msg";
    // import { isMobile } from '@/utils/mobile'
    export default {
        name: "model",
        data() {
            return {
                modelObj: '',
                showmsg: false,
                isplayhot: false,
                toggle: false,
                isLoaded: false,
                showhot: false,
                material: [],
                components: [],
                animation: [],
                total: [
                    { text: "还原", icon: "reset", isHover: false }
                ],
                hotindex: 0,
                lefts: '',
                tops: '',
                bottom: '',
                dir: '',
                item: '',
                isopen: false,
                hottype: '',
                imgIndex: 0,

            }
        },
        components:{
            Msg
        },
        computed: {
            videoUrl() {
                return  URL.createObjectURL(this.modelObj.hotVideo[this.item.index])
            },
            audioUrl() {
                return  URL.createObjectURL(this.modelObj.descrptMusic[this.item.index])
            },
        },
        props: ['modelUrl'],
        methods: {
            moveImg(num) {
                if (num === 1) {
                    if (this.imgIndex <= 0) {
                        this.imgIndex = this.item.descrptImgs.length - 1;
                    } else {
                        this.imgIndex--;
                    }
                } else {
                    if (this.imgIndex >= this.item.descrptImgs.length - 1) {
                        this.imgIndex = 0;
                    } else {
                        this.imgIndex++;
                    }
                }
            },
            dialog(type) {
                this.isopen = true;
                this.hottype = type;
                this.isplayhot = false;
                this.modelObj.hotspotPass.stopHotspotFly();
            },
            loadScript(src, callback) {
                let HEAD = document.getElementsByTagName("body").item(0);
                let script = document.createElement("script");
                script.setAttribute("type", "text/javascript");
                script.onload = script.onreadystatechange = function() {
                    if (
                        !/*@cc_on!@*/ 0 ||
                        this.readyState === "loaded" ||
                        this.readyState === "complete"
                    ) {
                        this.onload = this.onreadystatechange = null;
                        if (callback) {
                            callback();
                        }
                    }
                };
                script.setAttribute("src", src);
                if (HEAD) {
                    HEAD.appendChild(script);
                }
            },
            newModel() {
                let me = this;

                me.loadScript("/static/js/model.js", () => {
                    if (me.modelUrl) {
                        let {progress} = me.$refs;
                        me.modelObj = new JMYDModel({
                            file: me.modelUrl,
                            el: '#model',
                            progress:  (e) => {
                                console.log(e);
                                if (progress) {
                                    progress.style.width = (e.loaded / e.total) * 100 + "%";
                                }
                            },
                            loaded: () => {
                                me.modelObj.beforeFly()
                                me.isLoaded = true;
                                let config =  me.modelObj.state;

                                //icon
                                let isHover = false;
                                if (config.display && config.display.autoRotate) {
                                    isHover = true
                                }
                                me.total.push({ text: "旋转", icon: "rotate", isHover });
                                me.total.push({ text: "尺寸", icon: "size", isHover: false });

                                // 热点列表
                                let hot= config.restoredCameras;
                                if (config && hot && hot.length) {
                                    let num = 0;
                                    config.restoredCameras.map((item, index) => {
                                        if (item.inAnimation) {
                                            num++;
                                        }
                                    })
                                    if (num > 1) {
                                        me.total.push({text: "热点", icon: "hot", isHover: true});
                                        me.showhot = true;
                                    }

                                }
                                me.total.push({ text: "全屏", icon: "full", isHover: false });

                            },
                            onHotspotSelected: e => {
                                me.showmsg = true;
                                let { object, evtType } = e;
                                me.item = object;
                                let x = 30;
                                let y = 30;
                                let position = object.screenPosition;

                                let model = document.getElementById("model");
                                let max = 0;
                                let maxy = 0
                                if (model) {
                                    max = model.clientWidth - 330;
                                    maxy = model.clientHeight;
                                }
                                if (evtType === '_USR') {
                                    if (model) {
                                        x = position._x * model.clientWidth
                                        if (x > max || (position._x < 0.5 && x > 400)) {
                                            x = x - 320
                                        }
                                    }

                                    y = position._y * maxy
                                    this.lefts = x;
                                    this.tops = y;
                                    this.bottom = ''

                                    if (position._y > 0.5) {
                                        this.tops = 'auto'
                                        this.bottom = maxy - y
                                    }
                                } else {
                                    x = position._x > 0.5 ? max - 10 : 20;
                                    y = (maxy - 390) / 2
                                    y = Math.max(20, y)
                                    this.lefts = x;
                                    this.tops = y;
                                    this.bottom = ''
                                }



                            },
                            onHotspotLeaved: () => {
                                me.showmsg = false;
                            }
                        })
                        me.modelObj.addHandler('finishHotspotFly', function() {
                            me.modelObj.playhot(true)
                        })
                    }

                })

            },
            materialChoose(item) {
                let me = this;
                me.components = item;
                me.modelObj.setComponent(item, 0)
                me.modelObj.addHighlight(item)

                setTimeout(() => {
                    me.modelObj.removeHighlight()
                }, 1000)
            },
            replaceMaterial(index) {
                let me = this;
                me.modelObj.setComponent(me.components, index)
            },
            playhot() {
                let me = this;
                me.isplayhot = !me.isplayhot;
                if (me.isplayhot) {
                    let index = me.hotindex === -1 ? 0 : me.hotindex;
                    me.modelObj.hotspotPass.startHotspotFly(index)

                } else {
                    me.modelObj.hotspotPass.stopHotspotFly()
                }
            },
            changehot(index) {
                let me = this;
                me.hotindex = index;
                me.modelObj.selecthot(index)
            },
            toggleIcon(item) {
                let me = this;
                switch (item.icon) {
                    case 'reset':
                        me.modelObj.reset();
                        break
                    case 'rotate':
                        item.isHover = !item.isHover;
                        me.modelObj.control.autoRotate = item.isHover;
                        break;
                    case 'size':
                        item.isHover = !item.isHover;
                        me.modelObj.showSize(item.isHover);
                        break;
                    case 'hot':
                        item.isHover = !item.isHover;
                        me.modelObj.togglehot(item.isHover);
                        me.showhot = !me.showhot;
                        break;
                    case 'full':
                        let model = document.getElementById("modelBox");
                        if (model) {
                            item.isHover = !item.isHover;
                            if (item.isHover) {
                                if (model.requestFullscreen) {
                                    model.requestFullscreen();
                                } else if (model.mozRequestFullScreen) {
                                    model.mozRequestFullScreen();
                                } else if (model.webkitRequestFullScreen) {
                                    model.webkitRequestFullScreen();
                                } else if (model.msRequestFullscreen) {
                                    model.msRequestFullscreen();
                                }
                            } else {
                                let de = document;
                                if (de.exitFullscreen) {
                                    de.exitFullscreen();
                                } else if (de.mozCancelFullScreen) {
                                    de.mozCancelFullScreen();
                                } else if (de.webkitCancelFullScreen) {
                                    de.webkitCancelFullScreen();
                                } else if (de.msExitFullscreen) {
                                    de.msExitFullscreen();
                                }
                            }

                        }
                        break;
                }
            }
        },
        mounted() {
            let me = this;
            me.newModel()
        }
    }
</script>

<style scoped lang="scss">
   .model{
       position: relative;
       height: 100%;
       #model {
           width: 100%;
           height: 100%;
           position: absolute;
           left: 0;
           top: 0;
           z-index: 1;
       }
       .icon {
           position: absolute;
           right: 20px;
           bottom: 7px;
           z-index: 20;
           li {
               margin-left: 15px;
               cursor: pointer;
               img {
                   display: block;
               }
               .svg {
                   color: #fff;
                   font-size: 30px;
                   &.active {
                       color: #ff7420;
                   }
                   svg {
                       filter: drop-shadow(2px 2px 3px #4e4e4e);
                   }
               }
           }
       }
       .hot {
           position: absolute;
           bottom: 30px;
           left: 0;
           right: 0;
           margin: auto;
           height: 36px;
           width: 20%;
           user-select: none;
           z-index: 9;
           &.hotbot {
               bottom: 80px;
           }
           .cont {
               height: 100%;
               background: rgba(225, 225, 225, 0.5);
               border-radius: 18px;
               .btns {
                   width: 190px;
                   height: 100%;
                   border-radius: 18px;
                   background: #b6b6ba;
                   padding-right: 20px;
                   box-sizing: border-box;
                   .flex {
                       height: 100%;
                       cursor: pointer;
                       padding: 0 20px;
                       border-radius: 18px;
                       img {
                           margin-right: 6px;
                       }
                       &.active {
                           background: #09c9ff;
                           color: #fff;
                       }
                   }
                   .round {
                       cursor: pointer;
                   }
               }
               ul {
                   transition: 0.2s all;
                   transform: scale(0);
                   width: 0;
                   &.active {
                       width: auto;
                       transform: scale(1, 1);
                       padding: 0 10px;
                   }
                   li {
                       width: 40px;
                       height: 40px;
                       margin: 0 5px;
                       position: relative;
                       transition: 0.2s all;
                       cursor: pointer;
                       &.active {
                           width: 70px;
                           height: 70px;
                       }
                       .img {
                           width: 100%;
                           height: 100%;
                           overflow: hidden;
                           border-radius: 50%;
                           position: relative;
                           border: 2px solid #fff;
                           box-sizing: border-box;
                           img {
                               transform: translate(-50%, -50%);
                               position: absolute;
                               left: 50%;
                               top: 50%;
                               height: 100%;
                           }
                       }
                   }
               }
           }
       }
       .maskdialog {
           position: absolute;
           top: 0;
           left: 0;
           z-index: 8000;
           width: 100%;
           height: 100%;
           background: rgba(0, 0, 0, 0.9);
           .close {
               font-size: 24px;
               color: #666;
               position: absolute;
               right: 30px;
               top: 30px;
               padding: 10px;
               cursor: pointer;
               &:hover {
                   color: #fff;
               }
           }
           .left,
           .right {
               font-size: 30px;
               position: absolute;
               cursor: pointer;
               top: 45%;
               margin: auto;
               color: #fff;
           }
           .left {
               left: 20px;
           }
           .right {
               right: 20px;
           }
           .img {
               width: 80%;
               height: calc(100% - 200px);
               margin: 30px auto;
               position: relative;
               img,
               video {
                   max-width: 100%;
                   max-height: 100%;
               }
           }
           .bot {
               min-width: 700px;
               width: 70%;
               min-height: 130px;
               position: absolute;
               bottom: 10px;
               left: 0;
               right: 0;
               margin: auto;
               color: #fff;
               .name {
                   font-size: 20px;
               }
               .tip {
                   color: #fff;
               }
               .btn {
                   width: 65px;
                   text-align: center;
                   line-height: 30px;
                   border-radius: 15px;
                   cursor: pointer;
                   background: rgba(225, 225, 225, 0.8);
                   margin-left: 6px;
                   &.active {
                       background: var(--active);
                       color: #fff;
                   }
               }
               .desc {
                   margin-top: 14px;
                   color: #c0bebe;
                   max-height: 90px;
                   overflow-y: auto;
                   &:v-deep ol li {
                       list-style: decimal inside;
                   }

                   &:v-deep ul li {
                       list-style: disc inside;
                   }
               }
           }
       }

       .isLoaded{
           /*height: 80px;*/
           position: absolute;
           top: 50%;
           left: 50%;
           transform: translate(-50%,-50%);
           .loading-txt {
               color: #aaa;
               font-size: 12px;
               font-weight: bold;
               margin-bottom: 10px;
               .logo {
                  width: 90%;
                  height: auto;
               }
           }
       }
     .hide {
       animation: hide 1s;
       animation-fill-mode: forwards;
     }
     @keyframes hide {
       0% {
         opacity: 1;
       }
       100% {
         opacity: 0;
       }
     }
   }
</style>