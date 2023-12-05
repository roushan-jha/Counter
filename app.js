let count = 0;

const number = document.getElementById("num");
const decreaseBtn = document.querySelector(".decrease");
const increaseBtn = document.querySelector(".increase");
const resetBtn = document.querySelector(".reset");



// btns.forEach(function (btn) {
//     btn.addEventListner("click", function(e) {
//         const styles = e.currentTarget.classList;
        
//         if(styles.contains("decrease")) {
//             count--;
//         } else if(styles.contains("increase")) {
//             count++;
//         } else {
//             count = 0;
//         }
//         number.textContent = count;
//     });
// });



increaseBtn.addEventListener("click", function() {
    count++;
    if(count > 0) {
        number.style.color = "green";
    } else if(count < 0) {
        number.style.color = "red";
    } else {
        number.style.color = "black";
    }
    number.textContent = count;
});

decreaseBtn.addEventListener("click", function() {
    count--;
    if(count > 0) {
        number.style.color = "green";
    } else if(count < 0) {
        number.style.color = "red";
    } else {
        number.style.color = "black";
    }
    number.textContent = count;
});

resetBtn.addEventListener("click", function() {
    count = 0;
    number.style.color = "black";
    number.textContent = count;
});



