// let reqNum = 0;
// fetch(`https://potterapi-fedeperin.vercel.app/pt/spells?index=${reqNum}`)
fetch(`https://potterapi-fedeperin.vercel.app/pt/spells`)
    .then(res => res.json())
    .then(data => console.log(data))

function carregaElementosPagina(data) {
    const div = document.createElement('div')
    for(let spells of data){
        const feiticoTitle = document.createElement('h3');
        const feiticoDesc = document.createElement('p');


        let feitico = document.createElement('h3');
        let desc = document.createElement('p');
        feitico.innerHTML = spells.spell;
        desc.innerHTML = spells.use;
        feiticoTitle.appendChild(feitico);
        feiticoDesc.appendChild(desc);

        div.appendChild(feiticoTitle);
        div.appendChild(feiticoDesc);
    }

    const resultado = document.querySelector('.resultado')
    resultado.appendChild(div);
}