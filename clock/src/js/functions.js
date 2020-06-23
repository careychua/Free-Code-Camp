function capitalise(string) {
    console.log("capitalise...", string);
    let arr = string.split(SPACE);
    console.log("   arr:", arr);
    let regex = /[a-z]/;
    let newArr = arr.map(item => {
        console.log("       item:", item, item.substring(0, 1));
        let newString = item.replace(regex, item.substring(0, 1).toUpperCase());
        return newString;
    });
    let newString = newArr.join(SPACE);
    console.log("   newString:", newString);

    return newString;
}