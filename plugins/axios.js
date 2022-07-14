/*
https://www.npmjs.com/package/cookie-universal-nuxt
*/
import ElementUI from 'element-ui';
function reLogin() {
    Vue.prototype.$message({
        type: "error",
        message: "您还没有登陆,请登陆"
    });
    setTimeout(() => {
        router.push('/login');
    }, 1000);
}

export default function ({ app, $axios, redirect, error: nuxtError }) {
    const auth = app.$cookies.get('Authorization');
    $axios.setHeader('Content-Type', 'application/x-www-form-urlencoded', [
        'post'
    ])
    $axios.onRequest(config => {
        if (auth) {
            $axios.setHeader('Authorization', auth)
        } else {
            $axios.setHeader('Authorization','');
        }
    })
    $axios.onResponse(response=>{
        //console.log('onResponse',onResponse.data) //这个就是直接返回结果,res.data
    });
    $axios.onError(error => {
        console.log('onError', error)
        const code = parseInt(error.response && error.response.status);
        nuxtError({
            statusCode: code,
            message: error.message,
        });
        return Promise.resolve(false);

    })
    $axios.onRequestError(error=>{
        console.log('onRequestError',error)
    });
    $axios.onResponseError(error=>{
        console.log('onResponseError', error)
    })
}
