// JavaScript multiple condition practice using && ||

const age = 19;
const height = 61;

if(age > 18 && height > 60){
    console.log('He will push the car')
} else {
    console.log('He will seating on the car')
}


const mathScore = 85;
const englishScore = 90;

if(mathScore > 80 || englishScore > 85) {
    console.log('He/she is eligible for adimission')
} else {
    console.log('He/she is not eligible for admission')
}


const GPA = 5;
const monthlyIncome = 9999;

if(GPA === 5 && monthlyIncome < 10000){
    console.log('he/she will get scholarship')
} else {
    console.log('he/she will not get scholarship')
}

const applicantAge = 29;
const applicantExperience = 3;

if(applicantAge < 30 && applicantExperience > 2){
    console.log('Eligible for exam')
} else {
    console.log('Not eligilbe for exam')
}


const egg = 11;
const chicken = true;

if(egg > 12 || chicken === false){
    console.log('I will made egg korma')
} else {
    console.log('I will eat ban and bannana')
}