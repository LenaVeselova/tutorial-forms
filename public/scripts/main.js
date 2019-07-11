const form = document.getElementById('mainForm');
form.addEventListener('submit', e => {
    e.preventDefault();

    let nameEl = document.querySelector("input[name='name']");
    nameEl.classList.remove('error');

    let name = nameEl.value;

    if (name.length < 5) {
        nameEl.classList.add('error');
        nameEl.insertAdjacentHTML(
            'afterend',
            '<span>Наименование должно содержать не менее 5 символов</span>'
        );
    }

    let catEl = document.querySelector("select[name='category']");
    catEl.classList.remove('error');

    let category = catEl.value;

    if (Number(category) < 1) {
        catEl.classList.add('error');
        catEl.insertAdjacentHTML(
            'afterend',
            '<span>Пожалуйста, выберите категорию</span>'
        );
    }

    let descEl = document.querySelector("textarea[name='description']");
    descEl.classList.remove('error');

    let description = descEl.value;
    if (description.length < 10) {
        descEl.classList.add('error');
        descEl.insertAdjacentHTML(
            'afterend',
            '<span>Описание должно содержать не менее 10 символов</span>'
        );
    }
});