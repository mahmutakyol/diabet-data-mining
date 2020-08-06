<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item href="#" @click="onClick('home')">HTS Ekranı</b-nav-item>
        <b-nav-item href="#" @click="onClick('student')">Öğrenci Profili</b-nav-item>
        <b-nav-item href="#" @click="onClick('source')">Kaynak Veri Seti</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>

export default {
  name: 'Navigation',

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

  methods: {
    onClick (route) {
      // console.log(this.$router.push({ name: route }))
      this.$router.push({ name: route })
      // window.router.push({ name: route })
    }
  }
}
</script>
