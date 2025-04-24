// console.log("Heelo train");


// function getPositive(arr: number[]): string {
//     return arr.filter(x => x > 0).join('');
// }

// // Funksiyani sinab ko'ramiz
// console.log(getPositive([1, -4, 2]));  // Natija: "12"


// H2-TASK: 

// Shunday function tuzing, unga string argument pass bolsin. Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
// MASALAN: getDigits("m14i1t") return qiladi "141".


// function getDigits(str: string): string {
//     return str.replace(/\D/g, ''); // \D - digit bo'lmagan belgilarni o'chiradi
// }

// console.log(getDigits("m14i1t")); // Output: "141"




/* 
-- Project Standarts.

-- Naming Standarts:
     function, method , variable  == Camel
     class                        => PASCAL
     folder                       => KEBAB
     css                          => SNAKE

-- ERRor handling
*/


/* 
REQUESTLAR :
    Traditional API
    Rest API
    GRAPHQL API
    ....
*/


// I-TASK:

// Shunday function yozing, u parametridagi array ichida eng kop takrorlangan raqamni topib qaytarsin.
// MASALAN: majorityElement([1,2,3,4,5,4,3,4]) return 4


// function majorityElement(arr: number[]): number {
//     const count: { [key: number]: number } = {}; // Har bir elementni sanash uchun obyekt

//     // Har bir elementni hisoblash
//     for (let num of arr) {
//         if (count[num]) {
//             count[num]++; // Agar element allaqachon bo'lsa, sanashni oshiramiz
//         } else {
//             count[num] = 1; // Agar element yangi bo'lsa, uni 1 ga tenglaymiz
//         }
//     }

//     // Eng ko'p takrorlangan elementni topish
//     let majority: number = arr[0];
//     let maxCount: number = 0;

//     for (let num in count) {
//         if (count[num] > maxCount) {
//             maxCount = count[num];
//             majority = Number(num); // num string bo'ladi, uni raqamga aylantiramiz
//         }
//     }

//     return majority;
// }

// // Misol
// console.log(majorityElement([1, 2, 3, 4, 5, 4, 3, 4])); // Natija: 4


// J-TASK: 

// Shunday function yozing, u string qabul qilsin va string ichidagi eng uzun sozni qaytarsin.
// MASALAN: findLongestWord("I come from Uzbekistan") return "Uzbekistan".

// function findLongestWord(sentence: string): string {
//     // So'zlarni ajratish uchun bo'sh joy asosida bo'lib olamiz
//     const words = sentence.split(' ');

//     // Eng uzun so'zni topish uchun
//     let longestWord = '';

//     for (let word of words) {
//         // Agar hozirgi so'z oldingi eng uzun so'zdan uzunroq bo'lsa, uni yangilaymiz
//         if (word.length > longestWord.length) {
//             longestWord = word;
//         }
//     }

//     return longestWord;
// }

// // Misol
// console.log(findLongestWord("I come from Surkhandarya")); // "Surkhandarya"


         //      COOKIE

         // request join
         // Self destroy
        //  K-TASK: 

        //  Shunday function yozing, u string qabul qilsin va string ichidagi unli harflar sonini qaytarsin.
        //  MASALAN: countVowels("string") return 1;
   
        //  function countVowels(str: string): number {
        //     // Unli harflar to'plami
        //     const vowels: string[] = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
        //     let count: number = 0;
        
        //     // Har bir belgi bo'yicha tekshiruv
        //     for (let char of str) {
        //         if (vowels.includes(char)) {
        //             count++;
        //         }
        //     }
        
        //     return count;
        // }
        
        // // Test
        // console.log(countVowels("Korea")); // 3 ta
        // console.log(countVowels("my name is Sarvarbek")); // 6 ta
        // console.log(countVowels("TypeScriptda Tuzdik")); // 5 ta
        

        /* Validation:
        Frontend validation
        Backend validation
        Database validation
        */



//         L-TASK: 

// Shunday function yozing, u string qabul qilsin va string ichidagi hamma sozlarni chappasiga yozib va sozlar ketma-ketligini buzmasdan stringni qaytarsin.
// MASALAN: reverseSentence("we like coding!") return "ew ekil gnidoc";


