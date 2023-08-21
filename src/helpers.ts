//@ts-nocheck
import { Product } from "./pages/types";

export const getScreenWidth = (): number => {
  const scrollBarWidth = 24;
  const mainDomElement = document.querySelector("main");
  if (mainDomElement) {
    const rect = mainDomElement.getBoundingClientRect();
    return rect.width - scrollBarWidth;
  }
};

export const getDeviceViewSize = (screenWidth: number) => {
  if (screenWidth <= 560) return "mobile";
  if (screenWidth >= 561 && screenWidth <= 999) return "tablet";
  if (screenWidth >= 1000) return "screen";
};

export const toMatrix = (arr: Product[], width: number) =>
  arr.reduce(
    (rows, key, index) =>
      (index % width === 0
        ? rows.push([key])
        : rows[rows.length - 1].push(key)) && rows,
    []
  );
