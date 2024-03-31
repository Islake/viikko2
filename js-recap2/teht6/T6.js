'use strict';

const numLeffat = parseInt(
  prompt('Anna leffojen määrä: ')
);
const Leffat = [];

for (let i = 0; i < numLeffat; i++) {
  const nimi = prompt(`Anna leffan nimi ${i + 1}:`);
  const arvio = parseInt(prompt(`Leffan arvio ${i + 1} (1-5):`));

  if (isNaN(arvio) || arvio < 1 || arvio > 5) {
    alert('Vain arviot välillä 1 ja 5 sallittu.');
    continue;
  }

  const leffa = {
    nimi: nimi,
    arvio: arvio,
  };

  Leffat.push(leffa);
}

Leffat.sort((a, b) => b.arvio - a.arvio);

const LeffaLista = document.getElementById('LeffaLista');
Leffat.forEach((movie) => {
  const listItem = document.createElement('li');
  listItem.textContent = `${movie.nimi}: ${movie.arvio}`;
  LeffaLista.appendChild(listItem);
});


const parasArvio = Leffa[0];
document.body.innerHTML += `<p>Paras Leffa: ${parasArvio.nimi} (${parasArvio.arvio})</p>`;
