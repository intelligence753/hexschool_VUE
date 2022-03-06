<template>
  <div class="container">
    <h2>產品列表</h2>
    <div class="row row-cols-1 row-cols-lg-4 g-3">
      <div class="col " v-for="product in products" :key="product.id">
      <div class="card h-100">
        <img :src="product.imageUrl" class="card-img-top" alt="" style="width:100%;height:200px;object-fit:cover;"/>
        <div class="card-body">
          <h5 class="card-title">{{product.title}}</h5>
          <p class="card-text">
            {{product.category}}
          </p>
          <router-link :to="`/product/${product.id}`" class="btn btn-primary">more</router-link>
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
      products: []
    };
  },
  methods: {
    getProducts() {
      this.$http
        .get(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products`
        )
        .then((res) => {
          this.products = res.data.products
        });
    }
  },
  mounted() {
    this.getProducts();
  }
};
</script>
