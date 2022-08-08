
//scroll to top button
    scrollTopBtn = document.querySelector(".scrollTo-Top-btn");
    header = document.querySelector(".header");
    
window.addEventListener('scroll', function () {
     header.classList.toggle('active', window.scrollY > 500);
    scrollTopBtn.classList.toggle('active', window.scrollY > 500);
});  
scrollTopBtn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});


var settingsmenu = document.querySelector("settings-menu");
var darkBtn = document.getElementById("dark-btn");

function settingsMenuToggle() {
    settingsmenu.classList.toggle("settings-menu-height");
}
darkBtn.onclick = function () {
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("darktheme");

    if (localStorage.getItem("theme") == "light") {
        localStorage.setItem("theme", "dark");
    }
    else {
        localStorage.setItem("theme", "light");
    }
}

if (localStorage.getItem("theme") == "light") {
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("darktheme");
}
else if (localStorage.getItem("theme") == "dark") {
    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("darktheme");
}
else {
    localStorage.setItem("theme", "light" );
};

// 

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
let sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_items a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_items a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive);


        /*    =============
        / Number Animation Counter
        /   ==============*/

function animate(obj, initVal, lastVal, duration){
    let startTime = null;


    // get the currenet timeStamp to the an assign it to the CurrentTime Variable
    let currentTime = Date.now();

    // pass the currentTime variable into the step arrow function
    function step(currentTime) {
        // if stratTimeis null assign the currentTime to the startTime
        if (!startTime) {
            startTime = currentTime;
        }
        // calculate the number to be used in Culculating the numbers to be displayed
        const progress = Math.min((currentTime - startTime) / duration, 1);

        // calculate what is to be displayed using the value gotten above
        obj.innerHTML = Math.floor(progress * (lastVal - initVal) + initVal);


        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
        else {
            window.cancelAnimationFrame(window.requestAnimationFrame(step));
        }
    }
    // strat animating
    window.requestAnimationFrame(step);

}
let Numb1 = document.querySelector("#aboutNum1");
let Numb2 = document.querySelector("#aboutNum2");
let Numb3 = document.querySelector("#aboutNum3");

const load = () => {
    animate(Numb1, 0, 34, 7000);
    animate(Numb2, 0, 56, 7000);
    animate(Numb3, 100, 9, 7000);
};
        
        /*    =============
        / Number Animation Counter Ends
        /   ==============*/



// //ACCORDION SECTION

// let accordion = document.querySelectorAll('.faq .accordion-container .accordion');
    
// accordion.forEach(acco => {
//    acco.onclick = () =>{
//       accordion.forEach(remove => remove.classList.remove('active'));
//        acco.classList.add('active') && acco.classList.remove('active');
       
//    }
// });

// [data-accordion][data-accordion-btn]

// accordion variables
let accordionBtn = document.querySelectorAll(".accordion-head");
let accordionBody = document.querySelector(".accordion-body");

for (let i = 0; i < accordionBtn.length; i++) {

  accordionBtn[i].addEventListener('click', function () {

    const clickedBtn = this.nextElementSibling.classList.contains(".active");

    for (let i = 0; i < accordion.length; i++) {

      if (clickedBtn) break;

      if (accordionBody[i].classList.contains('active')) {

        accordionBody[i].classList.remove("active");
        accordionBtn[i].classList.remove("active");

      }

    }

    this.nextElementSibling.classList.toggle("active");
    this.classList.toggle("active");

  });
 
};

// if(window < 1000px){


// }
// elseif(){

// }
// else{

// };


// Dark  mode toggle
// const themeBtn = document.querySelector(".theme-btn");

// themeBtn.addEventListener('click', () => {
//     document.body.classList.toggle("darktheme");
//     themeBtn.classList.toggle("dark-btn-on");
//     // themeBtn.classList.toggle("sun");

//     localStorage.setItem("save-theme", getCurrentTheme());
//     localStorage.setItem("saved-icon", getCurrentIcon());
// });

// let getCurrentITheme = () => document.body.classList.contains("darktheme") ? "dark" : "light";
// let getCurrentIcon = () => themeBtn.classList.contains("sun") ? "sun" : "moon";

// let savedTheme = localStorage.getItem("saved-theme");
// let saveIcon = localStorage.getItem("saved-theme");

// if (savedTheme) {
//     document.body.classList[savedTheme === "dark" ? "add" : "remove"]("darktheme");
//     themeBtn.classList[saveIcon === "sun" ? "add" : "remove"]("sun");
// }

//let sections = document.querySelectorAll(".section[id]");
// function scrollActive() {
//     const scrollY = window.pageYOffset

//     sections.forEach(current =>{
//         let sectionHeight = current.offsetHeight,
//             sectionTop = current.offsetTop - 58,
//             sectionId = current.getAttribute("id")
//         if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//             document.querySelector(".nav_items a[href*=' + sectionId *]").classList.add("active-link");
//         } else {
//             document.querySelector(".nav_items a[href*=' + sectionId *]").classList.remove("active-link");
//         }
//     })
// };
// window.addEventListener("scroll", scrollActive());


