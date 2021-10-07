import mockapi from "../api/mockapi"

export default {
    namespaced: true,
    state: {
        items: [],
    },
    getters: {
        /* por ahora no pondria ninguno pero dejo estos de ejemplo
        availableProducts(state) {
            return state.items.filter(product =>
                product.inventory > 0)
        },
        productIsInStock() {
            return (product) => {
                return product.inventory > 0
            }
        }
        */
    },
    mutations: {
        setExercises(state, exercises) {
            state.items = exercises
        },
    },
    actions: {
        fetchExercises({commit}) {
            return new Promise((resolve) => {
                mockapi.getExercises(exercises => {
                    commit('setExercises', exercises)
                    resolve()
                })
            })
        },
    }
}