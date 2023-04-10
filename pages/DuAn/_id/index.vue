<template>
  <div class="wp-main-page">
    <!-- SECTION Project -->
    <div class="wp-detail-project-page">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-5 col-xl-4">
            <div class="project-detail-page__left">
              <div class="category-project">
                <p>MY SERVICE</p>
              </div>
              <h3 class="tilte-item-project">{{ Duan.name }}</h3>
              <div class="content-item-project">
                <p v-html="Duan.description"></p>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-7 col-xl-8">
            <div class="project-detail-page__right">
              <div class="list-picture-detail-project">
                <div
                  v-for="Image in Duan.duAnImgae"
                  :key="Image.id"
                  class="card-columns card-feature"
                >
                  <div class="card display-card">
                    <div class="item-picture-detail-page">
                      <a class="picture-item-project">
                        <img :src="Image.imageA" alt="" class="img-before" />
                        <img :src="Image.imageB" alt="" class="img-after" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- END SECTION Project -->
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
      title: this.Duan.name,
      meta: [
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://i.ibb.co/D1Q8bMR/before-demo-1.jpg',
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
          content: 'My Project - Xfoto',
        },
        {
          hid: 'keywords ',
          content: 'My Project - Xfoto',
        },
        {
          hid: 'description',
          content:
            'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        },
      ],
    }
  },
  computed: { ...mapGetters(['Duan']) },
  created() {},
  // eslint-disable-next-line vue/order-in-components
  async fetch() {
    const vm = this
    await vm.$store.dispatch('getbyidDuan', vm.$route.params.id)
  },
  // mounted() {
  //   this.getbyidDuan(this.$route.params.id)
  // },

  // methods: { ...mapActions(['getbyidDuan']) },
}
</script>

<style lang="scss" scoped>
</style>