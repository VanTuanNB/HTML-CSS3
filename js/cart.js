const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const app = {
    // handle on check
    handleOnCheckActive(element) {
        const btnCheckbox = $(element);
        btnCheckbox.addEventListener('click', function(e) {
            this.classList.toggle('active')
        })
        
    }
}

app.handleOnCheckActive('.main__wrapper-stardust');
