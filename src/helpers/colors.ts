import Color from "color";
import {normal} from "color-blend";

export function blend(color1: string, color2: string) {
  const color1Obj = colorToRGBAObj(color1);
  const color2Obj = colorToRGBAObj(color2);
  return toRGBA(normal(color1Obj, color2Obj));
}

export function colorToRGBAObj(color: string) {
  const {
    // @ts-ignore
    color: [r, g, b],
    //@ts-ignore
    valpha: a,
  } = Color(color).rgb();
  console.log(r, g, b, a);
  return {
    r,
    g,
    b,
    a,
  };
}

type MyColor = {r: number; g: number; b: number; a: number} | Color | string;

export function toRGBA(color: MyColor) {
  if (typeof color === "string") {
    color = Color(color);
  }
  if (color instanceof Color) {
    color = {
      r: color.red(),
      g: color.green(),
      b: color.blue(),
      a: color.alpha(),
    };
  }
  return `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;
}
