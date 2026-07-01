gsap.registerPlugin(ScrollTrigger)
const hero=document.querySelector(".hero");
const image=document.querySelector(".image-wrapper");
hero.addEventListener("mousemove",(e)=>{
    const x=e.clientX/window.innerWidth;
    const y=e.clientY/window.innerHeight;
    const rotateY=(x-0.5)*12;
    const rotateX=(0.5-y)*12;
    image.style.transform=`
    rotate(${rotateX}deg)
    rotate(${rotateY}deg)`;

});
hero.addEventListener("mouseleave",()=>{
    image.style.transform=`
    rotateX(0deg)
    rotateY(0deg)
    `;
});
const glow=document.querySelector(".cursor-glow");
document.addEventListener("mousemove",(e)=>{
    glow.style.left=e.clientX +"px";
    glow.style.top=e.clientY + "px";
});

gsap.to(".navbar",{
    padding:"12px 30px",
    width:"82%",
    scrollTrigger:{
        trigger:"body",
        start:"100 top",
        end:"200 top",
        scrub:true
    },
    opacity:1,
    y:50,
    duration:1,
    ease:"power3.out"
});
// hero entrance animation just use to makeeverything enter one after another also known as(stagger animation)
const t1=gsap.timeline();
t1.to(".hero-left>*",{
   opacity:1,
   y:0,
   duration:0.8,
   stagger:0.2,
   ease:"power3.out"
})
.to(".image-wrapper",{
    opacity:1,
    x:0,
    duration:1,
    ease:"power3.out"

},"-=0.8");
// just used to expan and shrink slowly
gsap.to(".bg-glow",{
    scale:1.2,
    duration:5,
    repeat:-1,
    yoyo:true,
    ease:"sine.inOut"
});
// used to slowly fades the text  while scrolling
gsap.to(".hero-left",{
    y:-120,
    opacity:.2,
    ease:"none",
    scrollTrigger:{
        trigger:".hero",
        start:"top top",
        end:"bottom top",
        scrub:true


    }
});
// used to make image move slower than the text
gsap.to(".image-wrapper",{
    y:-80,
    scale:1.08,
    ease:"none",
    scrollTrigger:{
        trigger:".hero",
        start:"top top",
        end:"bottom top",
        scrub:true
    }
});
gsap.to(".bg-glow",{
    scale:1.5,
    opacity:.35,
    scrollTrigger:{
        trigger:".hero",
        start:"top top",
        end:"bottom top",
        scrub:true
    }
});
/* Animate the about section */
gsap.from(".about-left",{
    x:-150,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".about",
        start:"top 75%"
    }

});
gsap.from(".about-right",{
    x:150,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".about",
        start:"top 75%"
    }

});

gsap.from(".skill-card",{
    y:80,
    opacity:0,
    stagger:.15,
    duration:1,
    ease:"power3.out",
    scrollTrigger:{
        trigger:".skills",
        start:"top 70%"
    }

});
gsap.from(".project-card",{
    y:100,
    opacity:0,
    duration:1,
    ease:"power3.out",
    scrollTrigger:{
        trigger:".projects",
        start:"top 70%"
    }
});
gsap.from(".contact-form",{
    y:100,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".contact",
        start:"top 70%"
    }
})

const loaderTL=gsap.timeline();
loaderTL
.to(".loading-progress",{
    width:"100%",
    duration:1.5,
    ease:"power2.out"
})
.to(".loader",{
    opacity:0,
    duration:.6,
    pointerEvents:"none"
})
loaderTL.to(".loader",{
    display:"none"
});
window.addEventListener("load", () => {
    ScrollTrigger.refresh();
});