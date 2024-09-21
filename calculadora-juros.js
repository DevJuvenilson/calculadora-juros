const meses = document.getElementById('tempo-meses');
meses.addEventListener('input', calcularAnos);

function calcularAnos() {
    if (meses.value > 0) {
        const anos = document.getElementById('tempo-anos');
        anos.value = (meses.value / 12).toFixed(1);
    }
}

async function calcularInvestimento(tipoJuros, capitalInicial, meses, aporteMensal, taxaJuros, periodo) {

    if (tipoJuros != null) {
        if (tipoJuros === 'juros-compostos') {
            await calcularJurosCompostos(capitalInicial, meses, aporteMensal, taxaJuros, periodo);
        } else if (tipoJuros === 'juros-simples') {
            await calcularJurosSimples(capitalInicial, meses, aporteMensal, taxaJuros, periodo)
        }
    } else {
        alert('Insira valores válidos')
    };
};

async function calcularJurosCompostos(capitalInicial, meses, aporteMensal, taxaJuros, periodo) {
    //CALCULO
    if (capitalInicial >= 0 && meses >= 0 && aporteMensal >= 0 && taxaJuros >= 0 && periodo != null) {

        const taxa = taxaJuros / 100;
        const saldoTotal = capitalInicial * ((1 + taxa) ** meses);
        const jurosRendidos = saldoTotal - capitalInicial;
        const campoSaldoTotal = document.getElementById('valor-calculado');
        const campoJurosGerados = document.getElementById('juros-gerados');

        campoSaldoTotal.innerHTML = `
            <h1>SALDO TOTAL:</h1>
            <p>R$ ${saldoTotal.toFixed(2)}</p>
        `;

        campoJurosGerados.innerHTML = `
            <h1>JUROS GERADOS:</h1>
            <p>R$ ${jurosRendidos.toFixed(2)}</p>
        `
    } else {
        alert('Insira valores válidos')
    };
};

async function calcularJurosSimples(capitalInicial, meses, aporteMensal, taxaJuros, periodo) {
    //CALCULO
    if (capitalInicial >= 0 && meses >= 0 && aporteMensal >= 0 && taxaJuros >= 0 && periodo != null) {

        const taxa = taxaJuros / 100;
        const saldoTotal = parseFloat(capitalInicial) + parseFloat(capitalInicial * taxa * meses);
        const jurosRendidos = saldoTotal - parseFloat(capitalInicial);
        const campoSaldoTotal = document.getElementById('valor-calculado');
        const campoJurosGerados = document.getElementById('juros-gerados');

        campoSaldoTotal.innerHTML = `
            <h1>SALDO TOTAL:</h1>
            <p>R$ ${saldoTotal.toFixed(2)}</p>
        `;

        campoJurosGerados.innerHTML = `
            <h1>JUROS GERADOS:</h1>
            <p>R$ ${jurosRendidos.toFixed(2)}</p>
        `
    } else {
        alert('Insira valores válidos')
    };
};