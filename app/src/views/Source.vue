<template>
  <div>
    <b-container>
      <div class="overflow-auto">
        <b-table
          striped hover
          responsive="xl"
          id="my-table"
          :fields="fields"
          :items="items"
          :per-page="perPage"
          :current-page="currentPage"
        >
          <template v-slot:cell(index)="data">
            {{ data.index + 1 }}
          </template>
          <template v-slot:cell(Yas)="data">
            {{ data.item.yas }}
          </template>
          <template v-slot:cell(Cinsiyet)="data">
            {{ data.item.cinsiyet }}
          </template>
          <template v-slot:cell(Poliuri)="data">
            {{ data.item.poliüri }}
          </template>
          <template v-slot:cell(Polidipsi)="data">
            {{ data.item.polidipsi }}
          </template>
          <template v-slot:cell(Ani_Kilo_Kaybi)="data">
            {{ data.item.ani_kilo_kaybi }}
          </template>
          <template v-slot:cell(Halsizlik)="data">
            {{ data.item.halsizlik }}
          </template>
          <template v-slot:cell(Istah)="data">
            {{ data.item.istah }}
          </template>
          <template v-slot:cell(Genital_Pamukcuk)="data">
            {{ data.item.genital_pamukcuk }}
          </template>
          <template v-slot:cell(Gorsel_Bulaniklik)="data">
            {{ data.item.gorsel_bulaniklik }}
          </template>
          <template v-slot:cell(Kasinti)="data">
            {{ data.item.kasinti }}
          </template>
          <template v-slot:cell(Asabilik)="data">
            {{ data.item.asabilik }}
          </template>
          <template v-slot:cell(Iyilesme_Gecikmesi)="data">
            {{ data.item.iyilesme_gecikmesi }}
          </template>
          <template v-slot:cell(Kismi_Felc)="data">
            {{ data.item.kismi_felc }}
          </template>
          <template v-slot:cell(Kas_Sertligi)="data">
            {{ data.item.kas_sertligi }}
          </template>
          <template v-slot:cell(Sac_Dokulmesi)="data">
            {{ data.item.sac_dokulmesi }}
          </template>
          <template v-slot:cell(Obezite)="data">
            {{ data.item.obezite }}
          </template>
          <template v-slot:cell(Sinif)="data">
            {{ data.item.sinif }}
          </template>
        </b-table>
        <p class="mt-3">Current Page: {{ currentPage }}</p>
        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          aria-controls="my-table"
        ></b-pagination>
      </div>
    </b-container>
  </div>
</template>

<script>
import source from '@/core/source'
export default {
  name: 'Source',

  computed: {
    rows () {
      return this.items.length
    }
  },

  data () {
    return {
      perPage: 15,
      currentPage: 1,
      fields: [
        // A virtual column that doesn't exist in items
        'index',
        'Yas',
        'Cinsiyet',
        'Poliuri',
        'Polidipsi',
        'Ani_Kilo_Kaybi',
        'Halsizlik',
        'Istah',
        'Genital_Pamukcuk',
        'Gorsel_Bulaniklik',
        'Kasinti',
        'Asabilik',
        'Iyilesme_Gecikmesi',
        'Kismi_Felc',
        'Kas_Sertligi',
        'Sac_Dokulmesi',
        'Obezite',
        { key: 'Sinif', stickyColumn: true, variant: 'info' }
      ],
      items: source.items
    }
  },

  mounted () {
    console.log(source)
  }
}
</script>
