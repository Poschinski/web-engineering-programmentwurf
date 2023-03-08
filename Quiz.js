function Ergebnis(){
    const ski = document.querySelector('input[name="Ski"]').value;
    const norway = document.querySelector('input[name="Norwegen"]').checked;
    const Schweden = document.querySelector('input[name="Schweden"]').checked;
    const Island = document.querySelector('input[name="Island"]').checked;

    if((norway && Schweden && Island) ||(norway && Island && !Schweden)||(Island && Schweden && !Norwegen)||(norway && Schweden && !Island)){
        alert("sie dürfen nur ein Kästchen ausfüllen")
    }
    if(norway && !Schweden && !Island){
        alert("richtig");
    }
    if(ski === "Scheit" || ski === "gespaltenes Holz"){
        alert("richtig");
    }

}