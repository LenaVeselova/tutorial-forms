const showError = (el, text) => {
    el.classList.add('error');
    el.insertAdjacentHTML(
        'afterend',
        `<span class='error-text'>${text}</span>`
    );
};

const clearError = el => {
    el.classList.remove('error');

    let parentEl = el.parentNode; //parentNode - это свойство элемента, который передаётся в функцию в качестве аргумента el

    let textEl = parentEl.querySelector('.error-text'); //querySelector здесь не как метод document вызываться, а как метод найденного "родителя". '.error-text' это селектор, по которому можно найти span с текстом ошибки. В кавычках, потому что это строка
    if (textEl !== null) { //если не ставить проверку if, будет ошибка, т.к. при первом вызове ещё нет текста с ошибкой и textEl просто отсутствует, а если его нет, то и удалять нечего

        parentEl.removeChild(textEl); //Родитель удаляет потомка
    }
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

const clearEl = form.querySelector("button[type='reset']");
clearEl.addEventListener('click', e => {
    let x = form.querySelectorAll('.error');
    clearError();
});

form.querySelector('button[type="reset"]').addEventListener('click', () => {
    form.querySelectorAll('.error').forEach(el => {
        clearError(el);
    });
});