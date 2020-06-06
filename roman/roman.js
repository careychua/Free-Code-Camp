function convertToRoman(num) {
    let strArr = num.toString().split("");
    let count = 0;
    let str = "";
    
    let convertArr = [
      { 1: 'I', 4: 'IV', 5: 'V', 9: 'IX' }, 
      { 1: 'X', 4: 'XL', 5: 'L', 9: 'XC' },
      { 1: 'C', 4: 'CD', 5: 'D', 9: 'CM' },
      { 1: 'M' }
      ];
  
      for (let i = strArr.length - 1; i >= 0; i--) {
        str = convertNum(strArr[i], convertArr[count]) + str;
  
        count++;
      }
    
    console.log("return:", str);
   return str;
  }
  
  
  function convertNum(str, convertSet) {
    let num = parseInt(str);
    let div5 = Math.floor(num / 5);
    let mod5 = num % 5;
    let temp = "";
    console.log(div5, mod5);
    if (mod5 < 4 && mod5 > 0) {
      for (let i = 0; i < mod5; i ++) {
        temp += convertSet[1];
      }
  
      if (div5 > 0) {
        temp = convertSet[5] + temp;
      }
    }
    else if (num) {
      temp = convertSet[num];
    }
  
    console.log("   temp:", temp);
    return temp;
  }
  