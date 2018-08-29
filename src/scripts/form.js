const formGroups = Array.from(document.querySelectorAll('.form-group'));
const form = document.querySelector('form');

formGroups.forEach(group => {
  const input = group.querySelector('input, textarea');
  input.addEventListener('focus', () => group.classList.add('focus'));
  input.addEventListener('blur', () => {
    if (!input.value && !input.innerText) {
      group.classList.remove('focus');
    }
  });
});

document.querySelector('form .toggle').addEventListener('click', () => {
  if (form.classList.contains('show')) {
    form.classList.remove('show');
  } else {
    form.classList.add('show');
  }
});
