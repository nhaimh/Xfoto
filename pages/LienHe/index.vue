<template>
  <div class="wp-main-page">
    <!-- SECTION Map -->
    <div class="wp-map-page">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.551389213174!2d105.8235677503321!3d21.01061249370514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab7e3217f79b%3A0x2945e225601c5beb!2zMTcgTmcuIDE2NyBQLiBUw6J5IFPGoW4sIFF1YW5nIFRydW5nLCDEkOG7kW5nIMSQYSwgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1679967140541!5m2!1svi!2s"
        width="600"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    <!-- END Map -->

    <!-- SECTION Contact -->
    <div class="wp-contact-page">
      <div class="container">
        <div class="box-contact-page">
          <div class="layout-left-contact">
            <h3 class="title">Send us a Message</h3>
            <div class="form-contact-page">
              <div class="item-contact-page">
                <span class="name-form">Your Name</span>
                <input type="text" placeholder="" />
                <span class="line"></span>
              </div>
              <div class="item-contact-page">
                <span class="name-form">Email Address</span>
                <input type="text" placeholder="" />
                <span class="line"></span>
              </div>
              <div class="item-contact-page">
                <span class="name-form">Phone</span>
                <input type="text" placeholder="" />
                <span class="line"></span>
              </div>
              <div class="item-contact-page">
                <span class="name-form">Company</span>
                <input type="text" />
                <span class="line"></span>
              </div>
              <div class="item-contact-page">
                <span class="name-form">Message</span>
                <textarea placeholder=""></textarea>
                <span class="line"></span>
              </div>
            </div>
            <div class="btn-contact-now">
              <a href="">Send</a>
            </div>
          </div>
          <div class="layout-right-contact">
            <h3 class="title">Contact Infomation</h3>
            <div class="block-info-contact">
              <div class="item-info-contact">
                <a href="tel:+84369005764">
                  <img
                    src="https://i.ibb.co/BL4GyWY/icon-phone.png"
                    alt="icon-phone"
                  />
                </a>
                <div class="txt-info-contact">
                  <p class="name-mxh">Phone</p>
                  <a href="tel:+84369005764" class="info-mxh">+84369005764</a>
                </div>
              </div>
              <div class="item-info-contact">
                <a href="mailto:luongngochai29@gmail.com">
                  <img
                    src="https://i.ibb.co/wsL6mhT/icon-mail.png"
                    alt="icon-mail"
                  />
                </a>
                <div class="txt-info-contact">
                  <p class="name-mxh">Email</p>
                  <a href="mailto:luongngochai29@gmail.com" class="info-mxh"
                    >luongngochai29@gmail.com</a
                  >
                </div>
              </div>
              <div class="item-info-contact">
                <a href="">
                  <img
                    src="https://i.ibb.co/s2zyV1K/icon-map.png"
                    alt="icon-map"
                    border="0"
                  />
                </a>
                <div class="txt-info-contact">
                  <p class="name-mxh">Address</p>
                  <a href="" class="info-mxh"
                    >17/167 Tay Son St, Dong Da Dis, Hanoi City, Vietnam</a
                  >
                </div>
              </div>
            </div>
            <div class="list-mxh-topbar">
              <a href="https://www.facebook.com/nhaimh"
                ><i class="fab fa-facebook-f"></i
              ></a>
              <a href="https://www.instagram.com/_haihn/"
                ><i class="fab fa-instagram"></i
              ></a>
              <a href=""><i class="fab fa-twitter"></i></a>
              <a href=""><i class="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- END SECTION Contact -->

    <div class="border-page">
      <div class="container">
        <div class="border-bt-page"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WebXfotoIndex',

  data() {
    return {}
  },
  head() {
    return {
      title: 'Contact Us',
      meta: [
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://i.ibb.co/6t53dt0/Contactme.png',
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

  mounted() {},

  methods: {},
}
</script>

<style lang="scss" scoped>
</style>