document.addEventListener("DOMContentLoaded", function () {
    alert("The content of the DOM is loaded");

    let  quoteContainer = document.getElementById("quoteContainer");
    let  quotesPerPage = 3;
    let  quotes = [...quotes]; 

    function displayQuotes(startIndex, count) {
        for (let i = startIndex; i < startIndex + count; i++) {
            if (i >= quotes.length) {
                window.removeEventListener("scroll", scrollHandler);
                return;
            }
            const quote = quotes[i];
            const quoteElement = document.createElement("div");
            quoteElement.classList.add("quote");
            quoteElement.innerHTML = `<p>${quote.text}</p><p class="author">- ${quote.author}</p>`;
            quoteContainer.appendChild(quoteElement);
        }
    }

    function checkScroll() {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );

        if (scrollTop + windowHeight >= documentHeight - 100) {
            displayQuotes(quoteContainer.children.length, quotesPerPage);
        }
    }
    window.addEventListener("scroll", checkScroll);

    displayQuotes(0, quotesPerPage);
});
