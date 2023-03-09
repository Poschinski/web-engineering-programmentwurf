//Suchen der id="change-color-button"
const changeColorButton = document.querySelector('#change-color-button');
//Eveent hinzufügen(die Funktion wird erst ausgeführt, wenn der button geklickt wird)
changeColorButton.addEventListener('click', function() {
  const islandCheckbox = document.querySelector('#island-checkbox');
  //mit der if-Funktion festlegen, wann eine checkbox beim submitten grün wird und wann sie rot wird
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
  const Datum1 = document.querySelector('#1492');
  if (Datum1.checked) {
    Datum1.nextElementSibling.style.backgroundColor = 'red';
  } else {
    Datum1.nextElementSibling.style.backgroundColor = '';
  }
  const Datum2 = document.querySelector('#1967');
  if (Datum2.checked) {
    Datum2.nextElementSibling.style.backgroundColor = 'red';
  } else {
    Datum2.nextElementSibling.style.backgroundColor = '';
  }
  const Datum3 = document.querySelector('#1850');
  if (Datum3.checked) {
    Datum3.nextElementSibling.style.backgroundColor = 'green';
  } else {
    Datum3.nextElementSibling.style.backgroundColor = '';
  }
});
