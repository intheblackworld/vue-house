export const isMobile =
  window.navigator.userAgent.match(/iPhone/i) != null ||
  window.navigator.userAgent.match(/Android/i) != null

export const isPC = !isMobile

export const isTablet = window.navigator.userAgent.match(/iPad/i) != null
