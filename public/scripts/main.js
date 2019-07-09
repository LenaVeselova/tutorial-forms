function myFunction() {
    document.querySelector(".form-control").style.color = "red";
}
myFunction();

document.getElementById("mainForm").addEventListener("submit", e => { e.preventDefault();
document.getElementById("demo").innerHTML = "Спасибо!";
});

const div = document.querySelector(".form-group")
console.log(div.classList);

div.classList.add("error");
console.log(div.classList);


document.querySelector('input[name="form-control"]').value;
document.querySelector('select[name="form-control"]').value;
document.querySelector('textarea[name="form-control"]').value;
