const fog = document.getElementById('fog') as HTMLElement;
const tryButton = document.getElementById('tryBytt') as HTMLButtonElement;
const loginContainer = document.querySelector('.login-container') as HTMLElement;
const exitButton = document.querySelector('.exit') as HTMLButtonElement;

const showLoginContainer = (): void => {
  if (fog) {
    fog.classList.add('active');
  }
};

const hideLoginContainer = (): void => {
  if (fog) {
    fog.classList.remove('active');
  }
};

const handleFogClick = (event: MouseEvent): void => {
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
