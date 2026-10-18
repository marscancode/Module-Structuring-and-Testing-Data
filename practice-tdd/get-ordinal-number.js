export function getOrdinalNumber(num) {
  if (num % 100 === 11) {
    return `${num}th`;
  } else if (num % 10 === 1) {
    return `${num}st`;
  } else if (num % 100 === 12) {
    return `${num}th`;
  } else if (num % 10 === 2) {
    return `${num}nd`;
  }
}
