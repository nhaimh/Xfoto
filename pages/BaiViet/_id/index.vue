<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="wp-main-page">
    <div class="wp-detail-blog">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-10 col-xl-8 m-auto">
            <div class="title-detail-blog-page">
              <div class="title-layout-left">
                <h3>
                  {{ Bl.title }}
                </h3>
                <div class="category-datetime">
                  <p class="category-blog">{{ Bl.authorName }}</p>
                  <p class="date-blog">{{ Bl.createdDate }}</p>
                </div>
              </div>
              <div class="intro-title-blog-detail">
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>
            </div>
            <div v-html="Bl.description"></div>
            <!-- <v-html>{{ Bl.description }}</v-html> -->
          </div>
        </div>
      </div>
    </div>
    <div class="wp-list-post-related">
      <div class="container">
        <div class="title-related-posts">
          <h2>Related posts</h2>
        </div>
        <div class="main-category-post">
          <div v-for="b in posts" :key="b.id" class="item-post-page">
            <a href="" class="picture-post-item">
              <img :src="b.image" alt="" />
            </a>
            <div class="content-item-post">
              <a class="title-item-post"
                ><nuxt-link :to="`/BaiViet/${b.id}`" class="nuxtlink">
                  {{ b.title }}
                </nuxt-link></a
              >
              <a href="" class="category-blog">{{ b.authorName }}</a>
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
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'WebXfotoIndex',
  data() {
    return {
      params: {
        pageSize: 6,
        pageIndex: 1,
        status: 0,
        keyWord: 'a',
      },
    }
  },
  head() {
    return {
      title: this.Bl.title,
      meta: [
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.Bl.image,
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
          content: this.Bl.title,
        },
        {
          hid: 'keywords ',
          content: this.Bl.title,
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
    ...mapGetters(['Blo', 'Blog']),
    Bl() {
      return this.Blo
    },
    posts() {
      return this.Blog.data
    },
  },
  watch: {
    'params.pageIndex'() {
      this.getBlog(this.params)
    },
  },
  created() {},
  mounted() {
    this.getByIdBlog(this.$route.params.id)
    this.getBlog(this.params)
  },

  methods: {
    ...mapActions(['getByIdBlog', 'getBlog']),
  },
}
</script>

<style >
.nuxtlink {
  color: black;
  background: linear-gradient(90deg, #fff 0%, #fff 100%) !important;
}
</style>