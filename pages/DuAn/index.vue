<template>
  <div>
    <div class="wp-main-page">
      <!-- SECTION Project -->
      <div class="wp-project-page">
        <div class="container">
          <div class="project-page__list">
            <div
              v-for="duan in duans"
              :key="duan.index"
              class="project-page__item"
            >
              <div class="picture-item-left">
                <div class="beer-slider">
                  <img-comparison-slider>
                    <img slot="first" :src="duan.image" />
                    <img
                      slot="second"
                      :src="duan.imageB"
                      style="height: 507px !important"
                    />
                  </img-comparison-slider>
                </div>
              </div>
              <div class="main-item-right">
                <div class="category-project">
                  <p>MY SERVICE</p>
                </div>
                <h3 class="tilte-item-project">
                  #{{ duan.id }} {{ duan.name }}
                </h3>
                <div class="content-item-project">
                  <p>
                    {{ duan.description }}
                  </p>
                </div>
                <div class="stt-btn-item-project">
                  <div class="btn-view-item-project">
                    <nuxt-link :to="`/DuAn/${duan.id}`">View more</nuxt-link>
                  </div>
                  <div class="stt-item-project">0{{ duan.id }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="border-page">
        <div class="container">
          <div class="border-bt-page"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'WebXfotoIndex',

  data() {
    return {}
  },
  head() {
    return {
      title: 'Our Project',
      meta: [
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://i.ibb.co/ZX4YjXp/Our-Project.png',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'article',
        },
        {
          hid: 'og:title ',
          property: 'og:title',
          content: 'Our Project - Xfoto',
        },
        {
          hid: 'keywords ',
          content: 'Our Project - Xfoto',
        },
        {
          hid: 'description',
          content:
            'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        },
      ],
    }
  },
  computed: {
    ...mapGetters(['Duans']),
    duans() {
      return this.Duans
    },
  },
  // eslint-disable-next-line vue/order-in-components
  async fetch({ store }) {
    await store.dispatch('getDuans')
  },
}
</script>

<style >
</style>