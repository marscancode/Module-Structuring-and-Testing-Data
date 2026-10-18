export function getOrdinalNumber(num) {
if(num % 100 === 11){
  return `${num}th`
} else if(num % 10 === 1){
    return `${num}st`
  }
}
