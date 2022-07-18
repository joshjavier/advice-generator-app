const generateBtn = document.getElementById('generateBtn');
const adviceId    = document.getElementById('adviceId');
const adviceText  = document.getElementById('adviceText');

async function getRandomAdvice() {
    let url = "https://api.adviceslip.com/advice";

    try {
        const response = await fetch(url);
        const data = await response.json();
        const { id, advice } = data.slip;
        adviceId.textContent = "Advice #" + id;
        adviceText.textContent = advice;

    } catch (err) {
        console.log(err);
    }
}

generateBtn.addEventListener('click', function() {
    getRandomAdvice();
});