// function reverseSentence(sentence: string): string {
//     return sentence
//         .split(' ')                // So'zlarni ajratib arrayga o'girish
//         .map(word => word.split('').reverse().join('')) // Har bir so'zni chappaga o'girish
//         .join(' ');               // Arrayni qaytadan stringga aylantirish
// }

// console.log(reverseSentence("we like coding!")); // "ew ekil gnidoc!"



// M-TASK: 

// Shunday function yozing, u raqamlardan tashkil topgan array qabul qilsin va array ichidagi har bir raqam uchun raqamni ozi va hamda osha raqamni kvadratidan tashkil topgan object hosil qilib, hosil bolgan objectlarni array ichida qaytarsin.
// MASALAN: getSquareNumbers([1, 2, 3]) return [{number: 1, square: 1}, {number: 2, square: 4}, {number: 3, square: 9}];




// function getSquareNumbers(numbers: number[]): { number: number, square: number }[] {
//     return numbers.map(num => ({
//         number: num,
//         square: num * num
//     }));
// }

// // Masalan
// const result = getSquareNumbers([1, 2, 3]);
// console.log(result); 


// N-TASK: 

// Shunday function yozing, u string qabul qilsin va string palindrom yani togri oqilganda ham, orqasidan oqilganda ham bir hil oqiladigan soz ekanligini aniqlab boolean qiymat qaytarsin.
// MASALAN: palindromCheck("dad") return true;  palindromCheck("son") return false;

// function palindromCheck(str: string): boolean {
//     // Kirilgan stringni pastki harflarga o'girish va bo'shliqlarni olib tashlash
//     const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
//     // Stringni teskari qilib o'qish
//     const reversedStr = cleanedStr.split('').reverse().join('');
    
//     // Asl string va teskari o'qilgan stringni taqqoslash
//     return cleanedStr === reversedStr;
// }

// // Misollar:
// console.log(palindromCheck("dad")); // true
// console.log(palindromCheck("son")); // false
// console.log(palindromCheck("A man a plan a canal Panama")); // true

// O-TASK:

// Shunday function yozing, u har xil valuelardan iborat array qabul qilsin va array ichidagi sonlar yigindisini hisoblab chiqqan javobni qaytarsin.
// MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]) return 45

// function calculateSumOfNumbers(arr: any[]): number {
//     return arr.reduce((sum, item) => {
//         if (typeof item === 'number') {
//             return sum + item;
//         }
//         return sum;
//     }, 0);
// }

// // Misol uchun:
// const result = calculateSumOfNumbers([10, "10", {son: 10}, true, 35]);
// console.log(result); // Natija: 45


// P-TASK:

// Shunday function yozing, u object qabul qilsin va arrayni object arrayga otkazib arrayni qaytarsin qaytarsin.
// MASALAN: objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]]

// function objectToArray(obj: { [key: string]: any }): [string, any][] {
//     return Object.entries(obj);
//   }
  
  
//   const result = objectToArray({ a: 10, b: 20 });
//   console.log(result); 


// Q-TASK:

// Shunday function yozing, u 2 ta parametrgga ega bolib birinchisi object, ikkinchisi string. Agar string parametr objectni propertysi bolsa true bolmasa false qaytarsin.
// MASALAN: hasProperty({name: "BMW", model: "M3"}, "model") return true; hasProperty({name: "BMW", model: "M3"}, "year") return false

// function hasProperty(obj: Record<string, any>, prop: string): boolean {
//     return obj.hasOwnProperty(prop);
//   }
  

//   console.log(hasProperty({ name: "BMW", model: "M3" }, "model")); // true
//   console.log(hasProperty({ name: "BMW", model: "M3" }, "year"));  // false
  


// R-TASK:

// Shunday function yozing, u string parametrga ega bolsin. String "1+2" holatda pass qilinganda string ichidagi sonlar yigindisini number holatda qaytarsin.
// MASALAN: calculate("1+3") return 4;


// function calculate(expression: string): number {
//     return eval(expression);
//   }
  
//   console.log(calculate("1+3")); // 4

// S-TASK:

// Shunday function yozing, u numberlardan tashkil topgan array qabul qilsin va osha numberlar orasidagi tushib qolgan sonni topib uni return qilsin
// MASALAN: missingNumber([3, 0, 1]) return 2


