fetch('https://potterapi-fedeperin.vercel.app/pt/spells')
    .then(res => res.json())
    .then(json => carregaElementosPagina(json))

function carregaElementosPagina(json) {
    const table = document.createElement('div')
    for(let spells of json) {
        const feiticoTitle = document.createElement('tr');
        const feiticoDesc = document.createElement('tr');

        let feitico = document.createElement('h3');
        let desc = document.createElement('p');
        feitico.innerHTML = spells.spell;
        desc.innerHTML = spells.use;
        feiticoTitle.appendChild(feitico);
        feiticoDesc.appendChild(desc);

        table.appendChild(feiticoTitle);
        table.appendChild(feiticoDesc);
    }
    
    const resultado = document.querySelector('.resultado')
    resultado.appendChild(table);
};