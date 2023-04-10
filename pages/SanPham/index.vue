<template>
  <div class="wp-main-page">
    <div class="text-center banner-about-page">
      <div class="wp-content">
        <div class="title-home-page">
          <h1>Feature job</h1>
          <p>WE PROVIDE THE BEST SERVICE</p>
        </div>
      </div>
    </div>
    <div class="wp-editing">
      <div
        v-for="product in SanPham"
        :key="product.id"
        class="container"
        style="padding-bottom: 30px"
      >
        <div class="title-page-feature-job">
          <h2 class="txt-big-title">{{ product.name }}</h2>
          <p class="txt-small-title">
            {{ product.description }}
          </p>
        </div>
        <div class="wp-slide-editing">
          <div
            id="slide-editing"
            v-swiper:[product.id]="SwiperEditing"
            class="swiper-container"
          >
            <div class="swiper-wrapper">
              <div
                v-for="image in product.sanPhamImages"
                :key="image.id"
                class="swiper-slide"
              >
                <div
                  class="item-slide-feature"
                  @click="openPopupGallery(), getSPById(image.id)"
                >
                  <a><img :src="image.imageA" alt="" /></a>
                </div>
              </div>
            </div>
          </div>
          <div class="control-slide-review">
            <div
              id="prev-slide-editing"
              class="item-btn-feature-slide btn-prev-feature"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="30"
                viewBox="0 0 15 30"
                fill="none"
              >
                <path
                  d="M0.173064 14.1844L13.9236 0.187527C14.1628 -0.053747 14.5583 -0.0644729 14.8074 0.168529C15.0564 0.400903 15.065 0.786007 14.8269 1.02905L1.49024 14.6051L14.8269 28.1812C15.065 28.4243 15.0565 28.8094 14.8074 29.0418C14.6865 29.1547 14.5303 29.2105 14.3753 29.2105C14.2104 29.2105 14.0469 29.1475 13.9236 29.0227L0.173064 15.0259C-0.0576878 14.7905 -0.0576878 14.4197 0.173064 14.1844Z"
                  fill="#2E2E2E"
                />
              </svg>
            </div>
            <div
              id="next-slide-editing"
              class="item-btn-feature-slide btn-next-feature"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="30"
                viewBox="0 0 15 30"
                fill="none"
              >
                <path
                  d="M14.8269 14.1844L1.07644 0.187527C0.837189 -0.053747 0.441665 -0.0644729 0.192632 0.168529C-0.0564011 0.400903 -0.0649557 0.786007 0.17312 1.02905L13.5098 14.6051L0.173061 28.1812C-0.0650148 28.4243 -0.0564593 28.8094 0.192574 29.0418C0.313458 29.1547 0.469675 29.2105 0.62472 29.2105C0.78955 29.2105 0.953092 29.1475 1.07638 29.0227L14.8269 15.0259C15.0577 14.7905 15.0577 14.4197 14.8269 14.1844Z"
                  fill="#2E2E2E"
                />
              </svg>
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
    <SanPham-DetailSP
      v-if="isGalleryPopupOpen"
      v-show="isGalleryPopupOpen"
      @close-modal="isGalleryPopupOpen = closePopupGallery()"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'WebXfotoIndex',

  data() {
    return {
      SwiperEditing: {
        slidesPerView: 'auto',
        spaceBetween: 20,
        speed: 700,
        navigation: {
          nextEl: '#next-slide-editing',
          prevEl: '#prev-slide-editing',
        },
        autoHeight: true,
        breakpoints: {},
      },
      isGalleryPopupOpen: false,
    }
  },
  head() {
    return {
      title: 'Feature Job',
      meta: [
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'undefined',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'We make sure the final product is of the highest quality',
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'article',
        },
        {
          hid: 'og:title ',
          property: 'og:title',
          content: 'Feature Job - Xfoto',
        },
        {
          hid: 'keywords ',
          content: 'Feature Job - Xfoto',
        },
        {
          hid: 'description',
          content: 'We make sure the final product is of the highest quality',
        },
      ],
    }
  },
  computed: {
    ...mapGetters(['SanPham']),
  },
  // eslint-disable-next-line vue/order-in-components
  async fetch({ store }) {
    await store.dispatch('getSanPham')
  },
  // created() {
  //   this.getSanPham()
  // },
  // mounted() {},

  methods: {
    ...mapActions(['getSPById']),
    openPopupGallery() {
      this.isGalleryPopupOpen = true
      document.body.classList.add('open-gallery-popup')
    },
    closePopupGallery() {
      this.isGalleryPopupOpen = false
      document.body.classList.remove('open-gallery-popup')
    },
  },
}
</script>

<style lang="scss" scoped>
</style>