// function missingNumber(nums: number[]): number {
//     const n = nums.length;
//     const expectedSum = (n * (n + 1)) / 2;
//     const actualSum = nums.reduce((acc, curr) => acc + curr, 0);
    
//     return expectedSum - actualSum;
// }

// // 
// console.log(missingNumber([3, 0, 1])); 


// T-TASK:

// Shunday function yozing, u sonlardan tashkil topgan 2 ta array qabul qilsin va ikkala arraydagi sonlarni tartiblab bir arrayda qaytarsin
// MASALAN: mergeSortedArrays([0,3,4,31], [4,6,30]); return [0,3,4,4,6,30,31]

// function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
//     return [...arr1, ...arr2].sort((a, b) => a - b);
//   }
  
//   // Sinov
//   console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));
  

// U-TASK:      11-October 2024

// Shunday function yozing, uni number parametri bolsin va 0 dan berilgan parametrgacha bolgan oraliqdagi faqat toq sonlar nechtaligini return qilsin
// MASALAN: sumOdds(9) return 4; sumOdds(11) return 5;

// function sumOdds(number: number): number {
//     let count = 0;
//     for (let i = 1; i <= number; i += 2) {
//       count++;
//     }
//     return count;
//   }
  
//   console.log(sumOdds(9));  // 4
//   console.log(sumOdds(15)); // 8

// V-TASK:

// Shunday function yozing, uni string parametri bolsin va stringdagi harf va u harf necha marta takrorlangani sonidan tashkil topgan object qaytarsin.
// MASALAN: countChars("hello") return {h: 1, e: 1, l: 2, o: 1}

// function countChars(str: string): { [key: string]: number } {
//   const result: { [key: string]: number } = {};
  
//   for (const char of str) {
//       if (result[char]) {
//           result[char]++;
//       } else {
//           result[char] = 1;
//       }
//   }
  
//   return result;
// }

// // Misol:
// console.log(countChars("howareyou"));


// W-TASK:

// Shunday function yozing, uni array va number parametrlari bolsin. Function arrayni numberda berilgan uzunlikda kesib bolaklarga ajratilgan array holatida qaytarsin
// MASALAN: chunkArray([1,2,3,4,5,6,7,8,9,10], 3) return [[1,2,3], [4,5,6], [7,8,9], [10]]. typescriptda javob ber



// // //////////
// function chunkArray<T>(array: T[], chunkSize: number): T[][] {
//     const result: T[][] = [];
    
//     for (let i = 0; i < array.length; i += chunkSize) {
//         result.push(array.slice(i, i + chunkSize));
//     }
    
//     return result;
// }

// // Misol:
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const chunkSize = 3;

// console.log(chunkArray(array, chunkSize));
// // Natija: [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]


/* TASK X

Shunday function yozing, uni object va string parametrlari bo'lsin.
Bu function, birinchi object parametri tarkibida, kalit sifatida ikkinchi string parametri
necha marotaba takrorlanganlini sanab qaytarsin.

Eslatma => Nested object'lar ham sanalsin

MASALAN: countOccurrences({model: 'Bugatti', steer: {model: 'HANKOOK', size: 30}}, 'model') return 2

Yuqoridagi misolda, birinchi argument object, ikkinchi argument 'model'.
Funktsiya, shu ikkinchi argument 'model', birinchi argument object
tarkibida kalit sifatida 2 marotaba takrorlanganligi uchun 2 soni return qilmoqda */

// let count = 0;
// function countOccurrences(obj: any,  str: string) {
//     const arr = Object.keys(obj);
//     const newArr = arr.map((ele) => {  
//         if (ele === str) count++;   
//         if (typeof obj[ele] === "object")countOccurrences(obj[ele], str);
//         else return;
//     });

// return count;
// }

// console.log(
//     countOccurrences(
//         {model: 'Bugatti', steer: {model: 'HANKOOK', size: 30}}, 'model'
//     )
// );



// Y-TASK:

// Shunday function yozing, uni 2 ta array parapetri bolsin. Function ikkala arrayda ham ishtirok etgan qiymatlarni bir arrayda qaytarsin
// MASALAN: findIntersection([1,2,3], [3,2,0]) return [2,3]


// function findIntersection(arr1: number[], arr2: number[]): number[] {
//     // Set orqali ikkala arrayda mavjud bo'lgan qiymatlarni topamiz
//     const set1 = new Set(arr1);
//     const set2 = new Set(arr2);
  
    
//     return [...set1].filter(value => set2.has(value));
//   }
  
