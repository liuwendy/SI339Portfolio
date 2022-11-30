function filter(x) {
    let current = document.querySelector(".active1");
    current.className = current.className.replace(" active1", "");

    let personas = document.querySelector(".Persona");
    let JM = document.querySelector(".JM");
    let TAD = document.querySelector(".TAD");
    let NS = document.querySelector(".NS");

    if (x === 'all') {
        let click = document.querySelector(".btn1");
        click.className += " active1";
        personas.className = "Persona";
        JM.className = "JM";
        TAD.className = "TAD";
        NS.className = "NS";
    }
    else if (x === 'personas') {
        let click = document.querySelector(".btn2");
        click.className += " active1";
        personas.className = "Persona";
        JM.className += " hide";
        TAD.className += " hide";
        NS.className += " hide";
    }
    else if (x === 'JM') {
        let click = document.querySelector(".btn3");
        click.className += " active1";
        personas.className += " hide";
        JM.className = "JM";
        TAD.className += " hide";
        NS.className += " hide";

    }
    else if (x === 'TAD') {
        let click = document.querySelector(".btn4");
        click.className += " active1";
        personas.className += " hide";
        JM.className += " hide";
        TAD.className = "TAD";
        NS.className += " hide";

    }
    else if (x === 'NS') {
        let click = document.querySelector(".btn5");
        click.className += " active1";
        personas.className += " hide";
        JM.className += " hide";
        TAD.className += " hide";
        NS.className = "NS";

    }
}
