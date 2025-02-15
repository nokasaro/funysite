let codeSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowRight', 'ArrowLeft'];
let codePosition = 0;
let lastKeyTime = 0;

document.addEventListener('keydown', function(event) {
    let currentTime = new Date().getTime();
    if (currentTime - lastKeyTime < 1000) return;
    lastKeyTime = currentTime;

    console.log(`Tecla pressionada: ${event.key}`);
    console.log(`Posição na sequência: ${codePosition}`);

    if (event.key === codeSequence[codePosition]) {
        console.log("Correto!");
        codePosition++;
        if (codePosition === codeSequence.length) {
            // Torna o menu visível e aplica a animação de fade-in
            const hackerMenu = document.getElementById("hacker-menu");
            hackerMenu.style.display = "flex";
            setTimeout(function() {
                hackerMenu.style.opacity = 1;  // Inicia o fade-in
            }, 10);  // Pequeno delay para garantir que o display tenha sido alterado antes da animação
            codePosition = 0;
        }
    } else {
        console.log("Errado!");
        codePosition = 0;
        alert("Você errou.");
    }
});

function closeHackerMenu() {
    window.close();
}

function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    if (username === 'admin' && password === '1234') {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('game-container').style.display = 'block';
    } else {
        alert('Login inválido!');
    }
}

function addPoint() {
    let score = parseInt(document.getElementById('score').innerText);
    score += 1;
    document.getElementById('score').innerText = score;
    let progressBar = document.getElementById('progress-bar');
    let remainingClicks = document.getElementById('remaining-clicks');
    
    if (score % 10 === 0) {
        let progress = (score / 100) * 100; // Calcula o progresso
        progressBar.style.width = progress + '%';
        remainingClicks.innerText = 10 - (score % 10);
    }
}

function showAchievements() {
    alert("Aqui estão suas conquistas!");
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}
