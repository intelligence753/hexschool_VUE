import productModal from './cart.js'

const { Form, Field, ErrorMessage, defineRule, configure } = VeeValidate;
const { required, email, min, max } = VeeValidateRules;
const { loadLocaleFromURL, localize } = VeeValidateI18n
defineRule('required', required);
defineRule('email', email);
defineRule('min', min);
defineRule('max', max);


loadLocaleFromURL('https://unpkg.com/@vee-validate/i18n@4.1.0/dist/locale/zh_TW.json');

configure({
    generateMessage: localize('zh_TW'),
    validateOnInput: true, // 調整為輸入字元立即進行驗證
});

const url = 'https://vue3-course-api.hexschool.io/v2';
const path = 'sally_hexschool';

Vue.createApp({
    data() {
        return {
            products: [],
            productId: '',
            //畫面渲染前先抓data資料，所以要從中抓length要先給carts: []
            CartProducts: {
                carts: []
            }
            ,
            isLoadingItem: '',
            form: {
                user: {
                    email: '',
                    name: '',
                    tel: '',
                    address: ''
                },
                message: ''
            }
        }
    },
    components: {
        VForm: Form,
        VField: Field,
        ErrorMessage: ErrorMessage,
    },
    methods: {
        getProducts() {
            axios.get(`${url}/api/${path}/products`)
                .then(res => {
                    this.products = res.data.products
                })
        },
        openProductModal(id) {
            this.$refs.productModal.openModal()
            this.productId = id

        },
        getCartProducts() {
            axios.get(`${url}/api/${path}/cart`)
                .then(res => {
                    this.CartProducts = res.data.data
                })
        },
        addToCart(id, qty = 1) {
            const data = {
                product_id: id,
                qty
            }
            this.isLoadingItem = id
            axios.post(`${url}/api/${path}/cart`, { data })
                .then(res => {
                    this.getCartProducts()
                    this.isLoadingItem = ''
                })
        },
        removeCartProduct(id) {
            this.isLoadingItem = id
            axios.delete(`${url}/api/${path}/cart/${id}`)
                .then(res => {
                    this.getCartProducts()
                    this.isLoadingItem = ''
                })
        },
        removeCartAll() {
            axios.delete(`${url}/api/${path}/carts`)
                .then(res => {
                    this.getCartProducts()
                })
        },
        updateCartProduct(item) {
            const data = {
                product_id: item.id,
                qty: item.qty
            }
            this.isLoadingItem = item.id
            axios.put(`${url}/api/${path}/cart/${item.id}`, { data })
                .then(res => {
                    this.getCartProducts()
                    this.isLoadingItem = ''
                })
        },
        submitOrder() {
            const order = this.form
            console.log(order)
            axios.post(`${url}/api/${path}/order`, { data: order })
                .then(res => {
                    alert(res.data.message)
                    this.$refs.form.resetForm()
                    this.getCartProducts()
                })
        }
    },
    mounted() {
        this.getProducts()
        this.getCartProducts()
    }
})
    .component('product-modal', productModal)
    .mount('#app')