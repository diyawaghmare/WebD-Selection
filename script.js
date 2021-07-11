function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});

//Typing animation script

var typed = new Typed(".typing", {
    strings: ["Covid-19 Vaccination Dashboard"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});