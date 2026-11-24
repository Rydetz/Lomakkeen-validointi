function tarkistalomake() {
    event.preventDefault()

    let meneekolapi = true
    const kayttaja = document.getElementById("kayttaja").value
    const lisatieto = document.getElementById("lisatieto").value
    const postnum = document.getElementById("postnum").value
    const sahkoposti = document.getElementById("sahkoposti").value
    const salasana = document.getElementById("salasana").value


    let kayttisntf = document.getElementById("kayttajaVirhe")
    if (kayttaja == "") {
        kayttisntf.textContent = "Käyttäjä puuttuu!"
        meneekolapi = false
    } else {
        if (kayttaja.length < 6) {
            kayttisntf.textContent = "Käyttäjänimi tulee olla vähintään 6 merkkiä!"
            meneekolapi = false
        } else {
            kayttisntf.textContent = ""
        }
    }

    let postintf = document.getElementById("postnumVirhe")
    if (postnum == "") {
        postintf.textContent = "Postinumero puuttuu!"
        meneekolapi = false
    } else {
        if (postnum.length != 5) {
            postintf.textContent = "Postinumero tulee olla 5 merkkiä pitkä!"
            meneekolapi = false
        } else if (!/^[0-9]+$/.test(postnum)) {
            postintf.textContent = "Postinumerossa saa olla vain numeroita!"
            meneekolapi = false
        } else {
            postintf.textContent = ""
        }
    }

    let sahkopostitf = document.getElementById("spostiVirhe")

    if (sahkoposti == "") {
        sahkopostitf.textContent = "Sähköposti puuttuu!"
        meneekolapi = false
    }
    else if (!sahkoposti.includes("@")) {
        sahkopostitf.textContent = "Sähköposti ei ole oikeassa muodossa!"
        meneekolapi = false
    }
    else if (!sahkoposti.includes(".")) {
        sahkopostitf.textContent = "Sähköposti ei ole oikeassa muodossa!"
        meneekolapi = false
    }
    else {
        sahkopostitf.textContent = ""
    }

    let salasanantf = document.getElementById("salasanaVirhe")
    if (salasana == "") {
        salasanantf.textContent = "Salasana puuttuu!"
        meneekolapi = false
    }
    else if (salasana.length < 6) {
        salasanantf.textContent = "Salasanan pitää olla vähintään 6 merkkiä!"
        meneekolapi = false
    }
    else if (!/[0-9]/.test(salasana)) {
        salasanantf.textContent = "Salasanassa pitää olla numero!"
        meneekolapi = false
    }
    else if (!/[A-Z]/.test(salasana)) {
        salasanantf.textContent = "Salasanassa pitää olla iso kirjain!"
        meneekolapi = false
    }
    else if (!/[!@£$€&%#]/.test(salasana)) {
        salasanantf.textContent = "Salasanassa pitää olla erikoismerkki!"
        meneekolapi = false
    }
    else {
        salasanantf.textContent = ""
    }


    let lomakeInfo = document.getElementById("lomakeInfo")
    if (meneekolapi == true) {
        lomakeInfo.textContent = "Lomake meni läpi!"
        lomakeInfo.className = "lapimeni"
    } else {
        lomakeInfo.textContent = ""
        lomakeInfo.className = ""
    }
}


const laheta = document.getElementById("lahetax") 
laheta.onclick = function(event) {
    tarkistalomake(event)
}