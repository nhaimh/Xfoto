<template>
  <div class="wp-main-page">
    <!-- SECTION blog -->
    <div class="wp-blog-page">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6">
            <div class="layout-left-blog-new">
              <div class="item-blog-new">
                <a class="picture-blog-item">
                  <img :src="Blo.image" alt="" />
                </a>
                <div class="main-item-blog-new">
                  <h3 class="title-blog-item">
                    <nuxt-link :to="`/BaiViet/${Blo.id}`">
                      <a>{{ Blo.title }}</a>
                    </nuxt-link>
                  </h3>
                  <p class="txt-content-blog">
                    {{ Blo.demoDescription }}
                  </p>
                  <a href="" class="category-blog">{{ Blo.authorName }}</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="layout-right-blog-new">
              <div v-for="b in Blogg.data" :key="b.index" class="item-blog-new">
                <a class="picture-blog-item">
                  <img :src="b.image" alt="" />
                </a>
                <div class="main-item-blog-new">
                  <h3 class="title-blog-item">
                    <a>
                      <nuxt-link :to="`/BaiViet/${b.id}`">
                        {{ b.title }}
                      </nuxt-link>
                    </a>
                  </h3>
                  <a class="category-blog">{{ b.authorName }}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- END SECTION blog -->

    <!-- SECTION List-blog -->
    <BaiViet-List-blog />
    <!-- END SECTION List-blog -->

    <div class="border-page">
      <div class="container">
        <div class="border-bt-page"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'WebXfotoIndex',

  data() {
    return {
      params: {
        pageSize: 3,
        pageIndex: 1,
        status: 0,
        keyWord: 'a',
      },
    }
  },
  head() {
    return {
      title: 'Our Blog',
      meta: [
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'undefined',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'We are a group of professional editors with a wealth of experience in editing real estate photograph, working with clients across the world with the aim of providing satisfi...',
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'article',
        },
        {
          hid: 'og:title ',
          property: 'og:title',
          content: 'Our Blog - Xfoto',
        },
        {
          hid: 'keywords ',
          content: 'Our Blog - Xfoto',
        },
        {
          hid: 'description',
          content:
            'We are a group of professional editors with a wealth of experience in editing real estate photograph, working with clients across the world with the aim of providing satisfi...',
        },
      ],
    }
  },
  computed: {
    ...mapGetters(['Blogg', 'Blo']),
    blogs() {
      return this.Blogg
    },
  },
  watch: {
    'params.pageIndex'() {
      this.params.pageIndex = this.params.pageIndex ? this.params.pageIndex : 1
      this.$store.dispatch.getBlogSide(this.params)
    },
  },
  mounted() {},
  // eslint-disable-next-line vue/order-in-components
  async fetch() {
    const vm = this
    await vm.$store.dispatch('getByIdBlog', 1)
    await vm.$store.dispatch('getBlogSide', vm.params)
  },
  // created() {
  //   this.getBlogSide(this.params)
  //   this.getByIdBlog(1)
  // },
  // methods: {
  //   ...mapActions(['getBlogSide', 'getByIdBlog']),
  // },
}
</script>

<style lang="scss" scoped>
</style>