function incrementar() {
  const contador = document.getElementById("contador")
  let valor = parseInt(contador.textContent)
  valor++
  contador.textContent = valor.toString().padStart(2, "0")
}

function decrementar() {
  const contador = document.getElementById("contador")
  let valor = parseInt(contador.textContent)
  if (valor > 1) {
    valor--
    contador.textContent = valor.toString().padStart(2, "0")
  }
}