function getClass(char) {
    let val = "";
    for (let [key, value] of Object.entries(calculator)) {
        if (value.text == char) {
            val = value.class;
            break;
        }
    }
    return val;
}

function computeResult(arr) {
    let result = parseNumbers(arr);
    result = computeDivideAndMultipy(result);
    result = computeAddAndSubtract(result);
    return result;
}

function computeAddAndSubtract(arr) {
    let result = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == STR_ADD && (arr[i + 1])) {
            result += arr[i + 1];
            i++;
        }
        else if (arr[i] == STR_SUBTRACT && (arr[i + 1])) {
            result -= arr[i + 1];
            i++;
        }
    }

    return result;
}

function computeDivideAndMultipy(arr) {
    let resultArr = [];

    for (let i = 0; i < arr.length; i++) {
        let result = null;
        if (arr[i + 1] == STR_DIVIDE && (arr[i + 2])) {
            result = arr[i] / arr[i + 2];
            i += 2;
        }
        else if (arr[i + 1] == STR_MULTIPLY && (arr[i + 2])) {
            result = arr[i] * arr[i + 2];
            i += 2;
        }
        else {
            result = arr[i];
        }
        resultArr.push(result);
    }

    resultArr = resultArr.filter(item => item != null);

    return resultArr;
}

function parseNumbers(arr) {
    let resultArr = arr.map(item => {
        let value = null;
        item.class == NUMBER ? value = parseInt(item.text) :
        item.class == FLOAT ? value = parseFloat(item.text) :
        value = item.text;
        return value;
    });

    return resultArr;
}


            