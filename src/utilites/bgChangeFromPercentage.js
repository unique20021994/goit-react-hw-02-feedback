export default function bgChangePercentage(percentage, css) {
  return Number.parseInt(percentage) >= 50 ? `${css.list} ${css.green}` : `${css.list}${css.red}`
}