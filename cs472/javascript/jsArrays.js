const studentAnswers = [[1, 1, 2, 4], [2, 1, 2, 2], [3, 1, 3, 4]];
const correctAnswers = [3, 1, 2, 4];
function scoreExams(studentAnswers, correctAnswers) {
    let scores = [];
    for (let student of studentAnswers) {
        let index = 0;
        let score = 0;//Score of each student
        for (let answer of correctAnswers) {
            if (student[index++] == answer)
                score++;
        }
        scores.push(score)
    }
    return scores;
}
console.log(scoreExams(studentAnswers, correctAnswers));//[3,2,3];

function scoreForecasts(forecast, observed) {
    let percentArray = [];
    let index = 0;
    for (let eachForecast of forecast) {
        let difference = eachForecast - observed[index];
        //convert the difference to positive integer
        difference = difference>0?difference:(difference*-1);
        if (difference<=2)
        percentArray.push(100);
        else if (difference<=5)
            percentArray.push(80);
        else if (difference<=10)
            percentArray.push(60);
        else
            percentArray.push(0);
        index++;
    }
    console.log(percentArray)
    return percentArray.reduce((acc, value) => acc + value, 0) / 3
}
const forecast2 = [80, 80, 80];
const observed2 = [82, 85, 74];
console.log(scoreForecasts(forecast2, observed2));

function firstRowColSum(matrix){
    let rowSum= matrix[0].reduce((acc,value)=>acc+value,0);
    let colSum=0;
    for(let row of matrix ){
        colSum+=row[0];
    }
    return [rowSum,colSum]
}
let testArr1 = [ [1,2,3], [5,2,3], [9,2,3] ]
console.log(firstRowColSum (testArr1));

