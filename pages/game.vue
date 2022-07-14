<template>
    <div>
        <div>
            <ul>
                <li v-for="(item,index) in gameList" :key="index" class="g-item">
                    游戏Id: {{item.gameId}}
                    <span class="g-name">游戏名称:{{item.gameName}}</span>
                </li>
            </ul>
        </div>

        <el-select v-model="gameId " placeholder="选择游戏" clearable>
            <el-option v-for="item in myGames" :key="item.gameId" :label="item.gameName" :value="item.gameId">
            </el-option>
        </el-select>

    </div>
</template>

<script>
export default {
    name: 'IndexPage',
    async asyncData({ $axios, params }) {
        try {
            let [games] = await Promise.all([
                $axios.$post('/dl/games'),
            ])
            return {
                games
            };
        } catch (err) {
            console.log(err)
        }
    },
    async fetch({store,params}){
        // console.log(store); 一个store 实例,里面包含$axios,$router,state 等信息
        params.info="zhanshan"
        await store.dispatch('game/GET_GAME_LIST', params)
    },
    data(){
        return{
            gameId:'',
        }
    },
    computed:{
        myGames(){
            return this.$store.state.game.gameList
        },
        gameList(){
            return this.games.dataList
        }
    },
    mounted(){
        console.log()

    }
}
</script>
<style scoped lang="less">
.g-item{
    font-weight: bold;
    .g-name{
        color: green;
    }
}
</style>

