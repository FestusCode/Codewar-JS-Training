function rgb(r, g, b) {
  // round the values to the closest valid decimal (0 - 255)
  r = Math.max(0, Math.min(255, r));
  g = Math.max(0, Math.min(255, g));
  b = Math.max(0, Math.min(255, b));
  // convert decimal values to hexadecimal and low case to upper
  let hex_r = r.toString(16).padStart(2, "0").toUpperCase();
  let hex_g = g.toString(16).padStart(2, "0").toUpperCase();
  let hex_b = b.toString(16).padStart(2, "0").toUpperCase();
  return `${hex_r}${hex_g}${hex_b}`;
}
