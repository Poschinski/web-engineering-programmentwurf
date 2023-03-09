function Ergebnis(){
    const ski = document.querySelector('input[name="Ski"]').value;
    const norway = document.querySelector('input[name="Norwegen"]').checked;
    const Schweden = document.querySelector('input[name="Schweden"]').checked;
    const Island = document.querySelector('input[name="Island"]').checked;
    const scheit = document.querySelector('input[name="Scheit"]').checked;
    const holzbrett = document.querySelector('input[name="Holzbrett"]').checked;
    const gespalten = document.querySelector('input[name="gespaltenes Holz"]').checked;
    var norwegen = document.getElementById("norwegen");
    var Scheit = document.getElementById("Scheit");
    var Gespalten = document.getElementById("gespalten");


    if((norway && Schweden && Island) ||(norway && Island && !Schweden)||(Island && Schweden && !Norwegen)||(norway && Schweden && !Island)){
        alert("sie dürfen nur ein Kästchen ausfüllen")
    };
    if(norway && !Schweden && !Island){
        norwegen.classList.add("right");
    };
    if(scheit && !holzbrett && gespalten){
        Scheit.classList.add("right");
        Gespalten.classList.add("right");
    };
  

};