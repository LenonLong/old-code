// Reverse the provided string
function reverseStr(str){
// .split will split the individual letter / .join will join them back together
  var newStr = str.split('').reverse().join('');
  return newStr;
}

reverseStr('hello');
