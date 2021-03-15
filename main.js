const paragraph = document.querySelector('p');
paragraph.style.color = '#add8e6';

const heading = document.querySelector('h1');
heading.style.fontSize = '48px';

paragraph.innerHTML = 'Lorem ipsum dolor amet viral meh selfies drinking vinegar, intelligentsia poke flannel twee paleo enamel pin cray. Banjo celiac crucifix, kickstarter la croix air plant jianbing hashtag vinyl hell of man bun selvage schlitz banh mi. Tacos hella raclette quinoa blog, williamsburg adaptogen tbh. Hexagon af stumptown lumbersexual synth gentrify quinoa enamel pin celiac master cleanse. Truffaut typewriter shoreditch, semiotics iceland mixtape taxidermy umami distillery austin hashtag. Food truck synth wayfarers, street art banh mi actually authentic. Bitters tousled tattooed vegan neutra pug hell of fixie chia unicorn letterpress.'

const thirteenthItem = document.querySelector('#item-13');

thirteenthItem.style.opacity = "50%";

const thirdItem = document.querySelector('#item-3');

thirdItem.innerHTML = "Hi!"

const image = document.querySelector('img');

image.src = "http://www.tioxic.com/wp-content/uploads/trex_4.jpg"

image.height = 300;

const newImage = document.createElement('img');

newImage.src = 'https://images.unsplash.com/photo-1525877442103-5ddb2089b2bb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'

document.querySelector('body').appendChild(newImage);

newImage.height = 300;

const sixteenthItem = document.querySelector('li:not([class])');
sixteenthItem.classList.add('item');
sixteenthItem.setAttribute('id', 'item-16')

console.log(sixteenthItem)