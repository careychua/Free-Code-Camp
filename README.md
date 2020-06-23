# Free Code Camp Project
## Front End Libraries: JavaScript Calculator

![JavaScript Calculator gif](calculator/README/calculator.gif)

---

## [Project Requirements](https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-javascript-calculator)

1. The calculator should contain a clickable element containing an `=` (equal sign) with a corresponding `id="equals"`.
2. The calculator should contain 10 clickable elements containing one number each from 0-9, with the following corresponding IDs: `id="zero"`, `id="one"`, `id="two"`, `id="three"`, `id="four"`, `id="five"`, `id="six"`, `id="seven"`, `id="eight"`, and `id="nine"`.
3. The calculator should contain 4 clickable elements each containing one of the 4 primary mathematical operators with the following corresponding IDs: `id="add"`, `id="subtract"`, `id="multiply"`, `id="divide"`.
4. The calculator should contain a clickable element containing a `.` (decimal point) symbol with a corresponding `id="decimal"`.
5. The calculator should contain a clickable element with an `id="clear"`.
6. My calculator should contain an element to display values with a corresponding `id="display"`.
7. At any time, pressing the clear button clears the input and output values, and returns the calculator to its initialized state; 0 should be shown in the element with the id of `display`.
8. As numbers are being input, there should be an element with the id of `display` to see the input.
9. In any order, it should be able to add, subtract, multiply and divide a chain of numbers of any length, and when hit `=`, the correct result should be shown in the element with the id of `display`.
10. When inputting numbers, the calculator should not allow a number to begin with multiple zeros.
11. When the decimal element is clicked, a `.` should append to the currently displayed value; two `.` in one number should not be accepted.
12. It should be able to perform any operation (+, -, *, /) on numbers containing decimal points.
13. If 2 or more operators are entered consecutively, the operation performed should be the last operator entered (excluding the negative (-) sign). For example, if 5 + * 7 = is entered, the result should be 35 (i.e. 5 * 7); if `5 * - 5 =` is entered, the result should be `-25` (i.e. 5 x (-5)).
14. Pressing an operator immediately following `=` should start a new calculation that operates on the result of the previous evaluation.
15. The calculator should have several decimal places of precision when it comes to rounding (note that there is no exact standard, but you should be able to handle calculations like 2 / 7 with reasonable precision to at least 4 decimal places).

---

### Additional notes
In terminal:
1. Navigate to `calculator`
2. ```sass``` should be installed
3. Run to reflect changes to scss:
    `sass src/css/styles.scss css/styles.css`

---