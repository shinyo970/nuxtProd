<template>
    <div>
        <navHead></navHead>
        新闻列表
        <div><strong>使用_id.vue 文件做动态路由,就必须使用a标签,href的形式</strong></div>
        <ul>
            <li>
                <!-- <nuxt-link :to="{name:'news/newsDetail',params:{newsId:123456,newsFrom:'index'}}">新闻一</nuxt-link> -->
                <a href="/news/123456">新闻一 ,</a>
            </li>
        </ul>
  </div>
</template>
<script>
import navHead from "@/components/common/navhead";
export default {
    name:'newsList',
    // async asyncData(context) {
    //     let [pageData]=await Promise.all([
    //         context.$axios.post('/api/newsList')
    //     ]);
    //     return{
    //         newsList:pageData.data.dataList
    //     }
    // },
    components:{
        navHead
    },
    data(){
        return{
            newsId:'ne2sws123456'
        }
    },
    mounted(){

    }
}
</script>
