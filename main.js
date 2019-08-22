const characters = [
  { name: 'Mario', icon: 'mario' },
  { name: 'Luigi', icon: 'luigi' },
  { name: 'Donkey Kong', icon: 'donkey_kong' },
  { name: 'Link', icon: 'link' },
  { name: 'Samus', icon: 'samus' },
  { name: 'Yoshi', icon: 'yoshi' },
  { name: 'Kirby', icon: 'kirby' },
  { name: 'Fox', icon: 'fox' },
  { name: 'Pikachu', icon: 'pikachu' },
  { name: 'Jigglypuff', icon: 'jigglypuff' },
  { name: 'Captain Falcon', icon: 'captain_falcon' },
  { name: 'Ness', icon: 'ness' },
  { name: 'Peach', icon: 'peach' },
  { name: 'Bowser', icon: 'bowser' },
  { name: 'Dr. Mario', icon: 'dr_mario' },
  { name: 'Zelda', icon: 'zelda' },
  { name: 'Sheik', icon: 'sheik' },
  { name: 'Young Link', icon: 'young_link' },
  { name: 'Ganondorf', icon: 'ganondorf' },
  { name: 'Falco', icon: 'falco' },
  { name: 'Pichu', icon: 'pichu' },
  { name: 'Mewtwo', icon: 'mewtwo' },
  { name: 'Ice Climbers', icon: 'ice_climbers' },
  { name: 'Marth', icon: 'marth' },
  { name: 'Roy', icon: 'roy' },
  { name: 'Mr. G&W', icon: 'mr_game_watch' },
];

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

let randomized = shuffle(characters);
let list = document.getElementById('list');

let n = 0;

var row;
randomized.forEach((character) => {
  if (n % 5 === 0) {
    row = document.createElement('div');
    row.className = 'row';
    list.appendChild(row);
  }

  let node = document.createElement('div');
  node.className = 'character';
  let text = document.createTextNode(character.name);
  let br = document.createElement('br');
  let img = document.createElement('img');
  img.src = './images/' + character.icon + '.jpg';
  img.style = 'width: 120px;';
  img.onclick = () => {
    if (img.classList.contains('played')) {
      img.className = '';
    } else {
      img.className = 'played';
    }
  };

  node.appendChild(img);
  node.appendChild(br);
  node.appendChild(text);

  row.appendChild(node);

  n++;
});

window.onbeforeunload = () => {
  return '';
};
