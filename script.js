const surpriseButton = document.querySelector('#surpriseButton');
const confettiButton = document.querySelector('#confettiButton');
const moreLoveButton = document.querySelector('#moreLoveButton');
const extraMessage = document.querySelector('#extraMessage');
const toast = document.querySelector('#toast');
const confettiLayer = document.querySelector('#confettiLayer');
let toastTimeout;

const sweetMessages = [
  'Recordatorio importante: eres más increíble de lo que te permites pensar. 💗',
  'Receta para hoy: 2 abrazos, 3 capítulos, algo rico y cero obligaciones. 📚',
  'Pupas, Dori, María Elena… tres nombres y una persona muy especial. 🐾',
  'Si hoy un gato se sienta encima de ti, no es casualidad: te está dando permiso para descansar. 🐈',
  'La super enfermera también merece que la cuiden, la mimen y le pregunten qué necesita. 🩷'
];
const confettiColors = ['#e987a4', '#f4c76b', '#b6a5ec', '#9ec9a0', '#f5b7c8', '#fff0a8'];

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove('show'), 3000);
}

function launchConfetti(amount = 95) {
  confettiLayer.replaceChildren();
  for (let i = 0; i < amount; i++) {
    const piece = document.createElement('span');
    piece.className = Math.random() > 0.78 ? 'heart-float' : 'confetti';
    if (piece.classList.contains('heart-float')) {
      piece.textContent = Math.random() > 0.5 ? '♡' : '♥';
      piece.style.left = `${Math.random() * 100}%`;
      piece.style.fontSize = `${14 + Math.random() * 20}px`;
      piece.style.animationDelay = `${Math.random() * 1.1}s`;
    } else {
      piece.style.left = `${Math.random() * 100}%`;
      piece.style.backgroundColor = confettiColors[Math.floor(Math.random() * confettiColors.length)];
      piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '3px';
      piece.style.setProperty('--duration', `${2.2 + Math.random() * 2.2}s`);
      piece.style.setProperty('--drift', `${-100 + Math.random() * 200}px`);
      piece.style.animationDelay = `${Math.random() * 1.2}s`;
    }
    confettiLayer.appendChild(piece);
  }
  setTimeout(() => confettiLayer.replaceChildren(), 6000);
}

surpriseButton.addEventListener('click', () => {
  document.querySelector('#sorpresa').scrollIntoView({ behavior: 'smooth', block: 'center' });
  document.querySelector('#sorpresa').classList.remove('reveal');
  void document.querySelector('#sorpresa').offsetWidth;
  document.querySelector('#sorpresa').classList.add('reveal');
  launchConfetti(75);
  showToast('¡Sorpresa desbloqueada! Feliz cumpleaños, María Elena 💗');
});

moreLoveButton.addEventListener('click', () => {
  const nextMessage = sweetMessages[Math.floor(Math.random() * sweetMessages.length)];
  extraMessage.textContent = nextMessage;
  extraMessage.hidden = false;
  extraMessage.classList.remove('reveal');
  void extraMessage.offsetWidth;
  extraMessage.classList.add('reveal');
  showToast('Una dosis extra de cariño, recién preparada. ✿');
});

confettiButton.addEventListener('click', () => {
  launchConfetti(130);
  confettiButton.classList.remove('wiggle');
  void confettiButton.offsetWidth;
  confettiButton.classList.add('wiggle');
  showToast('¡Felicidades, Pupas! Que empiece la celebración. 🎉');
});
