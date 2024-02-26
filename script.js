let saldo = 0;

function aggiornaSaldo() {
    document.getElementById('saldo').textContent = `Saldo: €${saldo}`;
}

function deposita() {
    const importo = parseInt(document.getElementById('importo').value);
    if (importo > 0) {
        saldo += importo;
        aggiornaSaldo();
        document.getElementById('feedback').textContent = `Hai depositato €${importo}.`;
    } else {
        document.getElementById('feedback').textContent = "Inserisci un importo valido.";
    }
}

function ritira() {
    const importo = parseInt(document.getElementById('importo').value);
    if (importo > 0 && importo <= saldo) {
        saldo -= importo;
        aggiornaSaldo();
        document.getElementById('feedback').textContent = `Hai ritirato €${importo}.`;
    } else {
        document.getElementById('feedback').textContent = "Importo non valido o saldo insufficiente.";
    }
}

function bonifico() {
    
    const importo = parseInt(document.getElementById('importo').value);
    if (importo > 0 && importo <= saldo) {
        saldo -= importo;
        aggiornaSaldo();
        const contoDestinazione = document.getElementById('contoDestinazione').value;
        document.getElementById('feedback').textContent = `Hai trasferito €${importo} al conto ${contoDestinazione}.`;
    } else {
        document.getElementById('feedback').textContent = "Importo non valido o saldo insufficiente.";
    }
}

function esci() {
    document.getElementById('feedback').textContent = "Grazie per aver usato lo sportello bancario.";
   
}
