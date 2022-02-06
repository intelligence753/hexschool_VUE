import { createApp } from "https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.26/vue.esm-browser.min.js";
import pagination from "./pagination.js"

let productModal = ''
let delProductModal = ''

const app = createApp({
    components: {
        pagination
    },
    data() {
        return {
            url: 'https://vue3-course-api.hexschool.io/v2',
            path: 'sally_hexschool',
            products: {},
            temp: {
                imagesUrl: []
            },
            isNew: false,
            pagination: {}
        }
    },
    methods: {
        //1. 檢查是否登入
        checklogin() {
            var token = document.cookie.replace(/(?:(?:^|.*;\s*)hextoken\s*\=\s*([^;]*).*$)|^.*$/, "$1");
            axios.defaults.headers.common['Authorization'] = token;
            axios.post(`${this.url}/api/user/check`)
                .then(res => {
                    this.getData()
                })
                .catch(err => {
                    alert('尚未登入')
                    window.location.href = 'login.html'
                })
        },
        //2. 產生產品列表(page為query，用?去帶出)
        getData(page = 1) {
            axios.get(`${this.url}/api/${this.path}/admin/products/?page=${page}`)
                .then((res) => {
                    this.products = res.data.products
                    this.pagination = res.data.pagination

                })
                .catch(err => {
                    console.dir(err)
                })
        },
        //3. 建立新的產品/編輯產品
        productModal(status, product) {
            if (status === 'isNew') {
                productModal.show()
                this.temp = {
                    imagesUrl: []
                }
                this.isNew = true

            } else if (status === 'edit') {
                productModal.show()
                this.temp = { ...product }
                this.isNew = false
            } else if (status === 'delete') {
                delProductModal.show()
                this.temp = { ...product }
            }
        },


    },
    mounted() {
        this.checklogin()
        productModal = new bootstrap.Modal(document.getElementById('productModal'))
        delProductModal = new bootstrap.Modal(document.getElementById('delProductModal'))
    }
})
//全域註冊
app.component('productModal', {
    props: ['temp', 'new'],
    template: '#productModalTemplate',
    methods: {
        updateProduct() {
            let site = `https://vue3-course-api.hexschool.io/v2/api/sally_hexschool/admin/product`
            let method = 'post'
            if (!this.new) {
                site = `https://vue3-course-api.hexschool.io/v2/api/sally_hexschool/admin/product/${this.temp.id}`
                method = 'put'
            }
            axios[method](site, { data: this.temp })
                .then((res) => {
                    // this.getData()
                    this.$emit('get-data')
                    productModal.hide()
                })
        },
    }
})
app.component('delProductModal', {
    props: ['temp'],
    template: '#delProductModalTemplate',
    methods: {
        //4. 刪除產品
        delProduct() {
            axios.delete(`https://vue3-course-api.hexschool.io/v2/api/sally_hexschool/admin/product/${this.temp.id}`)
                .then((res) => {
                    delProductModal.hide()
                    // this.getData()
                    this.$emit('get-data')
                })
                .catch((error) => {
                    console.dir(error)
                })
        }
    }
})
app.mount('#app')

