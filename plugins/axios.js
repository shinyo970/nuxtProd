/*
https://www.npmjs.com/package/cookie-universal-nuxt 
*/
export default function ({app ,$axios, redirect }) {
    const auth=app.$cookies.get('Authorization');
    console.log('auth====>',auth);
    if(auth){
        $axios.setHeader('Authorization', auth)
    }else{
        console.log('未设置token')
    }
    $axios.onRequest(config => {
        
    })
    $axios.setHeader('Content-Type', 'application/x-www-form-urlencoded', [
        'post'
    ])
    $axios.onError(error => {
        const code = parseInt(error.response && error.response.status)
        if (code === 400) {
            redirect('/400')
        }
    })
    

    // Removes default Content-Type header from `post` scope
    $axios.setHeader('Content-Type', false, ['post'])
}
