let height = 170.0;
let weight = 55.0;

const BMI = weight / (height ** 2);

if (BMI >= 25 && BMI <= 29.9) console.log('Are you overweight.\nContact your trainer for a diet.');
else if (BMI <= 18.5) console.log('You have a strong underweight.\nYou should see a doctor for advice.');
else if (BMI > 18.5 && BMI < 24.9) console.log('You have a good weight!');
else if (BMI >= 30) console.log('You are very obese.\nPlease contact the doctor for advice.');
