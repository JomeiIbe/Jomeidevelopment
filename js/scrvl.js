// Scroll reveal animations
// Scroll reveeal starts
ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 100
});

//Traget elements and specify ton create reveal animatjions
ScrollReveal().reveal('.home .info h2', { delay: 500, orign: 'left' });
ScrollReveal().reveal('.home .info h3, .home .info p' { delay: 600, orign: 'right' });
ScrollReveal().reveal('.home .info h2', { delay: 500, orign: 'left' });
ScrollReveal().reveal('.home .info h2', { delay: 500, orign: 'left' });




ScrollReveal().reveal('.banner .banner_text intro1', { delay: 500, orign: 'left' });
ScrollReveal().reveal('.banner .banner_text intro2, .banner .banner_text intro3', { delay: 600, orign: 'bottom' });
ScrollReveal().reveal('.banner .banner_img img', { delay: 800, orign: 'left' });
ScrollReveal().reveal('.banner .fast_links i', { delay: 500, orign: 'left', interval: 200});


















function animate(obj, initVal, lastVal, duration){
    let startTime = null;


    // get the currenet timeStamp to the an assign it to the CurrentTime Variable
    let currentTime = Date.now();

    // pass the currentTime variable into the step arrow function
    const step = (currentTime) => {
        // if stratTimeis null assign the currentTime to the startTime
       
        if (!startTime) {
            startTime = currentTime;
        }
        // calculate the number to be used in Culculating the numbers to be displayed
        const progress = Math.min((currentTime - startTime) / duration, 1);

        // calculate what is to be displayed using the value gotten above
        obj.innerHtml = Math.floor(progress * (lastVal - initVal) + initVal);
        

        if (progress < 1) {
            window.requestAnimationFrame(step)
             }
            else {
            window.cancelAnimationFrame(window.requestAnimationFrame(step));
        }
    };
    // strat animating
    window.requestAnimationFrame(step);

}
let text1 = document.getElementById("#001");
let text2 = document.getElementById("#002");
let text3 = document.getElementById("#003");

const load = ()=> {
    animate(text1, 0, 511, 7000);
    animate(text1, 0, 232, 7000);
    animate(text1, 100, 25, 7000);
}