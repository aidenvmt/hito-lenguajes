const tableBody = document.getElementById('municipios-body');

fetch('https://www.el-tiempo.net/api/json/v2/provincias/01/municipios')
  .then(response => response.json())
  .then(data => { 
    data.forEach(municipio => {
      const row = document.createElement('tr');
      const nombreCell = document.createElement('td');
      nombreCell.textContent = municipio.NOMBRE;
      const codigoINECell = document.createElement('td');
      codigoINECell.textContent = municipio.CODIGOINE;
      const provinciaCell = document.createElement('td');
      provinciaCell.textContent = municipio.NOMBRE_PROVINCIA;
      row.appendChild(nombreCell);
      row.appendChild(codigoINECell);
      row.appendChild(provinciaCell);
      tableBody.appendChild(row);
    });
  })
  .catch(error => {
    console.log('Error:', error);
  });

  