import './stylesheets/scss/styles.scss'
import { gsap} from "gsap";

const menuIcon = document.querySelector('#menu-icon')
const closeIcon = document.querySelector('#close-icon')

function onLanding(){
    gsap.from(".profile-pic", { opacity: 0, scale: 0.5, duration: 1})
    gsap.to(".profile-pic", {opacity: 1, scale: 1, duration: 1})

    gsap.from(".greeting-text", { opacity: 0, x: -100, duration: 0.5 })
    gsap.to(".greeting-text", { opacity: 1, x: 0, duration: 0.5})

    gsap.from(".home-fname", { opacity: 0, y: 100, duration: 0.5, delay: 0.2})
    gsap.to(".home-fname", { opacity: 1, y: 0, duration: 0.5,  delay: 0.2})

    gsap.from(".home-lname", { opacity: 0, y: 100, duration: 0.5, delay: 0.4})
    gsap.to(".home-lname", { opacity: 1, y: 0, duration: 0.5,  delay: 0.4})

    
}

function onScrolling(){
    const myJobTimeLine = gsap.timeline({
        scrollTrigger:{
            trigger:'.my-job',
            start: "center top",
            pin: true, 
            snap:{
                snapTo: 1 / 4,
                duration: 0.5
            }
        },
    })

    myJobTimeLine.from('.greeting-text[my-job]', {y: -100, opacity: 0, duration: 1})
    .from('.f-name[my-job]',{x: -100, opacity: 0, duration: 1.5}, '+=0.5')
    .from('.l-name[my-job]',{x: -100, opacity: 0, duration: 1},)
    .to('.greeting-text[my-job]', {y: 0, opacity: 1, duration: .5})
}

function openMenu(){
    const menuIcon = document.querySelector('.menu-icon[not-close]')
    const menuModal = document.querySelector('.menu')
    const closeIcon = document.querySelector('.menu-icon[icon-close]')
  
   

    gsap.from(".menu-icon[not-close]", { rotate: 180,  duration: 0.2})
    gsap.to(".menu-icon[not-close]", {rotate: 0,  duration: 0.2})

    setTimeout(() => {menuIcon.style.display = 'none',  menuModal.style.display = 'flex' ,closeIcon.style.display = 'block'}, 150)

    gsap.from(".menu", { opacity: 0, x: 100, duration: 0.25})
    gsap.to(".menu", { opacity: 1, x: 0, duration: 0.25})

    
    
}

function closeMenu() {
    const menuIcon = document.querySelector('.menu-icon[not-close]')
    const menuModal = document.querySelector('.menu')
    const closeIcon = document.querySelector('.menu-icon[icon-close]')

    gsap.from(".menu-icon[icon-close]", { rotate: 0, duration: 0.2})
    gsap.to(".menu-icon[icon-close]", {rotate: 180, duration: 0.2})

    setTimeout(() => {menuIcon.style.display = 'block',closeIcon.style.display = 'none', menuModal.style.display = 'none'}, 250)

    gsap.from(".menu", { opacity: 1, x: 0, duration: 0.25, delay: 0.2})
    gsap.to(".menu", {opacity: 0, x: 500, duration: 0.25,  delay: 0.2})

    gsap.from(".menu-icon[not-close]", { opacity: 0,  duration: 0.5, delay: 0.2})
    gsap.to(".menu-icon[not-close]", {opacity: 1,  duration: 0.5, delay: 0.2})
    
    
}


menuIcon.addEventListener('click', openMenu)
closeIcon.addEventListener('click', closeMenu)


window.onload = () =>{
    onLanding()
    onScrolling()
}