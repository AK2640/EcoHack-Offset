
const distanceField = document.querySelector('#distance');
const amount = document.querySelector('.amount');
const confettiAnimation = document.querySelector('.confetti-animation');
let gallons;

confettiAnimation.classList.add('hidden')

document.querySelector('.offset').addEventListener('click', function(){
    if(distanceField != NaN){
        gallons = parseInt(distanceField.value) / 25;
    
        let emissions = distanceField.value * gallons;


        amount.textContent = emissions;
       
     
   
    
    confettiAnimation.classList.remove('hidden')

    setTimeout(() => {
        confettiAnimation.classList.add('hidden')
    }, 3000)
    }
});