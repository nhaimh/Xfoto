<template>
  <div class="wp-menu-page" :class="{ scroll }">
    <div class="container">
      <div class="topbar-menu">
        <div class="block-info-contact">
          <div class="item-topbar-menu-home phone-item">
            <a href="tel:0369005764" class="name-item-topbar">
              <span class="name">Hotline:</span>
              <span class="txt-main">+84911171102</span>
            </a>
          </div>
          <div class="item-topbar-menu-home mail-item">
            <a href="mailto:luongngochai29@gmail.com" class="name-item-topbar">
              <span class="name">Email:</span>
              <span class="txt-main">info@xfoto.com</span>
            </a>
          </div>
        </div>
        <div class="list-mxh-topbar">
          <a href="https://www.facebook.com/nhaimh"
            ><i class="fab fa-facebook-f"></i
          ></a>
          <a href="javascript:;"><i class="fab fa-google"></i></a>
          <a href="javascript:;"><i class="fab fa-twitter"></i></a>
          <a href="javascript:;"><i class="fab fa-youtube"></i></a>
        </div>
      </div>
      <div class="menu-desktop-page">
        <div class="layout-menu-desktop">
          <a href="/" class="menu-left-desktop">
            <img src="~/assets/img-fix/logo-web.svg" alt="" />
          </a>
          <div class="list-menu-desktop">
            <div class="item-menu-desktop">
              <nuxt-link to="/">Home</nuxt-link>
            </div>
            <div class="item-menu-desktop">
              <nuxt-link to="/DuAn">About us</nuxt-link>
            </div>
            <div class="item-menu-desktop">
              <nuxt-link to="/OurService">Our Service</nuxt-link>
            </div>
            <div class="item-menu-desktop">
              <nuxt-link to="/SanPham">Feature Job</nuxt-link>
            </div>
            <div class="item-menu-desktop">
              <nuxt-link to="/BaiViet">Blog</nuxt-link>
            </div>
            <div class="item-menu-desktop">
              <nuxt-link to="/LienHe">Contact</nuxt-link>
            </div>
          </div>
          <div class="menu-mobile">
            <div class="nav-btn-show">
              <a id="menu-rotate" href="#menu" class="icon-menu active">
                <div class="menu-line">
                  <div class="lines">
                    <div class="line diagonal part-1"></div>
                    <div class="line horizontal"></div>
                    <div class="line diagonal part-2"></div>
                  </div>
                </div>
              </a>
              <nav id="menu">
                <ul class="menu-mb">
                  <li class="active-menu">
                    <nuxt-link to="/">Home</nuxt-link>
                  </li>
                  <li><nuxt-link to="/DuAn">About us</nuxt-link></li>
                  <li><nuxt-link to="/OurService">Our Service</nuxt-link></li>
                  <li><nuxt-link to="/SanPham">Feature Job</nuxt-link></li>
                  <li><nuxt-link to="/BaiViet">Blog</nuxt-link></li>
                  <li><nuxt-link to="/LienHe">Contact</nuxt-link></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WebtestHeaderDafault',
  data() {
    return {
      scroll: false,
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },

  methods: {
    handleScroll() {
      this.handleScroll = window.scrollY
      if (this.handleScroll <= 50) {
        this.scroll = false
      } else {
        this.scroll = true
      }
    },
  },
}
</script>

<style >
a.nuxt-link-active {
  font-weight: bold;
}
/* exact link will show the primary color for only the exact matching link */
a.nuxt-link-exact-active {
  background: linear-gradient(90deg, #099ff8 0%, #046cea 100%);
}
</style>