function criptografar(texto) {
    let criptografado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
        return criptografado;
}

function descriptografar(texto) {
    let descriptografado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return descriptografado;
}

function criptografarTexto() {
    let texto = document.getElementById("input").value;
    let textoCriptografado = criptografar(texto);
    document.getElementById("output__texto").innerText = textoCriptografado;
    atualizarVisibilidade();
}

function descriptografarTexto() {
    let texto = document.getElementById("input").value;
    let textoDescriptografado = descriptografar(texto);
    document.getElementById("output__texto").innerText = textoDescriptografado;
    atualizarVisibilidade();
}

function atualizarVisibilidade() {
    let texto = document.getElementById("input").value;
    let demo = document.getElementById("demo");
    let output = document.getElementById("output");

    if (texto.trim() === "") {
        demo.style.display = "flex";
        output.style.display = "none";
    } else {
        demo.style.display = "none";
        output.style.display = "flex";
    }
}
function copiar() {
    var content = document.getElementById("output__texto").innerHTML;
  
    navigator.clipboard.writeText(content)
        .then(() => {console.log('Text copied to clipboard...')})
        .catch(err => {
          console.log('Something went wrong', err);
        })
  }
  

