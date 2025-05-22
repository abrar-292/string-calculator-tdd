function add(numbers) {
  if (numbers === "") return 0;

  let delimiter = /,|\n/;
  if (numbers.startsWith("//")) {
    const match = numbers.match(/^\/\/(.+)\n(.*)$/);
    delimiter = new RegExp(match[1]);
    numbers = match[2];
  }

  return numbers
    .split(delimiter)
    .map((n) => parseInt(n))
    .reduce((sum, n) => sum + n, 0);
}
module.exports = { add };
