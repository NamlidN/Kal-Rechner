function rech(event) {
    event.preventDefault()
    const M = document.getElementById('M').checked
    const W = document.getElementById('W').checked
    const kg = Number(document.getElementById('Kg').value)
    const age = document.getElementById('Age').value
    const gewicht = document.getElementById('Gewicht').value
    const pal = document.getElementById('Arbeit-Freizeit').value
    console.log(M);
    console.log(W);
    if (M == true) {
        const Grund = 664.7 + (13.7 * gewicht) + (5 * kg) - (6.5 * age)
            //4.1868

        document.getElementById('kc').innerHTML = Grund.toFixed(2)
        let grundkj = Grund * 4.1868
        document.getElementById('kj').innerHTML = grundkj.toFixed(2)
        let penis = Grund * pal
        document.getElementById('kc2').innerHTML = penis.toFixed(2)
        let tow = grundkj * pal
        document.getElementById('kj2').innerHTML = tow.toFixed(2)
    } //4.1868




    if (W == true) {

        const Grund = 655.1 + (9.6 * gewicht) + (1.8 * kg) - (4.7 * age)

        document.getElementById('kc').innerHTML = Grund.toFixed(2)
        let grundkj = Grund * 4.1868
        document.getElementById('kj').innerHTML = grundkj.toFixed(2)
        let penis = Grund * pal
        document.getElementById('kc2').innerHTML = penis.toFixed(2)
        let tow = grundkj * pal
        document.getElementById('kj2').innerHTML = tow.toFixed(2)
    }
}