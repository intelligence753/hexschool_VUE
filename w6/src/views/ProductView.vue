<template>
  <div class="container">
    <h2>產品列表</h2>
    <div class="card mb-3" style="max-width: 540px">
      <div class="row g-0">
        <div class="col-md-4">
          <img :src="product.imageUrl" class="img-fluid rounded-start" alt="..." />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{product.title}}</h5>
            <p class="card-text">
             {{product.price}}元/{{product.unit}}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {}
    }
  },
  methods: {
    getProduct() {
      const { id } = this.$route.params;
      this.$http
        .get(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${id}`
        )
        .then((res) => {
          this.product = res.data.product;
        })
    }
  },
  mounted() {
    this.getProduct();
  }
};
</script>
