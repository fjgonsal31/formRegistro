let form = document.getElementById("form");
let nombre = document.getElementById("nombre");
let email = document.getElementById("email");
let fecha = document.getElementById("fecha");
const today = new Date().toISOString().split('T')[0];

fecha.setAttribute("max", today);
fecha.addEventListener('keydown', function (event) {
    event.preventDefault();
});

let telefono = document.getElementById("telefono");
let pass = document.getElementById("pass");
let pass2 = document.getElementById("pass2");
let error = document.getElementById("errorPass");
let error2 = document.getElementById("errorPass2");

// validar nombre
function valNombre() {
    let error = document.getElementById("errorNombre");

    if (nombre.value.trim().length < 2) {
        error.textContent = "Introduce mínimo 2 caracteres.";
        nombre.setAttribute("class", "danger");
        return false;
    } else {
        error.textContent = "";
        nombre.setAttribute("class", "success");
        return true;
    }
}

// validar email
function valEmail() {
    let error = document.getElementById("errorEmail");
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!re.test(email.value.trim())) {
        error.textContent = "Introduce un email correcto.";
        email.setAttribute("class", "danger");
        return false;
    } else {
        error.textContent = "";
        email.setAttribute("class", "success");
        return true;
    }
}

// validar fecha
function valFecha() {
    let error = document.getElementById("errorFecha");

    if (fecha.value.length != 10) {
        error.textContent = "Introduce una fecha.";
        fecha.setAttribute("class", "danger");
        return false;
    } else {
        error.textContent = "";
        fecha.setAttribute("class", "success");
        return true;
    }

}

// validar teléfono
function valTelefono() {
    let error = document.getElementById("errorTelefono");
    const re = /^\d{9}$/;

    if (!re.test(telefono.value.trim())) {
        error.textContent = "Introduce un teléfono correcto.";
        telefono.setAttribute("class", "danger");
        return false;
    } else {
        error.textContent = "";
        telefono.setAttribute("class", "success");
        return true;
    }

}

// validar contraseñas
function valPass() {
    if (pass.value.trim().length < 6) {
        error.textContent = "Introduce mínimo 6 caracteres.";
        pass.classList.add("danger");
        return false;
    } else {
        error.textContent = "";
        pass.classList.add("success");
        pass.classList.remove("danger");
        compararPass();
        return true;
    }
}

function valPass2() {
    if (pass2.value.trim().length < 6) {
        error2.textContent = "Introduce mínimo 6 caracteres.";
        pass2.classList.add("danger");
        return false;
    } else {
        error2.textContent = "";
        pass2.classList.add("success");
        pass2.classList.remove("danger");
        compararPass();
        return true;
    }
}

function compararPass() {
    if (pass.value.trim() != pass2.value.trim()) {
        error2.textContent = "Las contraseñas no coinciden.";
        pass2.classList.add("danger");
        pass2.classList.remove("success");
        return false;
    } else {
        error2.textContent = "";
        pass2.classList.add("success");
        return true;
    }
}

// evento click en 'Enviar'
form.addEventListener("submit", function (event) {
    // console.log(event.target);
    event.preventDefault();
    let n = valNombre();
    let e = valEmail();
    let f = valFecha();
    let t = valTelefono();
    let p = valPass();
    let p2 = valPass2();

    if (n && e && f && t && p && p2) {
        this.reset();
        nombre.classList.remove("success");
        email.classList.remove("success");
        fecha.classList.remove("success");
        telefono.classList.remove("success");
        pass.classList.remove("success");
        pass2.classList.remove("success");
    } else {
        alert("error validación");
    }
});

// eventos en tiempo real
nombre.addEventListener("input", valNombre);
email.addEventListener("input", valEmail);
fecha.addEventListener("input", valFecha);
telefono.addEventListener("input", valTelefono);
pass.addEventListener("input", valPass);
pass2.addEventListener("input", valPass2);