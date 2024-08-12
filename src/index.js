module.exports = function check(str, bracketsConfig) {
  const stack = [];
  let symbols = new Map(bracketsConfig);
  for (const s of str){
    if (symbols.has(s))
      stack.push(s);
    else{
      const lastS = stack.pop();
      if(!lastS || symbols.get(lastS) !== s){
        return false;
      }
    }
  }
  return stack.length === 0;
}