//   // Misol
//   const result = findIntersection([1, 2, 3], [3, 2, 0]);
//   console.log(result);

// Z-TASK:

// Shunday function yozing, u sonlardan tashkil topgan array qabul qilsin. Function arraydagi juft sonlarni yigindisini qaytarsin
// MASALAN: sumEvens([1,2,3]) return 2


// function sumEvens(numbers: number[]): number {
//     return numbers.reduce((sum, num) => num % 2 === 0 ? sum + num : sum, 0);
//   }
  
//   console.log(sumEvens([1, 2, 3])); // 2

// ZA-TASK:

// Shunday function yozing, u array ichidagi objectlarni “age” qiymati boyicha sortlab bersin. 
// MASALAN: sortByAge([{age:23}, {age:21}, {age:13}]) return [{age:13}, {age:21}, {age:23}]

// type Person = { age: number };

// function sortByAge(arr: Person[]): Person[] {
//   return arr.sort((a, b) => a.age - b.age);
// }

// // namuna
// const sortedArray = sortByAge([{ age: 23 }, { age: 21 }, { age: 13 }]);
// console.log(sortedArray); 


// ZB-TASK:

// Shunday function yozing, uni 2 ta number parametri bolsin va berilgan sonlar orasidan random raqam return qilsin
// MASALAN: randomBetween(30, 50) return 45

// function randomBetween(min: number, max: number): number {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// // Misol:
// console.log(randomBetween(30, 50));

// TASK ZC

// Selisy (°C) shkalasi bo'yicha raqam qabul qilib, uni
// Ferenhayt (°F) shkalisaga o'zgaritib beradigan function yozing.

// MASALAN: celsiusToFahrenheit(0) return 32;
// MASALAN: celsiusToFahrenheit(10) return 50;

// Yuqoridagi misolda, 0°C, 32°F'ga teng.
// Yoki 10 gradus Selsiy, 50 Farenhaytga teng.

// °C va °F => Tempraturani o'lchashda ishlatiladigan o'lchov birligi.

// function celsiusToFahrenheit(celsius: number): number {
//   return (celsius * 9/5) + 32;
// }

// // Misollar
// console.log(celsiusToFahrenheit(0));  // 32
// console.log(celsiusToFahrenheit(10)); // 50

// TASK ZD

// Shunday function yozing. Bu function o'ziga, parametr sifatida
// birinchi oddiy number, keyin yagona array va uchinchi bo'lib oddiy number
// qabul qilsin. Berilgan birinchi number parametr, arrayning tarkibida indeks bo'yicha hisoblanib,
// shu aniqlangan indeksni uchinchi number parametr bilan alashtirib, natija sifatida
// yangilangan arrayni qaytarsin.

// MASALAN: changeNumberInArray(1, [1,3,7,2], 2) return [1,2,7,2];

// Yuqoridagi misolda, birinchi raqam bu '1' va arrayning '1'chi indeksi bu 3.
// Bizning function uchinchi berilgan '2' raqamini shu '3' bilan almashtirib,
// yangilangan arrayni qaytarmoqda.  

// function changeNumberInArray(index: number, arr: number[], newValue: number): number[] {
//   // Yangi arrayni yaratamiz va berilgan indexdagi qiymatni yangilaymiz
//   const updatedArray = [...arr]; // arrayni nusxa olish
//   updatedArray[index] = newValue; // berilgan indexdagi qiymatni almashtirish
//   return updatedArray;
// }

// // Misol
// console.log(changeNumberInArray(1, [1, 3, 7, 2], 2)); // [1, 2, 7, 2]

// ZE-TASK:

// Shunday function yozing, uni  string parametri bolsin. String ichida takrorlangan harflarni olib tashlab qolganini qaytarsin
// MASALAN: removeDuplicate('stringg') return 'string'

// function removeDuplicate(input: string): string {
//   let result = '';
//   for (let char of input) {
//       if (!result.includes(char)) {
//           result += char;
//       }
//   }
//   return result;
// }

// console.log(removeDuplicate('stringg')); // 'string'

// TASK ZG

// String sifatida berilgan string parametrni
// snake case'ga o'tkazib beradigan function yozing.

// MASALAN: convertToSnakeCase('name should be a string')
// return 'name_should_be_a_string'


// function convertToSnakeCase(input: string): string {
//     return input
//         .replace(/\s+/g, '_')      // Bo'shliqlarni underscore bilan almashtiramiz
//         .toLowerCase();            // Hammasini kichik harflarga o'tkazamiz
// }

// // Misol:
// console.log(convertToSnakeCase('name should be a string'));  // 'name_should_be_a_string'



// ZH-TASK:

// Shunday function yozing, u berilgan array parametrni ichidagi eng katta raqamgacha tushib qolgan raqamlarni bir arrayda qaytarsin. 
// MASALAN: findDisappearedNumbers([1, 3, 4, 7]) return [2, 5, 6]


// function findDisappearedNumbers(nums: number[]): number[] {
//     const n = nums.length;
//     const result: number[] = [];
    
//     // 1. Berilgan arrayda har bir elementni belgilaymiz
//     // Masalan, index-based approach ishlatamiz
//     for (let i = 0; i < n; i++) {
//         const num = Math.abs(nums[i]) - 1; // Num ni ixtiyoriy raqamga moslashtiramiz
//         if (nums[num] > 0) {
//             nums[num] = -nums[num]; // O'sha indexni manfiy qilyapmiz, bu elementni ko'rilgan qilib belgilaymiz
//         }
//     }

//     // 2. Endi manfiy bo'lmagan indexlarni qidiramiz, bu indexlardagi sonlar yo'qolgan bo'ladi
//     for (let i = 0; i < n; i++) {
//         if (nums[i] > 0) {
//             result.push(i + 1); // Yo'qolgan raqamlarni natijaga qo'shamiz
//         }
//     }

//     return result;
// }

// // Misol ishlatish
// console.log(findDisappearedNumbers([1, 3, 4, 7])); // [2, 5, 6]

// function delayHelloWorld(message: string): Promise<string> {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(message);
//         }, 3000); // 3 soniya kechikish
//     });
// }

// // Funksiyani ishlatish
// delayHelloWorld("Hello World").then((result) => {
//     console.log(result); // 3 soniyadan keyin "Hello World" ni chop etadi
// });


// ZJ-TASK:

// Shunday function yozing, u berilgan arrayni ichidagi numberlarni qiymatini hisoblab qaytarsin.
// MASALAN: reduceNestedArray([1, [1, 2, [4]]]) return 8



// function reduceNestedArray(arr: any[]): number {
//     return arr.reduce((sum, value) => {
//       if (Array.isArray(value)) {
//         // Agar qiymat array bo'lsa, rekursiya chaqiramiz
//         return sum + reduceNestedArray(value);
//       } else if (typeof value === 'number') {
//         // Agar qiymat number bo'lsa, uni yig'indiga qo'shamiz
//         return sum + value;
//       }
 
//       return sum;
//     }, 0);
//   }
  

//   const result = reduceNestedArray([1, [1, 2, [4]]]);
//   console.log(result); // 8


// TASK ZK:

// Shunday function yozing, bu function har bir soniyada bir marotaba
// console'ga 1'dan 5'gacha bo'lgan raqamlarni chop etsin va
// 5 soniyadan so'ng function o'z ishini to'xtatsin
  
// MASALAN: printNumbers();    typescriptda qilib ber

// function printNumbers(): void {
//   let currentNumber = 1; // 1'dan boshlab raqamlarni chop qilish uchun

//   const intervalId = setInterval(() => {
//     console.log(currentNumber); // Hozirgi raqamni chop etamiz
//     currentNumber++; // Keyingi raqamga o'tamiz

//     if (currentNumber > 5) {
//       clearInterval(intervalId); // 5'dan keyin intervalni to'xtatamiz
//     }
//   }, 1000); // Har bir soniyada bir marta ishlaydi
// }

// // Funksiyani ishga tushiramiz
// printNumbers();

// ZL-TASK:

// Shunday function yozing, u parametrda berilgan stringni kebab casega otkazib qaytarsin. Bosh harflarni kichik harflarga ham otkazsin.
// MASALAN: stringToKebab(“I love Kebab”) return “i-love-kebab”

// function stringToKebab(input: string): string {
//   return input
//     .toLowerCase() 
//     .replace(/\s+/g, '-') // Bo'sh joylarni "-" bilan almashtiramiz
//     .trim(); 
// }

