
let tl = gsap.timeline();
let tl1 = gsap.timeline();

tl.from("#logo h3",{
    opacity: 0,
    y: "-30px",
    duration: 1,
    delay: 0.2
},'conn')

.from("#Navbar a",{
    opacity: 0,
    y: "-30px",
    duration: 2,
    stagger: 0.2,
},'conn')

tl1.from("#contentEle",{
    x: "-50px",
    opacity: 0,
    duration: 1,
    delay: 1
})

tl1.from("#imgContent",{
    opacity: 0,
    y: "20px",
    duration: 1.5,
    transform: "rotate(5deg)"
})
