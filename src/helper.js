export const sizes = {
  up() {},
  down(size) {
    const sizes = {
      xs: "575.98px",
      sm: "767.98px",
      cstm: "850px",
      md: "991.98px",
      lg: "1199.98px",
    };
    return `@media (max-width:${sizes[size]})`;
  },
};

export function truncateString(str, num) {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + "...";
}
