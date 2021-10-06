import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'
Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: colors.blue.lighten3,
                secondary: colors.blue.lighten2,
                accent: "#518A83",
            },
        },
    },
});
