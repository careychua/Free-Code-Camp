function palindrome(str) {
    let regex = /[a-z0-9]+/ig;
    let newStr = str.match(regex).join("").toLowerCase().split("");
    let revStr = [];
    let temp = newStr.map(item => {
        revStr.unshift(item);
    });
    if (newStr.join("") == revStr.join("")) {
        return true;
    }
    else {
        return false;
    }    
}