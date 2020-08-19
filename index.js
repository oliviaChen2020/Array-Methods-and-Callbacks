import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */


const hTeamName = fifaData.filter(function(item){
    return item['Year'] === 2014 && item['Stage'] === "Final";
});

console.log(hTeamName[0]['Home Team Name']);

const aTeamName = fifaData.filter(function(item){
   return item['Year'] === 2014 && item['Stage'] === "Final";
});

console.log(aTeamName[0]['Away Team Name']);


const hTeamGoals = fifaData.filter(function(item){
   return item['Year'] === 2014 && item['Stage'] === "Final";
});

console.log(hTeamGoals[0]['Home Team Goals']);


const aTeamGoals = fifaData.filter(function(item){
    return item['Year'] === 2014 && item['Stage'] === "Final";
});
console.log(aTeamGoals[0]['Away Team Goals']);


console.log(hTeamName[0]['Home Team Name']);
console.log(aTeamName[0]['Away Team Name']);





/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

// function getFinals(data) {
//     return data.filter(item => item.Stage === "Final")  
// }


function getFinals(data) {
    return data.filter(item => {
        return item.Stage === "Final"
    })
}

const finals = getFinals(fifaData);
console.log(finals);




/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

// function getYears(callback) {
//     const allYears = callback.map(item => {
//         return item['Year']
//     });
//     return allYears
// }

function getYears(cb) {
    const allFinals = cb(fifaData);
    const allYears = allFinals.map(item => {
        return item.Year;
    })
    return allYears;
}



console.log(getYears(getFinals));

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(callback) {
    const allFinals = callback(fifaData);
    const winners = allFinals.map(item => {
        const homeGoals = item["Home Team Goals"];
        const awayGoals = item["Away Team Goals"];
        const winCondition = item["Win conditions"];
        const homeTeam = item["Home Team Name"];
        const awayTeam = item["Away Team Name"];
        if (homeGoals === awayGoals) {
            if (winCondition.includes(homeTeam)) {
                return homeTeam;
            } else {
                return awayTeam;
            }
        }
        if (homeGoals > awayGoals) {
            return homeTeam;
        }
        return awayTeam;
    })

    return winners;
};

console.log(getWinners(getFinals));

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */


function getWinnersByYears(cb1, cb2) {
    const winYears = cb2(getFinals);
    const winCountry = cb1(getFinals);
    const winnersByYear = [];
    winYears.forEach((element, index) => {
        debugger
        const msg = `In ${element}, ${winCountry[index]} won the world cup!`;
        winnersByYear.push(msg);
    })
    return winnersByYear;
}

const winners = getWinnersByYears(getWinners, getYears);
console.log(winners);

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(item) {
    const allHomeGoals = [];
    const allAwayGoals = [];
    item.forEach(item => {
        allHomeGoals.push(item["Home Team Goals"]);
        allAwayGoals.push(item["Away Team Goals"]);
    });

    const averageHomeGoals = allHomeGoals.reduce(function(acc, item){
        return Math.round((acc + item)/allHomeGoals.length);
    }, 0);
    const averageAwayGoals = allAwayGoals.reduce(function(acc, item){
        return Math.round((acc + item)/allAwayGoals.length);
    }, 0);
    
    return `Home goal average: ${averageHomeGoals} . Away goal average: ${averageAwayGoals}` ;
} 

console.log(getAverageGoals(fifaData));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWinns(item, teamInitials) {
    const winTeam = item.map(item => {
        const homeGoals = item["Home Team Goals"];
        const awayGoals = item["Away Team Goals"];
        const homeInitials = item["Home Team Initials"];
        const awayInitials= item["Away Team Initials"];
        if (homeGoals > awayGoals) {
             return homeInitials;
        }else if(homeGoals < awayGoals) {
            return awayInitials;
        }
    })
    // const winTeamNum = winTeam.reduce(function)
    return winTeamNum;
};


getCountryWins(fifaData);


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();
/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */