// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest
// Please read all questions thoroughly
// --------------------1) Create a function that takes in a wordCrypto and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.
// Pseudo code:
// input: string 
// transformations: takes the string and 
// if there is an 'a' it changes it to 4, 
// if there is an 'e' that will change to 3
// if there is an 'i' change to 1
// and if there is an 'o' changes that to 0
// Output: will be a string but without any a, e,i,o characters instead will have numbers in place of those
// also will expect that no other characters are altered, and need to take into account capital letters by making them lowercase 
// a) Create a test with expect statements using the variables provided.
describe("wordCrypto", () => {
    it("returns a string letters a, e, i, o converted to numbers",  () => {
         const secretCodeWord1 = "Lackadaisical";
         const secretCodeWord2 = "Gobbledygook";
         const secretCodeWord3 = "Eccentric";       
        expect(wordCrypto(secretCodeWord1)).toEqual( "L4ck4d41s1c4l");
        expect(wordCrypto(secretCodeWord2)).toEqual( "G0bbl3dyg00k");
        expect(wordCrypto(secretCodeWord3)).toEqual( "3cc3ntr1c");
       
    });
  });
// Expected output: "L4ck4d41s1c4l"
// Expected output: "G0bbl3dyg00k"
// Expected output: "3cc3ntr1c"
// FAIL  ./code-challenges.test.js
// b) Create the function that makes the test pass.
// // This one below removed the a but how do I add more conditions? to remove other letters? 
//need if and else if ??
// const wordCrypto = (str) => {
//     let newStr= str.replace(/a/gi,4)
//     return newStr
// }
// wordCrypto('Lackadaisical')

// 'L4ck4d4isic4l'
//more Psuedo: function takes in a string, 
//Declare variable newStr and replace regex.the g= global i=case insensitive. I didn't know you could chain them up like this, but there has to be a way to get this done without repeating. Is there a way to do it without .replace 4 times?
//

//
const wordCrypto = (str) => {
   let newStr = str.replace(/a/gi, 4).replace(/i/gi, 1).replace(/e/gi, 3).replace(/o/gi, 0)
        return newStr
    } 
    // PASS  ./code-challenges.test.js


// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.
// Pseudo code 
// input: an array of words and a single letter 
// transformations: will take the words and if they match the letter return them
// output: an array of words that match the letter 
// a) Create a test with expects statement using the variable provided.
describe("fruitsOfLabor", () => {
        const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
        const letterA = "a";
        const letterE = "e";
    it("returns an array of all the words containing that particular letter", () => {
          expect(fruitsOfLabor(fruitArray,letterA )).toEqual(["Mango", "Apricot", "Peach"]);
          expect(fruitsOfLabor(fruitArray,letterE )).toEqual(["Cherry", "Blueberry", "Peach"])      
        });
      });
    //   FAIL  ./code-challenges.test.js
// Expected output: ["Mango", "Apricot", "Peach"]
// Expected output: ["Cherry", "Blueberry", "Peach"]
// b) Create the function that makes the test pass.
//
// const fruitsOfLabor = (array, str) => { //function that takes in two args the array and the string
//     let fruits = []                        //declare empty array 
//     for(let i = 0; i < array.length; i++){
//         if(array[i].toLowerCase().includes(str)){
//             fruits.push(array[i])            //if cond met push into fruits variable
//         }
//     }
//     return fruits  
// }
//HOF method, takes array and str as args. return them filtered , lowercase the array and if it matches the str then return it//refactor
const fruitsOfLabor = (array, str) => {
  return array.filter((array) => array.toLowerCase().includes(str))
}
// Pass

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.
// Pseudo Code:
// Input: an array of five numbers 
// Transformations:determine if there is 3 of a kind and two of any kind aka full house
// check for three of the same of any digit and check for two of the same of any digit
//loop thru the array if you have three matches and two matches you win 
// define a pair and 
// define three of a kind 
// if arrays has pair and three.. boom you win
// Output: a wordCrypto that says full house or not
//
// a) Create a test with expect statements using the variable provided.
//FAIL  ./code-challenges.test.js
describe("fullHouse", () => {
    it("takes in an array of 5 numbers and determines whether or not the array is a full house", () => {
        const hand1 = [5, 5, 5, 3, 3]
        const hand2 = [5, 5, 3, 3, 4]
        const hand3 = [5, 5, 5, 5, 4]
        const hand4 = [7, 2, 7, 2, 7]
        expect(fullHouse(hand1)).toEqual("true");
        expect(fullHouse(hand2)).toEqual("false");
        expect(fullHouse(hand3)).toEqual("false");
        expect(fullHouse(hand4)).toEqual("true");
    });
  });
//  b) Create the function that makes the test pass.
 const fullHouse = (array) =>{
  let  newVar = array.sort()                                  //sort the array and store in new variable
  for(i = 0; i < array.length; i++)                           //for loop iterates thru sorted array
  if(newVar[0] == newVar[1] && newVar[0] == newVar[2] && newVar[3] == newVar[4]){        //check to see if first 3 match and last two match 
    return "true"
  } else if (newVar[0] == newVar[1] && newVar[4] == newVar[3] && newVar[2] == newVar[3]){    //another check to see if first two match and last three match 
    return "true"
  } else {                                                    //if the two conditions above not met return false
    return "false" 
  }
}

// Expected output: true
// Expected output: false
// Expected output: false
// Expected output: true