const showError = (er, text) => {
    er.classList.add('error');
    er.insertAdjacentHTML(
        'afterend',
        `<span class='error-text'>${text}</span>`
    );
};

const clearError = el => {
    el.classList.remove('error');
};

const form = document.getElementById('mainForm');
form.addEventListener('submit', e => {
    e.preventDefault();

    let nameEl = document.querySelector("input[name='name']");

    clearError(nameEl);

    let name = nameEl.value;

    if (name.length < 5) {
        showError(nameEl, 'Наименование должно содержать не менее 5 символов')
    }


    let catEl = document.querySelector("select[name='category']");
    clearError(catEl);

    let category = catEl.value;

    if (Number(category) < 1) {
        showError(catEl, 'Пожалуйста, выберите категорию')
    }

    let descEl = document.querySelector("textarea[name='description']");
    clearError(descEl);

    let description = descEl.value;
    if (description.length < 10) {
        showError(descEl, 'Описание должно содержать не менее 10 символов')
    }
});
