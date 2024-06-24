const form = (document.querySelector('form'));

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission behavior
    
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');
    
    if (height ==='' || height<0 ||  isNaN (height)) {
        result.innerHTML= `Please Enter a Valid Number${height}`;
    }
    if (weight ==='' ||  weight<0 ||  isNaN ( weight)) {
        result.innerHTML= `Please Enter a Valid Number${ weight}`;
    } else{
        const bmi= (weight/((height*height)/10000)).toFixed(2)
        
        let bmiCategory;
        if (bmi < 18.6) {
            bmiCategory = "Underweight";
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            bmiCategory = "Normal weight";
        } else {
            bmiCategory = "Overweight";
        }

        // Display the BMI category and BMI value
        result.innerHTML = `<p>Your BMI: <span>${bmi}</span></p><p>${bmiCategory}</p>`;
    }
}); 

