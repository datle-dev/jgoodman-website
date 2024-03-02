import {
    ghostCursor,
    rainbowCursor,
    fairyDustCursor,
    textFlag,
    trailingCursor,
    springyEmojiCursor,
    emojiCursor,
    bubbleCursor,
    snowflakeCursor,
} from "cursor-effects";

let cursorEffect;

window.addEventListener("load", (event) => {
    cursorEffect = new ghostCursor();
});

const body = document.querySelector('body');

const cursorSelect = document.querySelector('#cursor-select');
let cursorSelectPrev = cursorSelect.value;

const bgSelect = document.querySelector('#bg-select');
let bgSelectPrev = bgSelect.value;

cursorSelect.addEventListener('change', () => {
    console.log(`switch to cursor: ${cursorSelect.value}`);
    if (cursorEffect) {
        cursorEffect.destroy();

        switch (cursorSelect.value) {
            case 'ghost':
                cursorEffect = new ghostCursor();
                break;
            case 'rainbow':
                cursorEffect = new rainbowCursor();
                break;
            case 'fairy-dust':
                cursorEffect = new fairyDustCursor();
                break;
            case 'text-flag':
                cursorEffect = new textFlag({text: "Jgoodz"});
                break;
            case 'trailing':
                cursorEffect = new trailingCursor();
                break;
            case 'emoji-elastic':
                cursorEffect = new springyEmojiCursor({ emoji: ["💀"] });
                break;
            case 'emoji-rain':
                cursorEffect = new emojiCursor({ emoji: ["😂", "🍆", "🤡"] });
                break;
            case 'bubbles':
                cursorEffect = new bubbleCursor();
                break;
            case 'snowflakes':
                cursorEffect = new snowflakeCursor();
                break;
            case 'off':
                break;
        }
    }
});

bgSelect.addEventListener('change', () => {
    console.log(`switch to bg: ${bgSelect.value}`);

    switch (bgSelect.value) {
        case 'paper':
            body.style.backgroundImage = "url('/jgoodman-website/tiles/bg-tile-paper.png')";
            break;
        case 'wood-1':
            body.style.backgroundImage = "url('/jgoodman-website/tiles/bg-tile-wood-1.jpg')";
            break;
        case 'wood-2':
            body.style.backgroundImage = "url('/jgoodman-website/tiles/bg-tile-wood-2.jpg')";
            break;
        case 'metal':
            body.style.backgroundImage = "url('/jgoodman-website/tiles/bg-tile-metal-plate.png')";
            break;
        case 'brick':
            body.style.backgroundImage = "url('/jgoodman-website/tiles/bg-tile-brick-white.png')";
            break;
        case 'pipes':
            body.style.backgroundImage = "url('/jgoodman-website/tiles/bg-tile-pipes.png')";
            break;
        case 'snow-leopard':
            body.style.backgroundImage = "url('/jgoodman-website/tiles/bg-tile-snow-leopard.png')";
            break;
        case 'none':
            body.style.backgroundImage = "none";
            break;
    }

});