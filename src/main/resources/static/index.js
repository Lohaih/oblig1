let kjop = [];

function kjopBillett(){
    const film = document.getElementById("film").value;
    const antall = Number(document.getElementById("antallBilletter").value);
    const fornavn = document.getElementById("fornavn").value;
    const etternavn = document.getElementById("etternavn").value;
    const telefonnr = document.getElementById("telefonnr").value;
    const epost = document.getElementById("epost").value;


    //Resetter error melding
    document.getElementById("sjekkFilm").innerText = "";
    document.getElementById("sjekkAntall").innerText = "";
    document.getElementById("sjekkFornavn").innerText = "";
    document.getElementById("sjekkEtternavn").innerText = "";
    document.getElementById("sjekkTelefonnr").innerText = "";
    document.getElementById("sjekkEpost").innerText = "";
    let valid = true;


    //Inputvalidering for hvert valg.
    if (film === "Velg film her") {
        document.getElementById("sjekkFilm").innerText = "Velg en film";
        document.getElementById("film").value = "Velg film her";
        valid = false;
    }

    if (isNaN(antall) ){
        document.getElementById("sjekkAntall").innerText = "Vennligst oppgi et antall";
        document.getElementById("antallBilletter").value = "0";
        valid = false;
    }else if(!Number.isInteger(antall) || antall <= 0){
        document.getElementById("sjekkAntall").innerText = "Vennligst oppgi et gyldig antall";
        document.getElementById("antallBilletter").value = "0";
        valid = false;
    }

    if (fornavn === ""){
        document.getElementById("sjekkFornavn").innerText = "Oppgi fornavn";
        document.getElementById("fornavn").value = "";
        valid = false;
    }

    if (etternavn === ""){
        document.getElementById("sjekkEtternavn").innerText = "Oppgi etternavn";
        document.getElementById("etternavn").value = "";
        valid = false;
    }

    if (telefonnr=== ""){
        document.getElementById("sjekkTelefonnr").innerText = "Oppgi et gyldig telefonnr";
        document.getElementById("telefonnr").value = "";
        valid = false;
    }
    if (epost === "" || !epost.includes("@")){
        document.getElementById("sjekkEpost").innerText = "Epost er ikke gyldig eller fylt ut";
        document.getElementById("epost").value = "";
        valid = false;
    }



    const etKjop = {
        film : film,
        antall : antall,
        fornavn : fornavn,
        etternavn : etternavn,
        telefonnr : telefonnr,
        epost : epost
    }

    reset();
    if (valid === true){
        kjop.push(etKjop);
    }else{
        return;
    }

    //Billett lagres i "kjop" array
    let ut = "<table><tr>" +
        "<th>Film</th><th>Billetter</th><th>Fornavn</th><th>Etternavn</th>" +
        "<th>Telefonnr</th><th>Epost</th>" +
        "</tr>";
    for (let p of kjop){
        ut+="<tr>";
        ut+="<td>"+p.film+"</td><td>"+p.antall+"</td><td>"+p.fornavn+"</td><td>"+p.etternavn+"</td>" +
            "<td>"+p.telefonnr+"</td><td>"+p.epost+"</td>";
        ut+="</tr>";
    }
    document.getElementById("billettArray").innerHTML=ut;
}

//Resetter alle inputs
function reset(){
    document.getElementById("film").value = "Velg film her";
    document.getElementById("antallBilletter").value = "";
    document.getElementById("fornavn").value = "";
    document.getElementById("etternavn").value = "";
    document.getElementById("telefonnr").value = "";
    document.getElementById("epost").value = "";
}


function slettBillett(){
    kjop.splice(0,kjop.length);
    document.getElementById("billettArray").innerHTML="";
}