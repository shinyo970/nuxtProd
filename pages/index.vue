<template>
    <div>
        <navHead></navHead>
        <h1>我说我帅的一批,你们信不</h1>
        <h1>如果能重来,劳资要选李白</h1>
        <el-button type="primary" @click="test">发起一个请求</el-button>
    </div>
</template>

<script>
import navHead from "@/components/common/navhead";
export default {
    name: "index",
    components: {
        navHead,
    },
    methods:{
        test(){
            this.$axios.post('/api/newDetailB').then(res=>{
                console.log(res);
            })
        }
    }
};
</script>
