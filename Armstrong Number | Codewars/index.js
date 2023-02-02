function narcissistic(value) {
  let str_value = value.toString();
  let value_len = str_value.length;
  return (
    str_value
      .split("")
      .reduce((sum, digit) => sum + Math.pow(digit, value_len), 0) === value
  );
}
