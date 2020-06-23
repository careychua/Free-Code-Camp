const EMPTY_STR = '';
const EMPTY_ARR = [];
const CALCULATOR = 'calculator';
const DISPLAY = 'display';
const TEXT = 'text';
const INPUT = 'input';
const FLOAT = 'float';
const MAX_DIGITS = 16;
const STR_MAX = 'DIGIT LIMIT MET'

/*  */
const CLEAR = 'clear'
const DELETE = 'delete'
const OPERATOR = 'operator'
const SUBTRACT = 'subtract'
const EQUALS = 'equals';
const DECIMAL = 'decimal'
const STR_DECIMAL = '.';
const NUMBER = 'number';
const STR_0 = '0';
const STR_DIVIDE = '/';
const STR_MULTIPLY = 'x';
const STR_ADD ='+';
const STR_SUBTRACT = '-';

/*  */
const calculatorLayout = [ 
    [], // 0: Empty Object
    [   // 1: Row 1
        {},
        {
            id: 'clear',
            text: 'AC',
            class: 'clear'
        }, 
        {
            id: 'delete',
            text: 'Del',
            class: 'delete'    
        },
        {
            id: 'divide',
            text: '/',
            class: 'operator'    
        },
        {
            id: 'multiply',
            text: 'x',
            class: 'operator'    
        }
    ],
    [   // 2: Row 2
        {},
        {
            id: 'seven',
            text: '7',
            class: 'number'    
        }, 
        {
            id: 'eight',
            text: '8',
            class: 'number'    
        },
        {
            id: 'nine',
            text: '9',
            class: 'number'    
        },
        {
            id: 'subtract',
            text: '-',
            class: 'operator'    
        }
    ],
    [   // 3: Row 3
        {},
        {
            id: 'four',
            text: '4',
            class: 'number'    
        }, 
        {
            id: 'five',
            text: '5',
            class: 'number'    
        },
        {
            id: 'six',
            text: '6',
            class: 'number'    
        },
        {
            id: 'add',
            text: '+',
            class: 'operator'    
        }
    ],
    [   // 4: Row 4
        {},
        {
            id: 'one',
            text: '1',
            class: 'number'    
        }, 
        {
            id: 'two',
            text: '2',
            class: 'number'    
        },
        {
            id: 'three',
            text: '3',
            class: 'number'    
        },
        {
            id: 'equals',
            text: '=',
            class: 'equals'    
        }
    ],
    [   // 5: Row 5
        {},
        {
            id: 'zero',
            text: '0',
            class: 'number'    
        },
        {},
        {
            id: 'decimal',
            text: '.',
            class: 'decimal'    
        }, 
        {}
        
    ]
]

/*  */
let calculator = {};
calculatorLayout.map(item => {
    item.map(element => {
        if (!jQuery.isEmptyObject(element)) {
            calculator[element.id] = {
                text: element.text,
                class: element.class
            };
        }                
    });
});
console.log("calculator", calculator);


