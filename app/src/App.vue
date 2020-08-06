<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-brand tag="h1" class="mb-0">Hastalık Tanı Sistemi</b-navbar-brand>
      <b-navbar-nav>
        <b-nav-item href="#">
          <router-link to="/">HTS Ekranı</router-link>
        </b-nav-item>
        <b-nav-item href="#">
          <router-link to="/source">Kaynak Veri Seti</router-link>
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <b-container fluid="xl">
      <router-view></router-view>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'App',

  methods: {
  }
}
