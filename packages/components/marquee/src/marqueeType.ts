import {CSSProperties, ExtractPropTypes, FunctionalComponent, HTMLAttributes} from "vue";

export interface MarqueeProps {
  // startPlay?: boolean,
  // speed?: number,
  // direction?: 'left' | 'right'
  // delay?: CSSProperties['animationDelay']
  // gradientColor?: string
  // gradientWidth?: CSSProperties['width']
  // // hover 暂停
  // pauseOnHover?: boolean
  startPlay: { type: Boolean, default: true },
  speed: { type: Number, default: 20 },
  className: String,
  delay: String,
  direction: { type: String, default: "left" },
  gradientWidth: String,
  gradientColor: String,
  pauseOnHover: { type: Boolean, default: false },
  resProps: Object,
}
