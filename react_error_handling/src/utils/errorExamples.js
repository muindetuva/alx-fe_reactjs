export function safeDivide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero: the divisor must be non-zero.')
  }

  return a / b
}

export function sumWithoutLast(numbers) {
  let total = 0

  // Deliberate off-by-one logic bug: <= includes the last element that this function should omit.
  for (let index = 0; index <= numbers.length - 1; index += 1) {
    total += numbers[index]
  }

  return total
}
