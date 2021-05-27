export const strict = false
export const state = () => ({
    ready: false,
    waiting: true
})
export const getters = {
    ready(state) {
        return state.ready
    },
    waiting(state) {
        return state.waiting
    },
}
export const mutations = {
    ready(state, val) {
        state.ready = val
    },
    setWaiting(state, val) {
        state.waiting = val
    }
}