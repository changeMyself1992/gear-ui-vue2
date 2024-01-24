export const Px2VwMixin = {
    data() {
        return {}
    },

    methods: {
        px2vw(px) {
            return `${Number(px / (375 / 100)).toFixed(3)}vw`
        }
    }
}