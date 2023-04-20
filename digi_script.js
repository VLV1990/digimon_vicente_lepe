
function BuscarDigimon() {
  const nombreDigimon = document.getElementById("buscador").value;
  fetch(`https://digimon-api.vercel.app/api/digimon/name/${nombreDigimon}`)
    .then(response => response.json())
    .then(data => {
      const imageUrl = data[0].img;
      const nombre = data[0].name;
      document.getElementById("digimonImagen").innerHTML = `<img src="${imageUrl}"><br><br>${nombre}`;
    })
    .catch(error => {
      document.getElementById("digimonImagen").innerHTML = `No se encontró un Digimon con el nombre "${nombreDigimon}"`;
    });
}

function muestraUnDigimon(digimon) {
  const tarjetaDigimon = document.createElement('div');
  tarjetaDigimon.classList.add('perfil-Digimon');

  const imagenDigimon = document.createElement('img');
  imagenDigimon.src = digimon.img;
  tarjetaDigimon.appendChild(imagenDigimon);

 
}


var lista = document.querySelector("#lista");
fetch('https://digimon-api.vercel.app/api/digimon')
  .then(response => response.json())
  .then(datos => {
    tabla(datos)
  });
function tabla(datos) {
  lista.innerHTML = ""
  for (let temp of datos) {
    lista.innerHTML +=
      `
  <tr>
    <th scope="row">${temp.name}</ th>
 </tr>

 ` 
 if (temp.name == 5) {
      break
    }
  }
}
