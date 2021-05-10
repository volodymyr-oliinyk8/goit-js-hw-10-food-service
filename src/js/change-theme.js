const refs = {
  body: document.querySelector('body'),
  switch: document.querySelector('#theme-switch-toggle'),
};

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

refs.switch.addEventListener('change', switchTheme);

onStartTheme();

function switchTheme() {
  if (refs.body.classList.contains(Theme.DARK)) {
    refs.body.classList.add(Theme.LIGHT);
    refs.body.classList.remove(Theme.DARK);
    localStorage.setItem('theme', Theme.LIGHT);
  } else {
    refs.body.classList.add(Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
    refs.body.classList.remove(Theme.LIGHT);
  };
}

function onStartTheme() {
  if (localStorage.getItem('theme')) {
    refs.body.classList.add(localStorage.getItem('theme'));
    refs.switch.checked = localStorage.getItem('theme') === Theme.DARK ? true : false;
  } else {
    refs.body.classList.add(Theme.LIGHT)
  }
}
  
