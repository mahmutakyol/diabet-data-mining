<template>
  <div>
    <b-nav>
      <h1>Hastalık Tanı Sistemi</h1>
    </b-nav>
    <div>
    <div>
      <b-card title="Erkan Aşamada Diyabet Teşhisi"
        sub-title="Sorularımız kaynak data setinden yapılan çıkarımlar tarafından değerlendirilecektir.">
        <b-card-text>
          Some quick example text to build on the <em>card title</em> and make up the bulk of the card's
          content.
        </b-card-text>

        <b-card-text>A second paragraph of text in the card.</b-card-text>

        <a href="#" class="card-link">Card link</a>
        <b-link href="#" class="card-link">Another link</b-link>
      </b-card>
    </div>
  </div>
  </div>
</template>

<script>
import rest from '@/core/rest'
export default {
  name: 'Home',

  data () {
    return {
      form: {
        email: '',
        name: '',
        food: null,
        checked: []
      },
      foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
      show: true
    }
  },

  mounted () {
    this.fetchQuestions()
  },

  methods: {
    fetchQuestions () {

    },

    saveAnswer () {

    }
  }
}
</script>
