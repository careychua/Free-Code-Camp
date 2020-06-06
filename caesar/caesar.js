function rot13(str) {
    let regex = /[a-z]+/ig;
    let arr = str.match(regex);
    let newStr = str;

    let temp = arr.map(item => {
        newStr = newStr.replace(item, decode(item));
    });
    return newStr;
}

function decode(str) {
    let arr = str.split("");
    arr = arr.map(item => {
        let charCode = item.charCodeAt(0);

        if (charCode < 78) {
            charCode += 26;
        } 
        
        charCode -= 13;
        let newStr =String.fromCharCode(charCode);

        return newStr;
    });
    return arr.join("");
}