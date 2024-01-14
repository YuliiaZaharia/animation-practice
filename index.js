document.addEventListener('DOMContentLoaded', function () {
    gsap.from(".anim.one, .anim.two", { opacity: 0, duration: 2, ease: "power4.out", stagger: 0.5 });
    gsap.from(".header img", { scale: 0.8, duration: 1, ease: "bounce.out", delay: 1 });
    gsap.from(".link", { x: -20, opacity: 0, duration: 1, ease: "power2.out", stagger: 0.2, delay: 2 });
    gsap.to(".pic", { rotation: 360, duration: 4, ease: "elastic.out(1, 0.5)", delay: 1 });
    gsap.from(".btn", { y: 20, opacity: 0, duration: 1, ease: "power2.out", delay: 3 });
    gsap.to(".link", { color: "#a454a1", duration: 2, ease: "power2.out", delay: 2, stagger: 0.2, repeat: -1 });
    gsap.to(".pic", { y: -10, duration: 1, repeat: -1, yoyo: true, ease: "power2.out", delay: 1 });
    gsap.to(".btn", { scale: 1.1, opacity: 0.8, duration: 1, repeat: -1, yoyo: true, ease: "power2.out", delay: 3 });
  });
  
  
