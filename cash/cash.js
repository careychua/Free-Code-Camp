let CURRARR = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100]
  ];

  let STATUS = {
      more: "OPEN",
      equal: "CLOSED",
      less: "INSUFFICIENT_FUNDS"
    };
  
  
  function checkCashRegister(price, cash, cid) {
    var change = cash - price;
    let returnVal = {
        status: "",
        change: []
    };
    returnVal.status = checkStatus(change, cid);
    
    if (returnVal.status == STATUS.less) {
        return returnVal;
    } else if (returnVal.status == STATUS.equal) {
        returnVal.change = cid;
        return returnVal;
    }

    let currArr = CURRARR.filter(item => change / item[1] >= 1).reverse();
    change = currArr.reduce((change, item) => {
      let itemArr = cid.filter(val => val.indexOf(item[0]) > -1)[0];
      let curr = item[0];
      let currVal = parseFloat(item[1].toFixed(2));

      if (itemArr && change >= currVal) {
        let currChangeVal = 0;
        let currArr = [];
        let numChange = Math.floor(change / currVal);
        let numCid = Math.floor(itemArr[1] / currVal);

        if (numCid != 0) {
            if (numCid > numChange) {
                currChangeVal = currVal * numChange;
            }
            else {
                currChangeVal = currVal * numCid;
            }

            change -= currChangeVal;
            currArr.push(curr);
            currArr.push(currChangeVal);
            returnVal.change.push(currArr);
        }
      }
      return parseFloat(change.toFixed(2));
    }, change);

    if (change != 0) {
        returnVal.status = STATUS.less;
        returnVal.change = [];
    }

    return returnVal;
  }

  function checkStatus(change, cid) {

        let cidTotal = cid.reduce((sum, item) => {
            sum += (parseFloat(item[1].toFixed(2)));
            return parseFloat(sum.toFixed(2));
        }, 0);

        switch(true) {
            case (cidTotal > change):
                return STATUS.more;
                
            case (cidTotal == change):
                return STATUS.equal;
            
            case (cidTotal < change):
                return STATUS.less;
        }
  }
  