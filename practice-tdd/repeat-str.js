export function repeatStr(str, count) {
  if (count < 0) {
    throw new Error("warning! Count cannot be negative!");
  }
  let result = "";
  for (let i = 0; i < count; i++) {
    result += str;
  }
  return result;
}
