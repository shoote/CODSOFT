const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header_image img",{
    ...scrollRevealOption,
    origin: "right",
});
ScrollReveal().reveal(".header_content h1",{
    ...scrollRevealOption,
    delay: "500",
});
ScrollReveal().reveal(".header_content p",{
    ...scrollRevealOption,
    origin: "1000",
});
ScrollReveal().reveal(".header_content form",{
    ...scrollRevealOption,
    origin: "1500",
});
