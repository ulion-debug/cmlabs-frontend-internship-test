<template>
  <div>
    <Navbar />
    <div class="section-1 text-center mb-5">
      <p class="h1">Category List</p>
    </div>
    <div class="section-content">
      <b-container class="bv-example-row">
        <b-row class="mb-3">
          <b-col v-for="(cat, i) in category.slice(0, 3)" :key="i">
            <b-button
              :to="{
                name: 'Category-name',
                params: { name: cat.strCategory },
              }"
              style="max-width: 15rem"
              variant="light"
            >
              <img :src="cat.strCategoryThumb" style="width: 13rem" />
              <h2 class="text-center text-dark">
                {{ cat.strCategory }}
              </h2>
            </b-button>
          </b-col>
        </b-row>
        <b-row class="mb-3">
          <b-col v-for="(cat, i) in category.slice(4, 7)" :key="i">
            <b-button
              :to="{
                name: 'Category-name',
                params: { name: cat.strCategory },
              }"
              style="max-width: 15rem"
              variant="light"
            >
              <img :src="cat.strCategoryThumb" style="width: 13rem" />
              <h2 class="text-center text-dark">
                {{ cat.strCategory }}
              </h2>
            </b-button>
          </b-col>
        </b-row>
        <b-row class="mb-3">
          <b-col v-for="(cat, i) in category.slice(8, 11)" :key="i">
            <b-button
              :to="{
                name: 'Category-name',
                params: { name: cat.strCategory },
              }"
              style="max-width: 15rem"
              variant="light"
            >
              <img :src="cat.strCategoryThumb" style="width: 13rem" />
              <h2 class="text-center text-dark">
                {{ cat.strCategory }}
              </h2>
            </b-button>
          </b-col>
        </b-row>
        <b-row class="mb-3">
          <b-col v-for="(cat, i) in category.slice(12, 14)" :key="i">
            <b-button
              :to="{
                name: 'Category-name',
                params: { name: cat.strCategory },
              }"
              style="max-width: 15rem"
              variant="light"
            >
              <img :src="cat.strCategoryThumb" style="width: 13rem" />
              <h2 class="text-center text-dark">
                {{ cat.strCategory }}
              </h2>
            </b-button>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  async asyncData({ store }) {
    await Promise.all([store.dispatch("category/getCategoryData")]);
    return;
  },
  data() {
    return {
      fields: ["idCategory"],
      cat: [],
    };
  },
  computed: {
    ...mapState("category", {
      category: (state) => state.category,
    }),
  },
  methods: {
    ...mapActions("category", ["getCategoryData"]),
  },
};
</script>