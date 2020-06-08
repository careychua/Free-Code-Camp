# Projects from Free Code Camp
## JavaScript: Cash Register

---

## [Project Requirements](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register)
1. Design a cash register drawer function ```checkCashRegister()``` that accepts purchase price as the first argument (```price```), payment as the second argument (```cash```), and cash-in-drawer (```cid```) as the third argument.

2. ```cid``` is a 2D array listing available currency.

3. The ```checkCashRegister()``` function should always return an object with a ```status``` key and a ```change``` key.

4. Return ```{status: "INSUFFICIENT_FUNDS", change: []}``` if cash-in-drawer is less than the change due, or if you cannot return the exact change.

5. Return ```{status: "CLOSED", change: [...]}``` with cash-in-drawer as the value for the key change if it is equal to the change due.

6. Otherwise, return ```{status: "OPEN", change: [...]}```, with the change due in coins and bills, sorted in highest to lowest order, as the value of the ```change``` key.

---
