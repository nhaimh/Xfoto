<template>
  <div
    id="popup-gallery-page"
    class="popup-gallery-page"
    :class="{ active: isGalleryPopupOpen }"
  >
    <div class="ct-popup-gallery">
      <div
        class="close-popup-icon"
        @click="closePopupGallery, $emit('close-modal')"
      >
        <img src="https://i.ibb.co/hYPRgj6/close.png" alt="" />
      </div>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="wp-title-gallery-popup">
              <h3 class="name-tour-gallery">
                {{ Anh.description }}
              </h3>
              <div class="wp-day-ctg text-center">
                <span class="day-create">2019/06/20</span>
              </div>
            </div>
            <div class="slider-gallery">
              <div
                id="slider-popup-featureJob"
                v-swiper:mySwiper="galleryFeature"
                class="swiper-container slider-popup-gallery-top"
              >
                <div class="swiper-wrapper">
                  <div
                    class="swiper-slide"
                    style="display: flex; justify-content: center !important"
                  >
                    <img-comparison-slider class="item-image-before-after">
                      <img slot="first" :src="Anh.imageA" alt="Original" />
                      <img slot="second" :src="Anh.imageB" alt="Processed" />
                    </img-comparison-slider>
                  </div>
                </div>
              </div>

              <div id="btn-album-prev" class="arrow-control-album arrow-left">
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
                  ></path>
                </svg>
              </div>
              <div id="btn-album-next" class="arrow-control-album arrow-right">
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
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'WebXfotoDetail',

  data() {
    return {
      galleryFeature: {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        allowTouchMove: false,
        speed: 1000,
        autoHeight: true,
        navigation: {
          nextEl: '#btn-album-next',
          prevEl: '#btn-album-prev',
        },
      },
      isGalleryPopupOpen: true,
    }
  },
  computed: {
    ...mapGetters(['Anh']),
  },
  mounted() {},

  methods: {
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