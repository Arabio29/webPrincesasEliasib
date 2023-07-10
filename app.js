/*Mi primera web, desde 0 solo con html, css y javascript. Estoy aprendiendo React como framework, es necesario. 
Tambien estoy aprendiendo MySQL y mongoDB con node.js para manejar mis bases de datos :)
10/07/2023 "No dejaré de aprender nunca" Eliasib Cantor*/

const form = document.getElementById("myForm");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const nombre = form.nombre.value;
    const apellido = form.apellido.value;
    const date = form.date.value;
    const documento = form.documento.value;
    const celular = form.celular.value;
    alert(`Nombre: ${nombre}\nApellido: ${apellido}\nFecha de nacimiento: ${date}\nDocumento: ${documento}\nCelular: ${celular}\n`);
    form.reset();
});


