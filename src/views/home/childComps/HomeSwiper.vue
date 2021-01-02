<!--  -->
<template>
  <swiper>
    <swiper-item v-for="(item, index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name: "HomeSwiper",
  props: {
    banners: {
      type: Array,
    },
  },
  data() {
    return {};
  },

  components: {
    Swiper,
    SwiperItem,
  },

  computed: {},

  mounted: {},

  methods: {},
};
</script>
<style scoped>
</style>