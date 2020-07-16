import { get, postbystring, post } from "./http";

// 上传
export const upload = post('/fronted/upload');

// 获取灯光
export const getLdr = get('ldr/completeData');

// 获取首页banner
export const getHomeBanner = get('/fronted/banner/index')

// 获取banner
export const getBanner = get('/fronted/banner/info')

// 获取公告
export const getArticle = get('/fronted/article/list')

// 获取文物
export const getModel = get('/fronted/model/list')

// 获取展览
export const getExhibition = get('/fronted/event/list')

// 获取展厅
export const getHall = get('/fronted/scene/info')

// 获取学术
export const getLearn = get('/fronted/learn/list')

// 获取学术详情
export const learnInfo = get('/fronted/learn/info')

// 获取专家
export const getSpecial = get('/fronted/expert/list')

// 获取专家详情
export const specialInfo = get('/fronted/expert/info')

// 获取论著
export const specialTreatise = get('/fronted/treatise/list')

// 获取论著详情
export const treatiseInfo = get('/fronted/treatise/info')

// 获取模型详情
export const modelInfo = get('/fronted/model/info')

// 更新模型浏览数
export const modelBcount = get('/fronted/model/bcount')

// 更新模型点赞数
export const modelLcount = get('/fronted/model/lcount')

// 获取展览详情
export const exhibitionInfo = get('/fronted/event/info')

// 获取员工
export const getPerson = get('/fronted/person/list')

// 获取员工详情
export const personInfo = get('/fronted/person/info')

// 获取闽越简介
export const introduction = get('/fronted/article/introduction')

// 获取资讯
export const articleList = get('/fronted/article/list')

// 获取资讯详情
export const articleinfo = get('/fronted/article/info')

// 获取名人来访
export const getYearlog = get('/fronted/yearlog/list')

// 获取文创
export const getProduct = get('/fronted/product/list')

// 获取评论
export const getComment = get('/fronted/comment/list')

// 评论
export const creatComment = postbystring('/fronted/comment/create')

// 展览年份
export const exhibitionYear = get('/fronted/event/year')

// 来访年份
export const historyYear = get('/fronted/yearlog/year')

// 模型类型
export const modelType = get('/fronted/modelType/type')


// 展厅详情
export const hallInfo = get('/fronted/scene/info');


// 文物数量
export const modelCount = get('/fronted/modelCount/info');


// 反馈
export const createFeedback = postbystring('/fronted/feedback/create');


// 二维码
export const qrcode = postbystring('/fronted/qrcode');