const confettiAnimation = document.querySelector('.confetti-animation');
const amount = document.querySelector('.amount');

confettiAnimation.classList.add('hidden')
document.querySelector('.offset').addEventListener('click', function(){
  
        
    
    amount.textContent = '175'
    
    confettiAnimation.classList.remove('hidden')

    setTimeout(() => {
        confettiAnimation.classList.add('hidden')
    }, 3000)
    
});