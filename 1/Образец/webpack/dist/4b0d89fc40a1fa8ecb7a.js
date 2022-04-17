Vue.component('products', {
  data() {
    return {
      catalogUrl: '/catalogData.json',
      filtered: [],
      products: [],
      imgProduct: 'https://placehold.it/200x150'
    };
  },

  mounted() {
    this.$parent.getJson(`/api/products`).then(data => {
      for (let item of data) {
        item.imgPath = `img/${item.id_product}.jpg`;
        this.$data.products.push(item);
        this.$data.filtered.push(item);
      }
    });
  },

  methods: {
    filter(userSearch) {
      let regexp = new RegExp(userSearch, 'i');
      this.filtered = this.products.filter(el => regexp.test(el.product_name));
    }

  },
  template: `<ul class="featured_listing">
                <product v-for="item of filtered" 
                :key="item.id_product" 
                :img="item.imgProduct"
                :product="item"
                @add-product="$parent.$refs.cart.addProduct"></product>
               </ul>`
});
Vue.component('product', {
  props: ['product', 'img'],
  template: `<li>
<article class="featured_item">
                                <a href="#" class="link">
                                    <img :src=img alt="Куртка" height="420" width="360"
                                         class="featured_item_img">
                                    <h3 class="featured_brand">{{product.product_name}}</h3>
                                    <p class="description_txt">{{product.description}}</p>
                                    <p class="featured_price">{{product.price}}</p>
                                   <button class="buy-btn featured_buy" @click="$emit('add-product', product), $root.$refs.cart.showCart = true"> 
                                   Купить
                                   </button>
                                </a>
                            </article>
</li>
           
    `
});