/**
 * We are using some notification library. You may see the
 * documentation in here;
 *
 * https://artemsky.github.io/vue-snotify/documentation/
 */
export default {

  success (message) {
    window.vue.$snotify.success(message)
  },

  error (message) {
    window.vue.$snotify.error(message)
  },

  info (message) {
    window.vue.$snotify.info(message)
  },

  warning (message) {
    window.vue.$snotify.warning(message)
  }

}
