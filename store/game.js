//组件中的dispatch 调用的是actions,是异步函数
//commit 一定是调用的是 mutations 的函数, mutations一定是同步函数
export const state=()=>({
    gameList:[],
    ver:'1.0.0'
});

export const mutations={
    changeVer(state,data){
        state.ver='1.1.0'
    },
    setGameList(state,data){
        state.gameList=data;
    }
};

export const actions={
    async GET_GAME_LIST({commit}){
        const res=await this.$axios.post('/dl/games');
        commit('setGameList',res.data.dataList);
    }
}



