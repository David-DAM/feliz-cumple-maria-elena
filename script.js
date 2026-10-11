const $ = (id) => document.getElementById(id);
const toast = $('toast');
let toastTimeout;

function notify(message) {
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => toast.classList.remove('show'), 3200);
}

function confettiBurst(count = 90) {
    const layer = $('confetti');
    const colors = ['#f3b8c9', '#bd5474', '#38252e', '#e8bd5d', '#fff8f7'];
    for (let i = 0; i < count; i++) {
        const piece = document.createElement('span');
        piece.className = 'confetti-piece';
        piece.style.left = `${Math.random() * 100}%`;
        piece.style.background = colors[Math.floor(Math.random() * colors.length)];
        piece.style.animationDelay = `${Math.random() * .7}s`;
        piece.style.animationDuration = `${1.8 + Math.random() * 1.8}s`;
        piece.style.transform = `rotate(${Math.random() * 360}deg)`;
        layer.appendChild(piece);
        setTimeout(() => piece.remove(), 4300);
    }
}

$('openReport').addEventListener('click', () => {
    $('report').scrollIntoView({behavior: 'smooth'});
    notify('Sorpresa desbloqueada. Se recomienda continuar hasta la tarta.');
});

$('birthdayToast').addEventListener('click', () => {
    $('signedMessage').hidden = false;
    notify('Firmado, sellado y archivado. ¡Felicidades, María!');
});
$('celebrate').addEventListener('click', () => {
    confettiBurst(130);
    notify('¡FELIZ CUMPLE, MARÍA! Se autoriza chocolate sin límite.');
});
