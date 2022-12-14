/* progress */
const
    progressDiv = document.querySelector(".progress-div"),
    progressBars = document.querySelectorAll(".progress-bar"),
    counterDiv = document.querySelector(".counter-div"),
    countersTag = document.querySelectorAll(".counter-div h3");
ScrollOut({
    targets: ".progress-div , .counter-div"
});
window.addEventListener("scroll", function () {
    //progress
    if (progressDiv.dataset.scroll == "in") {
        progressBars.forEach(el => {
            let valueNow = el.getAttribute("aria-valuenow");
            el.style.width = valueNow + "%";
            let counterSpan = el.parentElement.parentElement.querySelector(".progress-value span");
            let timer = setInterval(() => {
                if (Number(counterSpan.textContent) < valueNow) {
                    counterSpan.textContent = Number(counterSpan.textContent) + 1;
                }
                else {
                    clearInterval(timer);
                }
            }, 500);
        })
    }
    else {
        progressBars.forEach(el => {
            el.style.width = 0 + "%";
            el.parentElement.parentElement.querySelector(".progress-value span").textContent = 0;
        })
    }
    //Counter
    if (counterDiv.dataset.scroll == "in") {
        countersTag.forEach(el => {
            let time = setInterval(() => {
                if (Number(el.innerText) < el.dataset.counter) {
                    el.innerText = Number(el.innerText) + 1;
                }
                else {
                    clearInterval(time)
                }
            }, 1000)

        })
    }
    else {
        countersTag.forEach(el => {
            el.innerText = 0;
        })
    }
})
/* filter */
const filterListItems = document.querySelectorAll(".list-group li"),
    filteredItems = document.querySelectorAll(".filterd-items a");

filterListItems.forEach(list => {
    list.addEventListener("click", () => {
        document.querySelector(".list-group li.active").classList.remove("active");
        list.classList.add("active");
        let FilteredValue = list.dataset.filter;
        filteredItems.forEach(item => {
            if (item.classList.contains(FilteredValue)) {
                item.classList.remove("hidden")
                item.classList.add("active")
            }
            else {
                item.classList.remove("active")
                item.classList.add("hidden")
            }

        })
    })
})
/* light gallery */
lightGallery(document.getElementById("lightgallery"),{
    
})
/* aos init */
AOS.init();
/*scroll to top*/
let span = document.querySelector(".up");
window.onscroll = function () {
    this.scrollY >= 550 ? span.classList.add("show") : span.classList.remove("show");
};
span.onclick = function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
};