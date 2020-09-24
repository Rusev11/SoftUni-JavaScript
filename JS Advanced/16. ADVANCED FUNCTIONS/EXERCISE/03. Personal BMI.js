function solve(name, age, weight, height) {
    let personalInfo = {age, weight, height}
    let BMI = weight / (height*height/10000);
    let status = '';
    if (BMI < 18.5){
        status = 'underweight';
    } else if(BMI <25){
        status = 'normal';
    }else if(BMI <30){
        status = 'overweight';
    } else {
        status = 'obese';
    }
    let object = {
       name: name,
       personalInfo: personalInfo,
       BMI: BMI.toFixed(0),
       status: status,  
   }
   if ( status === 'obese'){
       object['recommendation']='admission required';
   }
   return object;
   
}


solve('Peter', 29, 75, 182)
