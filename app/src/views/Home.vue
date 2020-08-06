<template>
  <div>
    <b-nav>
      <h1>Hastalık Tanı Sistemi</h1>
    </b-nav>
    <div>
      <b-card title="Erkan Aşamada Diyabet Teşhisi"
        sub-title="Sorularımız kaynak data setinden yapılan çıkarımlar tarafından değerlendirilecektir.">
        <!-- Question Start -->
        <div v-if="question">
          <b-card-text>
            {{ question.question_title }}
          </b-card-text>

          <b-link href="#" class="card-link" @click="setAnswer(question.answers[0])">{{ question.answers[0] }}</b-link>
          <b-link href="#" class="card-link" @click="setAnswer(question.answers[1])">{{ question.answers[1] }}</b-link>
        </div>
        <!-- Question End -->

        <!-- Response Start -->
        <div v-if="response">
          <b-card-text>
            Verdiğiniz cevaplara göre sonuçlarınız % {{ response.positivePercentage }} POZİTİF, % {{ response.negativePercentage }} NEGATİF' tir.
          </b-card-text>

          <b-card-text>
            Şimdiye kadar karşılaşılan pozitif vaka sayısı: {{ response.positive_count }}
          </b-card-text>
          <b-card-text>
            Şimdiye kadar karşılaşılan negatif vaka sayısı: {{ response.negative_count }}
          </b-card-text>

          <b-link href="#" class="card-link" @click="refresh()">YENİDEN TEST YAP</b-link>
        </div>
        <!-- Response End -->
      </b-card>
    </div>
  </div>
</template>

<script>
import decision from './../core/decision'
export default {
  name: 'Home',

  data () {
    return {
      question: null,
      response: null
    }
  },

  mounted () {
    this.fetchQuestions()
  },

  methods: {
    fetchQuestions () {
      this.question = decision.getQuestion()
    },

    setAnswer (answer) {
      let response = decision.getNextQuestion({
        answer: answer,
        question: this.question.question
      })

      if (typeof response.positivePercentage !== 'undefined' && response.positivePercentage !== null) {
        this.response = response
        this.question = null
      } else {
        this.question = response
        this.response = null
      }
    },

    refresh () {
      this.response = null
      this.question = decision.refresh()
    }
  }
}
</script>
