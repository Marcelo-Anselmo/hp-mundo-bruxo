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
function showContent(contentID, bgImage){
    const cardsContainerFilter = document.getElementById('cardsContainerFilter');
    const contents = document.querySelectorAll('.card-filter-content');

    // Esconder todos os conteúdos e os cards
    contents.forEach(content => content.style.display = 'none');
    cardsContainerFilter.style.display = 'none';

    // Exibir o conteúdo selecionado e mudar a imagem de fundo
    const selectedContent = document.getElementById(contentID);
    if(selectedContent){
        selectedContent.style.display = 'block';
        document.body.style.backgroundImage = bgImage;
        fetchSpells();
    }
}