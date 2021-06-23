// takes 6-digit hex colors, with or without preceding '#', e.g. '#bad304'
export const changeBrightness = (color: string, amount: number): string =>
  color.replace(/\w\w/g, (hex) =>
    ('0' + Math.min(255, Math.max(0, parseInt(hex, 16) + amount)).toString(16)).substr(-2)
  )
