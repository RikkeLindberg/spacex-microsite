export function buttonCollaps() {
    const collapsible = document.querySelectorAll(".btn-collapsible");
    
    let i;
    
    for (i = 0; i < collapsible.length; i++) {
        collapsible[i].addEventListener("click", function() {
        this.classList.toggle("active");

        const content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = "100%";
            } 
        });
    }
}

export function buttonColl() {
    const coll = document.querySelectorAll(".btn-coll");

    let i;
    
    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
        this.classList.toggle("active");

        const content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = "100%";
            } 
        });
    }
}