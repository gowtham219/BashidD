gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {

    /* =========================
   💌 ENVELOPE INTRO (FIXED & SAFE)
========================= */

const intro = document.getElementById("intro-envelope");
const flap = document.querySelector(".flap");

if (intro && flap) {

    gsap.set(".envelope", { scale: 0.9 });

    const introTL = gsap.timeline({
        delay: 0.3
    });

    introTL.to(".envelope", {
        scale: 1.05,
        duration: 1,
        ease: "power2.out"
    })
    .to(flap, {
        rotateX: -180,
        duration: 1.2,
        transformOrigin: "top",
        ease: "power3.inOut"
    })
    .to("#intro-envelope", {
        opacity: 0,
        duration: 0.8,
        delay: 0.4,
        onComplete: () => intro.remove()
    });
}

    /* =========================
       🌸 LENIS SCROLL
    ========================= */

    const lenis = new Lenis({
        duration: 1.3,
        smoothWheel: true
    });

    function raf(time) {
        lenis?.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    /* =========================
       🌸 PETALS SYSTEM
    ========================= */

    function createPetal() {
        const petal = document.createElement("div");
        petal.classList.add("petal");

        petal.style.left = Math.random() * 100 + "vw";

        document.body.appendChild(petal);

        gsap.to(petal, {
            y: window.innerHeight + 120,
            x: "+=30",
            rotation: Math.random() * 360,
            duration: 5,
            opacity: 0,
            ease: "power1.out",
            onComplete: () => petal.remove()
        });
    }

    setInterval(createPetal, 12	00);

    /* =========================
       ✨ SPLIT TEXT
    ========================= */

    new SplitType(".split", {
        types: "chars"
    });

    /* =========================
       🎬 MAIN ANIMATION
    ========================= */

    const tl = gsap.timeline();

    tl.from(".glass-card", {
        opacity: 0,
        scale: 0.8,
        duration: 1.5,
        ease: "power4.out"
    })

    .from(".subtitle", {
        opacity: 0,
        y: 40,
        duration: 1
    })

    .from(".title", {
        opacity: 0,
        y: 30,
        duration: 1
    })

    .from(".groom .char", {
        opacity: 0,
        y: 150,
        rotateX: 90,
        filter: "blur(10px)",
        stagger: 0.05,
        duration: 1.3
    })

    .from(".weds", {
        opacity: 0,
        scale: 0,
        rotate: -15,
        duration: 1
    })

    .from(".bride .char", {
        opacity: 0,
        y: 150,
        rotateX: -90,
        filter: "blur(10px)",
        stagger: 0.05,
        duration: 1.3
    })

    .from(".date", {
        opacity: 0,
        y: 50
    })

    .from(".venue", {
        opacity: 0,
        y: 50
    })

    .from(".enter", {
        opacity: 0,
        scale: 0
    });

    /* =========================
       🎵 MUSIC TOGGLE
    ========================= */

    const music = new Audio("assets/music.mp3");
    music.loop = true;

    const btn = document.createElement("button");
    btn.className = "music-btn";
    btn.innerHTML = "🎵";

    document.body.appendChild(btn);

    let playing = false;

    btn.addEventListener("click", () => {
        if (playing) {
            music.pause();
            btn.innerHTML = "🔇";
        } else {
            music.play();
            btn.innerHTML = "🎵";
        }
        playing = !playing;
    });

});