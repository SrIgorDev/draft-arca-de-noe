const imgs = ["imgs/bahiaxsport.png", "imgs/alfenensexgalo.png"];
const color = ["#1935e0", "#6FC984"]

function onLoad(){
    let game_img = document.querySelector('#game-img');
    let index = Math.floor((Math.random() * 2));

    game_img.src = imgs[index];
    document.documentElement.style.setProperty('--team_color', color[index]);
}