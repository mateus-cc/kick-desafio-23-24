function nomeAleatorio() {
  const lista = ['Mateus', 'Fernanda', 'Neuza', 'Carlos', 'Joaquim', 'Laura', 'Mel', 'Panqueca', 'Angela', 'Mercedes'];
  const nomeAleatorio = lista[Math.floor(Math.random() * lista.length)];
  return nomeAleatorio

}

console.log(nomeAleatorio());
