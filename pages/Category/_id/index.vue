<template>
  <div>
    <Navbar />
    <div v-for="(cat, i) in filter_category.meals" :key="i">
      <div class="ml-5">
        <b-card
          :title="cat.strMeal"
          :sub-title="cat.strCategory"
          :img-src="cat.strMealThumb"
          img-left
          img-width="30%"
          img-height="30%"
        >
          <b-card-text class="text-justify">
            <h5>Instruction</h5>
            {{ cat.strInstructions }}
          </b-card-text>

          <b-card-text>
            <h5>Ingredients</h5>
            <b-list-group>
              <b-list-group-item
                class="d-flex justify-content-between align-items-center"
              >
                {{ cat.strIngredient1 }}
                <b-badge variant="primary" pill>{{
                  cat.strMeasure1
                }}</b-badge>
              </b-list-group-item>
              <b-list-group-item
                class="d-flex justify-content-between align-items-center"
              >
                {{ cat.strIngredient2 }}
                <b-badge variant="primary" pill>{{
                  cat.strMeasure2
                }}</b-badge>
              </b-list-group-item>
              <b-list-group-item
                class="d-flex justify-content-between align-items-center"
              >
                {{ cat.strIngredient3 }}
                <b-badge variant="primary" pill>{{
                  cat.strMeasure3
                }}</b-badge>
              </b-list-group-item>
              <b-list-group-item
                class="d-flex justify-content-between align-items-center"
              >
                {{ cat.strIngredient4 }}
                <b-badge variant="primary" pill>{{
                  cat.strMeasure4
                }}</b-badge>
              </b-list-group-item>
              <b-list-group-item
                class="d-flex justify-content-between align-items-center"
              >
                {{ cat.strIngredient5 }}
                <b-badge variant="primary" pill>{{
                  cat.strMeasure5
                }}</b-badge>
              </b-list-group-item>
              <b-list-group-item
                class="d-flex justify-content-between align-items-center"
              >
                {{ cat.strIngredient6 }}
                <b-badge variant="primary" pill>{{
                  cat.strMeasure6
                }}</b-badge>
              </b-list-group-item>
            </b-list-group></b-card-text
          >
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  async asyncData({ store, params }) {
    await Promise.all([
      store.dispatch("category/getFilterCategoryData", params.id),
    ]);
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
      filter_category: (state) => state.filter_category,
    }),
  },
  methods: {
    ...mapActions("category", ["getFilterCategoryData"]),
  },
};
</script>