const CALCULATOR = 'calculator';
const DISPLAY = 'display';
const TEXT = 'text';
const INPUT = 'input';

const calculatorLayout = [ 
    [], // 0: Empty Object
    [   // 1: Row 1
        {},
        {
            id: 'clear',
            text: 'AC' 
        }, 
        {
            id: 'delete',
            text: 'Del'    
        },
        {
            id: 'divide',
            text: '/'    
        },
        {
            id: 'multiply',
            text: 'x'    
        }
    ],
    [   // 2: Row 2
        {},
        {
            id: 'seven',
            text: '7'    
        }, 
        {
            id: 'eight',
            text: '8'    
        },
        {
            id: 'nine',
            text: '9'    
        },
        {
            id: 'subtract',
            text: '-'    
        }
    ],
    [   // 3: Row 3
        {},
        {
            id: 'four',
            text: '4'    
        }, 
        {
            id: 'five',
            text: '5'    
        },
        {
            id: 'six',
            text: '6'    
        },
        {
            id: 'add',
            text: '+'    
        }
    ],
    [   // 4: Row 4
        {},
        {
            id: 'one',
            text: '1'    
        }, 
        {
            id: 'two',
            text: '2'    
        },
        {
            id: 'three',
            text: '3'    
        },
        {
            id: 'equals',
            text: '='    
        }
    ],
    [   // 5: Row 5
        {},
        {
            id: 'zero',
            text: '0'    
        },
        {},
        {
            id: 'decimal',
            text: '.'    
        }, 
        {}
        
    ]
]

const classes = [
    {
        regex: /[\d.]/,
        class: 'number'
    },
    {
        regex: /AC/,
        class: 'clear'
    },
    {
        regex: /Del/,
        class: 'delete'
    },
    {
        regex: /\+|-|x|\//,
        class: 'operator'
    }
    ,
    {
        regex: /=/,
        class: 'equals'
    }
];