function calculateDaysToNewYear() {
    const today = new Date(); 
    const nextYear = today.getFullYear() + 1; 
    const newYear = new Date(nextYear, 0, 1); 

    
    const diffInMilliseconds = newYear - today;
    const daysRemaining = Math.ceil(diffInMilliseconds / (1000 * 60 * 60 * 24));

    return daysRemaining;
}


function updateCounter() {
    const counterElement = document.querySelector('.counter');
    if (counterElement) {
        counterElement.textContent = calculateDaysToNewYear();
    }
}


document.addEventListener('DOMContentLoaded', updateCounter);

