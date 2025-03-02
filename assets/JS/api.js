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


// filtro dinâmico
function FiltrarSeletor(contentId, bgImage) {
    const cardsContainer = document.getElementById('cardsContainer');
    const contents = document.querySelectorAll('.seletor-content');

    contents.forEach(content => content.style.display = 'none');
    if (cardsContainer) {
        cardsContainer.style.display = 'none';
    }

    const selectedContent = document.getElementById(contentId);
    if (selectedContent) {
        selectedContent.style.display = 'block';
        document.body.style.backgroundImage = bgImage;
    } else if (contentId === 'seletor-speels') {
        // Lógica para exibir feitiços
        fetchSpells();
    } else if (contentId === 'seletor-potions') {
        // Lógica para exibir poções
        fetchPotions();
    } else if (contentId === 'seletor-cards') {
        // Lógica para exibir cards
        fetchCards();
    }
}