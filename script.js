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
  const colors = ['#d6ff55', '#ff654e', '#172a26', '#e8bd5d', '#f3f0e7'];
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
  $('report').scrollIntoView({ behavior: 'smooth' });
  notify('Expediente abierto. La paciente niega tener la culpa de sus moratones.');
});
const memoryTests = [
  'Pregunta 1: ¿A qué has venido? A) Ni idea. B) ¿Quién eres? C) Ya se me ha olvidado. Resultado: Dori certificada. 🐠',
  'Test completado: has recordado que hoy es tu cumpleaños. ¡Récord personal! 🏆',
  'Diagnóstico: memoria selectiva. Recuerdas la letra de una canción de 2009, pero no dónde has dejado el móvil. 📱'
];
let memoryIndex = 0;
$('memoryTest').addEventListener('click', () => {
  const result = $('memoryResult');
  result.hidden = false;
  result.textContent = memoryTests[memoryIndex % memoryTests.length];
  memoryIndex++;
});
const catAdvice = [
  'Consejo de guardia: hidrátate y no te tropieces con nada.',
  'El gato recomienda: tarta primero, responsabilidades mañana.',
  'Diagnóstico felino: necesitas una siesta y que alguien te traiga snacks.',
  'Recordatorio de Dori: has abierto esta web para algo. Ah, sí: ¡feliz cumpleaños!',
  'Pupas, el mobiliario no es tu enemigo. Aunque a veces lo parezca.'
];
$('newCatMessage').addEventListener('click', () => {
  const current = $('catAdvice').textContent;
  let next = current;
  while (next === current && catAdvice.length > 1) next = catAdvice[Math.floor(Math.random() * catAdvice.length)];
  $('catAdvice').textContent = next;
});
$('birthdayToast').addEventListener('click', () => {
  $('signedMessage').hidden = false;
  notify('Firmado, sellado y archivado. ¡Felicidades, María Elena!');
});
$('celebrate').addEventListener('click', () => {
  confettiBurst(130);
  notify('¡FELIZ CUMPLE, PUPAS DORI! Se autoriza tarta sin límite.');
});
