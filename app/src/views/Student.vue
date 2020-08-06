<template>
  <div>
    <b-container>
      Student View
    </b-container>
  </div>
</template>

<script>

export default {
  name: 'Student',

  components: {
  },

  data () {
    return {
      user: {
        name: 'Mahmut',
        surname: 'Akyol'
      }
    }
  },

  mounted () {
    console.log('Student')
  },

  methods: {
  }
}
</script>
