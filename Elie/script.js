// Frases románticas para cada personaje
const messages = {
    tanjiro: [
        "Eres mi luz en la oscuridad.",
        "Como el sol, llenas mi vida de calidez."
    ],
    nezuko: [
        "Tu sonrisa es más dulce que cualquier sueño.",
        "Eres mi refugio en este mundo caótico."
    ],
    zenitsu: [
        "Aunque soy una cobarde, por ti enfrentaría cualquier demonio.",
        "Tu amor es como un trueno que ilumina mi corazón."
    ],
    inosuke: [
        "Juntos somos invencibles.",
        "Aunque no siempre lo diga, mi corazón ruge por ti."
    ]
};

// Mostrar un mensaje romántico al hacer clic
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        const messageBox = document.getElementById('message');
        const character = button.classList[1]; // tanjiro, nezuko, etc.
        const phrases = messages[character];
        const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
        messageBox.textContent = randomPhrase;

        // Mostrar íconos
        showIcon(character);
    });
});

function showIcon(character) {
    const icon = document.createElement('img');
    icon.src = `images/${character}-icon.jpg`;
    icon.className = 'icon';
    icon.style.position = 'absolute';
    icon.style.left = `${Math.random() * 80}%`; // Limitar para evitar que salgan de los bordes
    icon.style.top = `${Math.random() * 80}%`;
    document.body.appendChild(icon);

    // Eliminar el icono después de 3 segundos
    setTimeout(() => icon.remove(), 3000);
}
