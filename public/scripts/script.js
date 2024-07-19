"use strict";
const fog = document.getElementById('fog');
const tryButton = document.getElementById('tryBytt');
const loginContainer = document.querySelector('.login-container');
const exitButton = document.querySelector('.exit');
const showLoginContainer = () => {
    if (fog) {
        fog.classList.add('active');
    }
};
const hideLoginContainer = () => {
    if (fog) {
        fog.classList.remove('active');
    }
};
const handleFogClick = (event) => {
    if (event.target === fog) {
        hideLoginContainer();
    }
};
if (tryButton) {
    tryButton.addEventListener('click', showLoginContainer);
}
if (fog) {
    fog.addEventListener('click', handleFogClick);
}
if (exitButton) {
    exitButton.addEventListener('click', hideLoginContainer);
}
