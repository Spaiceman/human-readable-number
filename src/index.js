module.exports = function toReadable (number) {
      let numbs1= ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
      let numbs2= ["ten","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];

      if (number < 20) return numbs1[number];
      if (number >= 20 && number < 100) {
      if (number % 10 === 0) return numbs2[number / 10];
      else return `${numbs2[Math.floor(number / 10)]} ${numbs1[number % 10]}`; 
}
      if (number >= 100  && number < 1000) {
        if (number % 100 === 0) return `${numbs1[number / 100]} hundred`;
        else if 
        (number % 10 === 0) return `${numbs1[Math.floor(number / 100)]} hundred ${numbs2[(Math.floor(number / 10)) % 10]}`;
        else if 
        (number % 100 < 20) return `${numbs1[Math.floor(number / 100)]} hundred ${numbs1[number % 100]}`;
        else return `${numbs1[Math.floor(number / 100)]} hundred ${numbs2[Math.floor(number / 10) % 10]} ${numbs1[number % 10]}`;
    }
}