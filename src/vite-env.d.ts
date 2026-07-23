/// <reference types="vite/client" />

declare module "react-vertical-timeline-component" {
  import { ComponentType, ReactNode } from "react";

  interface VerticalTimelineProps {
    children: ReactNode;
    className?: string;
    layout?: "1-column-left" | "1-column-right" | "1-column" | "2-columns";
    lineColor?: string;
  }

  interface VerticalTimelineElementProps {
    children?: ReactNode;
    className?: string;
    contentStyle?: React.CSSProperties;
    contentArrowStyle?: React.CSSProperties;
    date?: string;
    dateClassName?: string;
    iconStyle?: React.CSSProperties;
    icon?: ReactNode;
    visible?: boolean;
  }

  export const VerticalTimeline: ComponentType<VerticalTimelineProps>;
  export const VerticalTimelineElement: ComponentType<VerticalTimelineElementProps>;
}

declare module "react-parallax-tilt" {
  import { ComponentType, CSSProperties, ReactNode } from "react";

  interface ReactParallaxTiltProps {
    children?: ReactNode;
    className?: string;
    style?: CSSProperties;
    tiltMaxAngleX?: number;
    tiltMaxAngleY?: number;
    perspective?: number;
    scale?: number;
    transitionSpeed?: number;
    gyroscope?: boolean;
    glareEnable?: boolean;
    glareMaxOpacity?: number;
    glareColor?: string;
    glarePosition?: string;
    glareBorderRadius?: string;
  }

  const ReactParallaxTilt: ComponentType<ReactParallaxTiltProps>;
  export default ReactParallaxTilt;
}
