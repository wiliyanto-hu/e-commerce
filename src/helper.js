const helper = {
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
export default helper;
