/**
 * Adds numbers from a string input with support for custom delimiters
 * @param numbers - String containing numbers separated by delimiters
 * @returns Sum of all numbers
 * @throws Error when negative numbers are found
 */
export function add(numbers: string): number {
  if (numbers === "") return 0;

  let delimiter: RegExp = /,|\n/;
  if (numbers.startsWith("//")) {
    const match = numbers.match(/^\/\/(.+)\n(.*)$/);
    if (!match) {
      throw new Error("Invalid custom delimiter format");
    }

    const escapedDelimiter = match[1].replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    delimiter = new RegExp(escapedDelimiter);
    numbers = match[2];
  }

  const nums: number[] = numbers.split(delimiter).map((n) => parseInt(n));

  const negatives: number[] = nums.filter((n) => n < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed: ${negatives.join(",")}`);
  }

  return nums.reduce((sum, n) => sum + n, 0);
}
