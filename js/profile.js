const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const app = {
    // handle navigation
    handleTabCategory() {
        const btnsCategory = $$('.main__wrapper-box-item');
        const mainContents = $$('.main__wrapper-box');
        
        btnsCategory.forEach((btnCategory, index) => {
            const mainContent = mainContents[index];
            btnCategory.onclick = function () {
                $('.main__wrapper-box.active').classList.remove('active');
                mainContent.classList.add('active')
            }
        })
    },

    // handle onclick btn change
    handleOnClickChange() {
        const parentForm = $('#profile-form');
        const btnChanges = parentForm.querySelectorAll('.main__wrapper-from-group-btn-change');

        btnChanges.forEach(btnChange => {
            const authForm = btnChange.parentElement.querySelector('.main__wrapper-from-group-change-box');
            btnChange.onclick = function () {
                this.classList.toggle('active')
                authForm.classList.toggle('active');
            }
        })
    }  
}

app.handleOnClickChange();
app.handleTabCategory();
