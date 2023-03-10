function testData(){
    const email = document.querySelector('input[name="email"]').value;
    const kn = document.querySelector('input[name= "kreditkartennummer"]').value;
    const CVC = document.querySelector('input[name="CVC"]').value;
    const gültig = document.querySelector('input[name="gültig"]').value;
    const agb = document.querySelector('input[name="agb"]').checked;

    if(email ==='' && kn ==='' && CVC ==='' && gültig ===''){
        alert("please fill the gaps");
        return;
    }
    if(email==='' && kn!=='' && CVC!=='' && gültig!==''){
        alert("email is missing");
        return;
    }
    if(email!=='' && kn==='' && CVC!=='' && gültig!==''){
        alert("card number is missing");
        return;
    }
    if(email!=='' && kn!=='' && CVC==='' && gültig!==''){
        alert("CVC is missing");
        return;
    }
    if(email!=='' && kn!=='' && CVC!=='' && gültig===''){
        alert(" is missing");
        return;
    }
    if(!agb){
        alert("please accept the AGB");
        return;
    }
    

    
};
