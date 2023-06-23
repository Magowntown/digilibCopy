// variables
import Auth from "./Auth.ts";

const username = document.querySelector('#username');
const emailEl = document.querySelector('#email');
const passwordEl = document.querySelector('#password');
const formEl = document.querySelector('form');


formEl.addEventListener('submit', e => {
    e.preventDefault();

    const newUser = {
        password: passwordEl.value,
        email: emailEl.value,
        username: username.value
    }

    const registerAuth = new Auth();

    if (registerAuth.register(newUser, '')) {
        registerAuth.login({email: newUser.email, password: newUser.password}, '')
    }


})
