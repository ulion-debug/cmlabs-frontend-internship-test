export const state = () => ({
    category: [],
    filter: [],
    filter_category: [],
});

export const mutations = {
    SET_CATEGORY_DATA(state, payload) {
        state.category = payload;
    },
    SET_FILTER_DATA(state, payload) {
        state.filter = payload;
    },
    SET_FILTER_CATEGORY_DATA(state, payload) {
        state.filter_category = payload;
    },
};

export const actions = {
    getFilterData({ commit }, payload) {
        return new Promise((resolve, reject) => {
            this.$axios.get(`/filter.php?c=${payload}`).then((response) => {
                console.log(response.data);
                commit("SET_FILTER_DATA", response.data);
                resolve();
            });
        });
    },
    getFilterCategoryData({ commit }, payload) {
        return new Promise((resolve, reject) => {
            this.$axios.get(`/lookup.php?i=${payload}`).then((response) => {
                console.log(response.data);
                commit("SET_FILTER_CATEGORY_DATA", response.data);
                resolve();
            });
        });
    },
    getCategoryData({ commit }) {
        return new Promise((resolve, reject) => {
            this.$axios.get(`/categories.php`).then((response) => {
                // console.log(response.data.categories);
                commit("SET_CATEGORY_DATA", response.data.categories);
                resolve();
            });
        });
    },
};