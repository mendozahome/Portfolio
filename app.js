/*=====toggle icon navbar =========*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}





/*=====scroll reveal =========*/

ScrollReveal({
    reset:true,
    distance: '80px',
    duration: 2000,
    delay: 200
})
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/*===== typed js =========*/

const typed = new Typed('.multiple-text', {
    strings: ['Full-Stack Developer', 'Youtuber', 'Gamer'],
    typeSpeed:100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true,
})


/*===== form to email =========*/

function sendEmail(){
    Email.send({
        SecureToken : "2fab1b17-990a-4978-99f0-2803d6b1b33f",
        To : 'mendozahome2@gmail.com',
        From : 'mendozahome2@gmail.com',
        Subject : document.getElementById('email_subject').value,
        Body : 
        "Name:  " + document.getElementById('full_name').value +
        "<br> Email: " + document.getElementById('email').value +
        "<br> Phone No: " + document.getElementById('phone').value +
        "<br> Message: " + document.getElementById('message').value 
        
    }).then(
      message => alert(`Thank you i will contact you as soon as possible `)
    );

}




