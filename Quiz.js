
const changeColorButton = document.querySelector('#change-color-button');
changeColorButton.addEventListener('click', function() {
  const islandCheckbox = document.querySelector('#island-checkbox');
  if (islandCheckbox.checked) {
    islandCheckbox.nextElementSibling.style.backgroundColor = 'red';
  } else {
    islandCheckbox.nextElementSibling.style.backgroundColor = '';
  }

  const norwegenCheckbox = document.querySelector('#norwegen-checkbox');
  if (norwegenCheckbox.checked) {
    norwegenCheckbox.nextElementSibling.style.backgroundColor = 'green';
  } else {
    norwegenCheckbox.nextElementSibling.style.backgroundColor = '';
  }

  const schwedenCheckbox = document.querySelector('#schweden-checkbox');
  if (schwedenCheckbox.checked) {
    schwedenCheckbox.nextElementSibling.style.backgroundColor = 'red';
  } else {
    schwedenCheckbox.nextElementSibling.style.backgroundColor = '';
  }
  const scheit =document.querySelector('#scheit')
  if (scheit.checked) {
    scheit.nextElementSibling.style.backgroundColor = 'green';
  } else {
    scheit.nextElementSibling.style.backgroundColor = '';
  }

  const holzbrett = document.querySelector('#holzbrett');
  if (holzbrett.checked) {
    holzbrett.nextElementSibling.style.backgroundColor = 'red';
  } else {
    holzbrett.nextElementSibling.style.backgroundColor = '';
  }

  const gespaltenesHolz = document.querySelector('#gespalten');
  if (gespalten.checked) {
    gespaltenesHolz.nextElementSibling.style.backgroundColor = 'green';
  } else {
    gespaltenesHolz.nextElementSibling.style.backgroundColor = '';
  }
});
