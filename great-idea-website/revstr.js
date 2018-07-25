function reverseString(str) {
    return str.split('').reverse().join('');
}
let revstr = reverseString('billy');
console.log(revstr);
let revjim = reverseString('Jim');
console.log(revjim);