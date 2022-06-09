<template>
    <div>
        <div><h1>详情页面</h1>
            新闻id
            {{$route.params.id}};
            {{res1.msg}}
            {{res2.msg}}
        </div>
	</div>
</template>
<script>
export default {
    name:'newsDetail',
    async asyncData({$axios,params}) {
        try{
            let [res1,res2]=await Promise.all([
                $axios.$post('/api/newDetailA'),
                $axios.$post('/api/newDetailB')
            ])
            return {
                res1,res2
            };     
        } catch(err){
            console.log(err)
        }   

    },


    // async asyncData({ $axios }) {
    //     const data = await $axios.$post('/api/newDetailA')
    //     return { data }
    // },

    mounted(){

    },
}
</script>
