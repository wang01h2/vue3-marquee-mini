import VMarquee from "./src/marquee.vue";

// 如果想通过CDN方式引入，需要编写install函数
// 注册组件
VMarquee.install = function (Vue) {
  Vue.component(VMarquee.name, VMarquee);
};

export default VMarquee;
