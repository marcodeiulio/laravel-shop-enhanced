<template>
  <div class="container">
    <select @change="filterList" v-model="selectedBrand" id="brands">
      <option value="">Tutti</option>
      <option :value="brand.id" v-for="brand in brands" :key="brand.id">
        {{ brand.name }}
      </option>
    </select>
    <ul>
      <li v-for="product in filteredByBrands" :key="product.id">
        {{ product.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Products",
  data() {
    return {
      products: [],
      brands: [],
      brand_ids: [],
      selectedBrand: "",
      filteredByBrands: [],
    };
  },
  mounted() {
    this.getProducts();
    this.getBrandsList();
  },
  methods: {
    filterList() {
      const new_array = this.products.filter((product) => {
        if (this.brand_ids.includes(this.selectedBrand)) {
          return true;
        } else return false;
      });
      this.filteredByBrands = new_array;
    },
    getProducts() {
      axios.get("http://localhost:8000/api/products").then((res) => {
        if (this.selectedBrand) {
        }
        this.products = res.data;
        console.log(this.products);
      });
    },
    getBrandsList() {
      axios.get("http://localhost:8000/api/brands").then((res) => {
        this.brands = res.data;
        this.brands.forEach((brand) => {
          this.brand_ids.push(brand["id"]);
        });
        console.log(this.brands);
      });
    },
    searchBrands() {
      axios.get("http://localhost:8000/api/brands").then((res) => {});
    },
  },
};
</script>

<style>
</style>