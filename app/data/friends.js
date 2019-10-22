console.log("Working");

//웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟

let questions = [
    "Who?",
    "What?",
    "When?",
    "Where?",
    "Why?",
    "Which",
    "How",
];

let friends = [
    { //OBJECT 0
        name: 'Finn Bálor',
        photo: '',
        scores: [
            1,
            2,
            3,
            4,
            5,
            1,
            2,
        ]
    },
    { //OBJECT 1
        name: 'Shinsuke Nakamura',
        photo: '',
        scores: [
            5,
            4,
            3,
            2,
            1,
            5,
            4,
        ]
    },
    { //OBJECT 2
        name: 'Enzo Amore',
        photo: '',
        scores: [
            3,
            2,
            1,
            2,
            3,
            4,
            5,
        ]
    },
    {
        name: '"The Fiend" Bray Wyatt',
        photo: '',
        scores: [
            5,
            5,
            5,
            5,
            5,
            5,
            5,
        ]
    }
];

//웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟
let array1 = [1, 4, 3, 4, 5];
let array2 = [5, 4, 2, 2, 1];

function calcDifference(arr1, arr2) {
    let arr = [];
    for (var i = 0; i < arr1.length; i++) {
        if ((arr1[i] - arr2[i]) < 0) {
            arr.push((arr1[i] - arr2[i]) * -1);
        } else {
            arr.push(arr1[i] - arr2[i])            
        }
    }
    let sum = arr.reduce(function(passedIn, value){
        return passedIn + value;
    }, 0);
    console.log(sum);
    return sum;
};

calcDifference(array1, array2);