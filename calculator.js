function add(numbers) {
  if (numbers === "") return 0;

  const sanitized = numbers.replace(/\n/g, ",");
  return sanitized
    .split(",")
    .map((n) => parseInt(n))
    .reduce((sum, n) => sum + n, 0);
}
module.exports = { add };
