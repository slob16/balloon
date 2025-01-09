document.addEventListener("DOMContentLoaded", () => {
    let rotation = 20;

    const btn = document.querySelector(".engine");

    btn.addEventListener("click", () => {
        btn.classList.toggle("active");
    });

    /* optional
    window.addEventListener("keydown", (event) => {
        const wrapper = document.getElementById("intro-wrapper");

        if (event.key === "ArrowUp") {
            rotation += 5;
            wrapper.style.transform = `rotateX(${rotation}deg) translateY(-110px)`;
        } else if (event.key === "ArrowDown") {
            rotation -= 5;
            wrapper.style.transform = `rotateX(${rotation}deg) translateY(-110px)`;
        }
    });*/
  
});