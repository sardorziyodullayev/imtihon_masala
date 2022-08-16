// MASALALAR


// 1. Ism familiyani, familiya ism ko'rinishida qaytarish?
function nameReverse(name) {
  return name.split(/,|\s/).reverse().join(" ");
}
let reverseLastFirstName = nameReverse("Sardor Ziyodullayev");
console.log(reverseLastFirstName);

// 2. Arraydagi qiymatlarni agar ildizdan chiqsa, ildizdan chiqaramiz, ildizdan chiqmasa darajada oshiramiz?
let array = [4, 1, 2, 32, 5, 25, 16, 81];
let arrayResult = [];

function num() {
  for (let i = 0; i < array.length; i++) {
    if (Math.sqrt(array[i]) % 1 == 0) {
      arrayResult.push(Math.sqrt(array[i]));
    } else {
      arrayResult.push(Math.pow(array[i], 2));
    }
  }
}
num();

console.log(arrayResult);

// 3. Stringdagi berilganlarni ikkita qilib qaytarish?

let repeatedChars = "Hello";
let repeatNTimes = (str, n) => {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    res += str[i].repeat(n);
  }
  return res;
};
console.log(repeatNTimes(repeatedChars, 2));
