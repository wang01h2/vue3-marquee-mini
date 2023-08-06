// @ts-ignore
import _Marquee from "./src/marquee";
import { withInstall } from "@vue3-marquee/utils/withInstall";

const Marquee = withInstall(_Marquee); // 生成带有 install 方法的组件

export default Marquee; // 导出组件
export type { MarqueeProps } from "./src/marqueeType"; // 导出组件 props 的类型

// 这里为了给 volar 用的，具体可以看下面的文档
declare module "vue" {
  export interface GlobalComponents {
    VMarquee: typeof Marquee;
  }
}
