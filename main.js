let animFT = gsap.fromTo;

//SFM Image Card
animFT(".sfmCard", {
    x: "-50em",
}, {
    delay: 0.5,
    duration:0.8,
ease: "back.out(0.5)",
x: "0em"
});
//SFM Description
animFT(".sfmText", {
    x: "-85em",
}, {
    delay: 0.7,
    duration:0.8,
ease: "back.out(0.5)",
x: "-17em",
});
//TF2 Image Card
animFT(".gameCard", {
    x: "140em",
}, {
    delay: 0.9,
    duration:0.8,
ease: "back.out(0.5)",
x: "80em",
});
//TF2 Description
animFT(".gameText", {
    x: "80em",
}, {
    delay: 1.1,
    duration:0.8,
ease: "back.out(0.5)",
x: "24em",
});
//USRDP Card
animFT(".website", {
    x: "-50em",
}, {
    delay: 0.9,
    duration:0.8,
ease: "back.out(0.5)",
x: "0em"
});
//USRDP Description
animFT(".websiteInfo", {
    x: "-85em",
}, {
    delay: 1.1,
    duration:0.8,
ease: "back.out(0.5)",
x: "23em",
});