// console.log(stringToKebab("I love Kebab")); 


// ZM-TASK:

// Shunday function yozing, uni array va number parametri bolsin. Ikkinchi parametrda berilgan raqamli indexgacha arrayni orqasiga ogirib qaytarsin.
// MASALAN: rotateArray([1, 2, 3, 4, 5, 6], 3) return [5, 6, 1, 2, 3, 4]

// ANSWERS

// function rotateArray(arr: any[], index: number): any[] {
//   // Arrayni ikkiga bo'lib, orqa qismini oldiga olib kelamiz
//   const part1 = arr.slice(-index); // Arrayning oxiridan indexcha qismi
//   const part2 = arr.slice(0, arr.length - index); // Arrayning qolgan qismi
//   return part1.concat(part2); // Ikkisini birlashtirish
// }

// // Misol:
// const result = rotateArray([1, 2, 3, 4, 5, 6], 3);
// console.log(result); 


// ZN-TASK:

// Shunday function yozing, u parametrdagi string ichidagi qavslar miqdori balansda ekanligini aniqlasin. Ya'ni ochish("(") va yopish(")") qavslar soni bir xil bolishi kerak.
// MASALAN: areParenthesesBalanced("string()ichida(qavslar)soni()balansda") return true

// @MITASK

// function areParenthesesBalanced(input: string): boolean {
//   let balance = 0;

//   for (const char of input) {
//       if (char === "(") {
//           balance++;
//       } else if (char === ")") {
//           balance--;
//       }

//       // Agar balans manfiy bo'lsa, qavslar noto'g'ri joylashgan
//       if (balance < 0) {
//           return false;
//       }
//   }

//   // Balans oxirida 0 bo'lishi kerak
//   return balance === 0;
// }

// // Test
// console.log(areParenthesesBalanced("string()ichida(qavslar)soni()balansda")); // true
// console.log(areParenthesesBalanced("(bu qavslar noto'g'ri")); // false
// console.log(areParenthesesBalanced("bu ham) noto'g'ri(")); // false
// console.log(areParenthesesBalanced("()()()")); // true


// ZO-TASK:

// Shunday function yozing, u parametridagi string ichidagi raqam va sonlarni sonini sanasin.
// MASALAN: countNumberAndLetters(“string152%\¥”) return {number:3, letter:6}

// function countNumbersAndLetters(input: string): { number: number; letter: number } {
//     let numbers = 0;
//     let letters = 0;

//     for (const char of input) {
//         if (/[0-9]/.test(char)) {
//             numbers++;
//         } else if (/[a-zA-Z]/.test(char)) {
//             letters++;
//         }
//     }

//     return { number: numbers, letter: letters };
// }

// // Test qilish
// const result = countNumbersAndLetters("string152%¥");
// console.log(result); // { number: 3, letter: 6 }

// ZP-TASK:

// Shunday function yozing, u parametridagi array ichida 2 marta qaytarilgan sonlarni alohida araryda qaytarsin.
// MASALAN: findDuplicates([1,2,3,4,5,4,3,4]) return [3, 4]


// function findDuplicates(arr: number[]): number[] {
//     const frequencyMap: { [key: number]: number } = {};
//     const result: number[] = [];

//     // Array ichidagi sonlar takrorlanishlarini sanash
//     for (const num of arr) {
//         frequencyMap[num] = (frequencyMap[num] || 0) + 1;
//     }

//     // Faqat 2 marta takrorlangan sonlarni result array'ga qo'shish
//     for (const [key, value] of Object.entries(frequencyMap)) {
//         if (value === 2) {
//             result.push(Number(key));
//         }
//     }

//     return result;
// }

// const result = findDuplicates([1, 2, 3, 4, 5, 4, 3, 4]);
// console.log(result); 


// ZQ-TASK:

// Shunday function yozing, u parametridagi arrayni ichidagi 1 marta kelgan elemnetni qaytarsin.
// MASALAN: singleNumber([4, 2, 1, 2, 1]) return 4


