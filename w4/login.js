import { createApp } from "https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.26/vue.esm-browser.min.js";

const app = createApp({
    data() {
        return {
            url: 'https://vue3-course-api.hexschool.io/v2',
            path: 'sally_hexschool',
            user: {
                username: '',
                password: ''
            }
        }
    },
    methods: {
        login() {
            axios.post(`${this.url}/admin/signin`, this.user)
                .then(res => {
                    const { expired, token } = res.data
                    document.cookie = `hextoken=${token}; expires=${new Date(expired)}`;
                    window.location.href = 'products.html'
                })
                .catch(err => {
                    alert(`帳號或密碼錯誤`)
                })
        }
    }
})
app.mount('#app')