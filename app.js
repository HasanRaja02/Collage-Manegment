let f_btn = document.getElementById("forward");

if(f_btn){
f_btn.onclick = () =>{
    history.forward();
};
}

let b_btn = document.getElementById("back");

if (b_btn) {
    b_btn.onclick = () => {
        history.back();
    };   
};

let up_arrow = document.getElementById("scrollToTopBtn");

window.onscroll = function () {

    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        up_arrow.style.display = "block";
    }else{
        up_arrow.style.display = "none";
    }
};

up_arrow.onclick = function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}




// let mybutton = document.getElementById("scrollToTopBtn");


// window.onscroll = function () {
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//         mybutton.style.display = "block";
//     } else {
//         mybutton.style.display = "none";
//     }
// };


// mybutton.onclick = function () {
//     window.scrollTo({
//         top: 0,
//         behavior: "smooth"
//     });
// };

