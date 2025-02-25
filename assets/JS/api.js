let reqNum = 32;

function fetchSpells() {
    fetch(`https://potterapi-fedeperin.vercel.app/pt/spells?index=${reqNum}`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            let contentTitle = document.getElementById("content-title");
            let contentDesc = document.getElementById("content-p");
            
            contentTitle.innerHTML = data.spell;
            contentDesc.innerHTML = data.use;
        });
}

// Initial fetch
fetchSpells();