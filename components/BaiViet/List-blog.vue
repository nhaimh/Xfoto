<template>
  <div class="wp-list-blog-page">
    <!-- {{ Blog }} -->
    <div class="container">
      <div class="list-category-blog">
        <a href="" class="item-category-blog active">All news</a>
        <a href="" class="item-category-blog">Photo Editing</a>
        <a href="" class="item-category-blog">Photography</a>
        <a href="" class="item-category-blog">Presets Download</a>
        <a href="" class="item-category-blog">Virtual dusk</a>
      </div>
      <p class="statistical-count-blog">{{ Blog.totalRows }} posts</p>
      <div class="main-category-post">
        <div v-for="b in Blog.data" :key="b.index" class="item-post-page">
          <a class="picture-post-item">
            <img :src="b.image" alt="" />
          </a>
          <div class="content-item-post">
            <a class="title-item-post"
              ><nuxt-link :to="`/BaiViet/${b.id}`" style="color: black">
                {{ b.title }}
              </nuxt-link></a
            >

            <a href="" class="category-blog">{{ b.authorName }}</a>
          </div>
        </div>
      </div>
      <b-pagination
        v-model="params.pageIndex"
        :total-rows="Blog.totalRows"
        :per-page="params.pageSize"
        aria-controls="my-table"
        class="list-pagination-item"
      ></b-pagination>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'WebXfotoListBlog',

  data() {
    return {
      params: {
        pageSize: 9,
        pageIndex: 0,
        status: 0,
        keyWord: 'a',
      },
    }
  },
  computed: {
    ...mapGetters(['Blog', 'totalrow']),
  },
  watch: {
    'params.pageIndex'() {
      this.params.pageIndex = this.params.pageIndex ? this.params.pageIndex : 1
      this.$store.dispatch('getBlog', this.params)
    },
  },
  mounted() {},
  async fetch({ store }) {
    await store.dispatch('getBlog')
  },
  // created() {},
  // methods: {
  //   ...mapActions(['getBlog']),
  // },
}
</script>

<style lang="scss" scoped>
</style>