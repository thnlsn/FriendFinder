console.log("friends.js working");

//웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟

let friends = [
    { //OBJECT 0
        name: 'Arthur Fleck',
        photo: 'https://pbs.twimg.com/media/DnP8Y_BXcAEE83s.jpg',
        scores: [
            1,
            2,
            3,
            4,
            5,
            1,
            2,
            5,
            2,
            3
        ]
    },
    { //OBJECT 1
        name: 'Nathan Bateman',
        photo: 'https://vignette.wikia.nocookie.net/villains/images/b/b9/Nathanmachina.jpg',
        scores: [
            5,
            4,
            3,
            2,
            1,
            5,
            4,
            1,
            1,
            2
        ]
    },
    { //OBJECT 2
        name: 'Clarice Starling',
        photo: 'https://i.pinimg.com/originals/9d/8b/e6/9d8be6dcc520885ca1d1ceb04b522a20.jpg',
        scores: [
            3,
            2,
            1,
            2,
            3,
            4,
            4,
            2,
            1,
            6
        ]
    },
    { //OBJECT 3
        name: 'Louise Banks',
        photo: 'https://cdn1us.denofgeek.com/sites/denofgeekus/files/styles/main_wide/public/2016/11/arrival_ending_explained.jpg',
        scores: [
            5,
            5,
            5,
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

module.exports = friends;

//웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟

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
    return sum;
};