// function singleNumber(nums: number[]): number {
//     const frequencyMap = new Map<number, number>();
//     for (const num of nums) {
//         frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
//     }
//     // Map orqali yurib, faqat 1 marta kelgan elementni qaytaramiz
//     for (const [key, value] of frequencyMap.entries()) {
//         if (value === 1) {
//             return key;
//         }
//     }
//     throw new Error("No unique element found");
// }
// // Misol:
// console.log(singleNumber([4, 2, 1, 2, 1])); // return 4


// ZR-TASK:

// Shunday function yozing, u parametridagi string ichida 1 martadan ortiq qaytarilmagan birinchi harf indeksini qaytarsin.
// MASALAN: firstUniqueCharIndex(“stamp”) return 0

// @MITASK

// function firstUniqueCharIndex(str: string): number {
//     const charCount: Record<string, number> = {};

//     // 1-qadam: Har bir belgi uchun takrorlanish sonini hisoblash
//     for (const char of str) {
//         charCount[char] = (charCount[char] || 0) + 1;
//     }

//     // 2-qadam: Qayta o‘tib, birinchi unikal belgining indeksini topish
//     for (let i = 0; i < str.length; i++) {
//         if (charCount[str[i]] === 1) {
//             return i; // Birinchi unikal belgi topildi
//         }
//     }

//     return -1; 
// }

// // Misollar
// console.log(firstUniqueCharIndex("stamp")); // 0
// console.log(firstUniqueCharIndex("programming")); // 4

// ZS-TASK:

// Shunday function yozing, u parametridagi array ichida takrorlanmagan raqamlar yig'indisini qaytarsin.
// MASALAN: sumOfUnique([1,2,3,2]) return 4

// function sumOfUnique(nums: number[]): number {
//     const numCounts: Record<number, number> = {}; 

  
//     for (const num of nums) {
//         numCounts[num] = (numCounts[num] || 0) + 1;
//     }


//     let sum = 0;
//     for (const [num, count] of Object.entries(numCounts)) {
//         if (count === 1) {
//             sum += Number(num); 
//         }
//     }

//     return sum;
// }
// console.log(sumOfUnique([1, 2, 3, 2])); 
// console.log(sumOfUnique([4, 5, 6, 4, 7])); 
// console.log(sumOfUnique([1, 1, 1, 1])); 


// ZT-TASK:


// Shunday function yozing, u parametridagi array ichidagi barcha nollarni array oxiriga qoyib qolgan raqamlar ketma-ketligini saqlasin.
// MASALAN: moveZeroes([0, 1, 0, 3, 12]) return [1, 3, 12, 0, 0] 

// @MITASK

// function moveZeroes(nums: number[]): number[] {
//     let nonZeroIndex = 0;


//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] !== 0) {
//             nums[nonZeroIndex] = nums[i];
//             nonZeroIndex++;
//         }
//     }

//     for (let i = nonZeroIndex; i < nums.length; i++) {
//         nums[i] = 0;
//     }

//     return nums;
// }

// console.log(moveZeroes([0, 1, 0, 3, 12])); // [1, 3, 12, 0, 0]








// ZU-TASK:

// Shunday function yozing, uni 2 ta parametri bo'lsin, biri array va biri string. Function arrayda berilgan malumotlarni 2-parametrdagi string qiymati asosida guruhlab qaytarsin.
// MASALAN:
// const data = [
//   { name: 'Alice', age: 25, city: 'London' },
//   { name: 'Bob',   age: 30, city: 'New York' },
//   { name: 'Charlie', age: 25, city: 'London' },
// ];
// console.log(groupBy(data, 'city')); // { 'London': [ { name: 'Alice', age: 25, city: 'London' }, { name: 'Charlie', age: 25, city: 'London' } ], 'New York': [ { name: 'Bob', age: 30, city: 'New York' } ] }



type GroupedData<T> = {
    [key: string]: T[];
  };
  
  function groupBy<T>(array: T[], key: keyof T): GroupedData<T> {
    return array.reduce((result, item) => {
      const groupKey = item[key] as unknown as string; 
      if (!result[groupKey]) {
        result[groupKey] = []; 
      }
      result[groupKey].push(item); 
      return result;
    }, {} as GroupedData<T>);
  }
  
  // Misol uchun ishlatish:
  const data = [
    { name: 'Alice', age: 25, city: 'London' },
    { name: 'Bob', age: 30, city: 'New York' },
    { name: 'Charlie', age: 25, city: 'London' },
  ];
  
  console.log(groupBy(data, 'city'));
  