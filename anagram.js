function sort(str) {
  let arr = str.split("");
  arr = arr.sort(); //sort() function can only be used on arrays not on strings
  let sortedString = arr.join("");
  return sortedString;
}
function isAnagram(str1, str2) {
  // Checking for length of string.
  if (str1.length !== str2.length) {
    return false;
  }

  // Converting to lowercase
  let str01 = str1.toLowerCase();
  let str02 = str2.toLowerCase();

  // rearranging & SORTING
  if (sort(str01) === sort(str02)) {
    return true;
  } else {
    return false;
  }
}
let str1 = "Silent";
let str2 = "Listen";
console.log(str1, str2);
isAnagram(str1, str2);
console.log(str1, str2);

module.exports = isAnagram;
