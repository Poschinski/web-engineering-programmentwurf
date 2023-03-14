//Suchen der id="change-color-button"
const changeColorButton = document.querySelector('#change-color-button');
//Event hinzufügen(die Funktion wird erst ausgeführt, wenn der button geklickt wird)
changeColorButton.addEventListener('click', function() {
  const islandCheckbox = document.querySelector('#island-checkbox');
  //mit der if-Funktion festlegen, wann eine checkbox beim submitten grün wird und wann sie rot wird
  //Frage 1
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
  //Frage 2
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
  //Frage 3
  const Datum1 = document.querySelector('#date1');
  if (Datum1.checked) {
    Datum1.nextElementSibling.style.backgroundColor = 'red';
  } else {
    Datum1.nextElementSibling.style.backgroundColor = '';
  }
  const Datum2 = document.querySelector('#date2');
  if (Datum2.checked) {
    Datum2.nextElementSibling.style.backgroundColor = 'red';
  } else {
    Datum2.nextElementSibling.style.backgroundColor = '';
  }
  const Datum3 = document.querySelector('#date3');
  if (Datum3.checked) {
    Datum3.nextElementSibling.style.backgroundColor = 'green';
  } else {
    Datum3.nextElementSibling.style.backgroundColor = '';
  }
  //Frage 4
  const Antwort1 = document.querySelector('#antwort1');
  if (Antwort1.checked) {
    Antwort1.nextElementSibling.style.backgroundColor = 'red';
  } else {
    Antwort1.nextElementSibling.style.backgroundColor = '';
  }
  const Antwort2  = document.querySelector('#antwort2');
  if (Antwort2.checked) {
    Antwort2.nextElementSibling.style.backgroundColor = 'red';
  } else {
    Antwort2.nextElementSibling.style.backgroundColor = '';
  }
  const Antwort3 = document.querySelector('#antwort3');
  if (Antwort3.checked) {
    Antwort3.nextElementSibling.style.backgroundColor = 'green';
  } else {
    Antwort3.nextElementSibling.style.backgroundColor = '';
  }
  //Frage 5
  const a = document.querySelector('#a');
  if (a.checked) {
    a.nextElementSibling.style.backgroundColor = 'red';
  } else {
    a.nextElementSibling.style.backgroundColor = '';
  }
  const b = document.querySelector('#b');
  if (b.checked) {
    b.nextElementSibling.style.backgroundColor = 'green';
  } else {
    b.nextElementSibling.style.backgroundColor = '';
  }
  const c = document.querySelector('#c');
  if (c.checked) {
    c.nextElementSibling.style.backgroundColor = 'red';
  } else {
    c.nextElementSibling.style.backgroundColor = '';
  }
  const d = document.querySelector('#d');
  if (d.checked) {
    d.nextElementSibling.style.backgroundColor = 'red';
  } else {
    d.nextElementSibling.style.backgroundColor = '';
  }
  //Frage 6
  const a2 = document.querySelector('#a2');
  if (a2.checked) {
    a2.nextElementSibling.style.backgroundColor = 'red';
  } else {
    a2.nextElementSibling.style.backgroundColor = '';
  }
  const b2 = document.querySelector('#b2');
  if (b2.checked) {
    b2.nextElementSibling.style.backgroundColor = 'green';
  } else {
    b2.nextElementSibling.style.backgroundColor = '';
  }
  const c2 = document.querySelector('#c2');
  if (c2.checked) {
    c2.nextElementSibling.style.backgroundColor = 'red';
  } else {
    c2.nextElementSibling.style.backgroundColor = '';
  }
  const d2 = document.querySelector('#d2');
  if (d2.checked) {
    d2.nextElementSibling.style.backgroundColor = 'red';
  } else {
    d2.nextElementSibling.style.backgroundColor = '';
  }
  //Frage 7
  const freiklettern = document.querySelector('#freiklettern');
  if (freiklettern.checked) {
    freiklettern.nextElementSibling.style.backgroundColor = 'green';
  } else {
    freiklettern.nextElementSibling.style.backgroundColor = '';
  }
  const bouldern = document.querySelector('#bouldern');
  if (bouldern.checked) {
    bouldern.nextElementSibling.style.backgroundColor = 'red';
  } else {
    bouldern.nextElementSibling.style.backgroundColor = '';
  }
  const sportklettern = document.querySelector('#sportklettern');
  if (sportklettern.checked) {
    sportklettern.nextElementSibling.style.backgroundColor = 'red';
  } else {
    sportklettern.nextElementSibling.style.backgroundColor = '';
  }
  const freesolo = document.querySelector('#freesolo');
  if (freesolo.checked) {
    freesolo.nextElementSibling.style.backgroundColor = 'red';
  } else {
    freesolo.nextElementSibling.style.backgroundColor = '';
  }
});
