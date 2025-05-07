fetch('plataformas.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('plataformas');
    data.forEach(item => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="${item.icone}" alt="${item.nome}">
        <h2>${item.nome}</h2>
        <p>${item.descricao}</p>
        <a href="${item.link}" target="_blank">Acessar</a>
      `;
      container.appendChild(card);
    });
  });
