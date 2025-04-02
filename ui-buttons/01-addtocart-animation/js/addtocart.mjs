export class AddToCartAnimation {
    constructor() {
        this.runAddToCartAnimation();
    }

    runAddToCartAnimation() {
        const btnAddtocart = document.querySelector(".btnAddToCart-js");

        btnAddtocart.addEventListener("click", () => {
            btnAddtocart.classList.add("clicked");
            btnAddtocart.setAttribute("disabled", true);

            setTimeout(() => {
                btnAddtocart.classList.remove("clicked");
                btnAddtocart.removeAttribute("disabled");
            }, 3000);
        });
    }
}

const runClassAddToCart = new AddToCartAnimation();
