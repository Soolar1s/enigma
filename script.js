document.getElementById('sim').addEventListener('click', function() {
    window.location.href = 'sim.html';
});

let clickCount = 0;
let moving = false; 

document.getElementById('nao').addEventListener('click', function() {
    clickCount++;
    const button = document.getElementById('nao');
    const mensagem = document.getElementById('mensagem');

    if (clickCount === 1) {
        mensagem.textContent = "Tem certeza?? :(";
        mensagem.classList.remove('hidden');
    }

    if (clickCount >= 5) {
        window.location.href = 'nao.html';
    } else {
        if (!moving) {
            moving = true; 
            moveButton(button);
            setTimeout(() => {
                moving = false; 
            }, 1000); 
        }
    }
});

function moveButton(button) {

    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;


    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;


    const x = Math.random() * (windowWidth - buttonWidth);
    const y = Math.random() * (windowHeight - buttonHeight);

    button.style.position = 'absolute';
    button.style.left = x + 'px';
    button.style.top = y + 'px';
}