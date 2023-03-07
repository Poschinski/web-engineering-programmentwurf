function testData(){
    const lastname = document.querySelector('input[name="name"]').value;
    const firstname = document.querySelector('input[name= "firstname"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;
    const agb = document.querySelector('input[name="agb"]').checked;

    if(lastname ==='' && firstname ==='' && email ==='' && password ===''){
        alert("please fill the gaps");
        return;
    }
    if(lastname==='' && firstname!=='' && email!=='' && password!==''){
        alert("last name is missing");
        return;
    }
    if(lastname!=='' && firstname==='' && email!=='' && password!==''){
        alert("first name is missing");
        return;
    }
    if(lastname!=='' && firstname!=='' && email==='' && password!==''){
        alert("email is missing");
        return;
    }
    if(lastname!=='' && firstname!=='' && email!=='' && password===''){
        alert("password is missing");
        return;
    }
    if(!agb){
        alert("please accept the AGB");
        return;
    }
    

    
};
