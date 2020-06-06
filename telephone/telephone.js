function telephoneCheck(str) {
    let regexLength = /\d/g;
    let arrLength = str.match(regexLength);

    if (arrLength.length > 10) {
      if (arrLength[0] != '1') {
        return false;
      }
    }

    let regexFormat = /^([1][ ]*|[]{0})(\(\d{3}\)|\d{3})[ -]*\d{3}[ -]*\d{4}/g;
    let check = regexFormat.test(str);
    return check;
}