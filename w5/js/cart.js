const url = 'https://vue3-course-api.hexschool.io/v2';
const path = 'sally_hexschool';


export default {
    template: '#userProductModal',
    props: ['id'],
    data() {
        return {
            modal: {},
            product: {},
            qty: ''
        }
    },
    watch: {
        //當id變動得時候就重新getProduct
        id() {
            this.getProduct()
        }
    },
    methods: {
        openModal() {
            this.modal.show()
        },
        closeModal() {
            this.modal.hide()
        },
        //把元件會執行的事情都放到component裡面
        getProduct() {
            axios.get(`${url}/api/${path}/product/${this.id}`).then(res => {
                console.log(res)
                this.product = res.data.product
            })
        },
        addToCart() {
            this.$emit('add-cart', this.product.id, this.qty)
            this.closeModal()
        }
    },
    mounted() {
        this.modal = new bootstrap.Modal(this.$refs.modal)

    }
}



