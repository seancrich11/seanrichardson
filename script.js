document.addEventListener('DOMContentLoaded', () => {
    const bubbleContainer = document.getElementById('bubble-container');
    const colors = ['#559dfc', '#9cc7ff', '#d5e7ff'];
    const seed = 12345; // Fixed seed for consistency

    function seededRandom(seed) {
        let m = 0x80000000;
        let a = 1103515245;
        let c = 8;

        let state = seed ? seed : Math.floor(Math.random() * (m - 1));
        return function() {
            state = (a * state + c) % m;
            return state / (m - 1);
        }
    }

    const random = seededRandom(seed);

    function createBubble() {
        const bubble = document.createElement('div');
        const size = random() * 15 + 10; // Bubbles size between 50px and 150px
        const color = colors[Math.floor(random() * colors.length)];
        const xPosition = random() * window.innerWidth;
        const yPosition = random() * window.innerHeight;

        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.backgroundColor = color;
        bubble.style.top = `${yPosition}px`;
        bubble.style.left = `${xPosition}px`;
        bubble.classList.add('bubble');

        bubbleContainer.appendChild(bubble);
    }

    function generateBubbles(count) {
        for (let i = 0; i < count; i++) {
            createBubble();
        }
    }

    function moveBubbles() {
        const bubbles = document.querySelectorAll('.bubble');
        bubbles.forEach(bubble => {
            const speed = Math.random() * 1 + 0.5; // Speed between 0.5 and 1.5
            bubble.style.transform = `translateY(${window.scrollY * speed}px)`;
        });
    }

    generateBubbles(50); // Create 50 bubbles
    window.addEventListener('scroll', moveBubbles);
});
