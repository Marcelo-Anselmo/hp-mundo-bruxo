function fetchSpells() {
    fetch("https://potterapi-fedeperin.vercel.app/pt/spells")
        .then(response => response.json())
        .then(data => {
            console.log("Feitiços carregados:", data); // Debug pra ver os dados

            let container = document.createElement('div');
            container.classList.add('container');

            data.forEach(spell => { 
                let card = document.createElement('div');
                card.classList.add('cards');
                
                
                card.innerHTML = `
                    <h3 id="card-title">${spell.spell}</h3>
                    <p id="card-p">${spell.use}</p>
                `;

                container.appendChild(card);
            });

            document.body.appendChild(container);
        })
        .catch(error => console.error("Erro ao carregar os feitiços:", error));
}

// Chamando a função pra carregar os feitiços
fetchSpells();
