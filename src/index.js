module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const symbols = new Map(bracketsConfig);
  const openingBrackets = new Set(bracketsConfig.map(pair => pair[0]));
  const closingBrackets = new Set(bracketsConfig.map(pair => pair[1]));

  for (const s of str) {
    if (openingBrackets.has(s)) {
      if (stack.length > 0 && stack[stack.length - 1] === s && closingBrackets.has(s)) {
        stack.pop();
      } else {
        stack.push(s);
      }
    } else {
      const lastS = stack.pop();
      if (!lastS || symbols.get(lastS) !== s) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
