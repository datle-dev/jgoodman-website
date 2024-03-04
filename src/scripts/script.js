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


// Needs to be of scope provided by var so that cursor can be
// destroyed and reassigned properly
var cursorEffect;
const body = document.querySelector('body');
const cursorSelect = document.querySelector('#cursor-select');
const bgSelect = document.querySelector('#bg-select');


window.addEventListener("load", (event) => {
    // check for previous cursor selection
    if (localStorage.getItem('cursorSelect')) {
        setCursorEffect(localStorage.getItem('cursorSelect'));
    } else {
        setCursorEffect(cursorSelect.options[0].value)
    }

    if (localStorage.getItem('cursorSelectIndex')) {
        cursorSelect.options[Number(localStorage.getItem('cursorSelectIndex'))].selected = true;
    } else {
        cursorSelect.options[0].selected = true;
    }

    // check for previous background image selection
    if (localStorage.getItem('bgSelect')) {
        setBgImage(localStorage.getItem('bgSelect'));
    } else {
        setBgImage(bgSelect.options[0].value)
    }

    if (localStorage.getItem('bgSelectIndex')) {
        bgSelect.options[Number(localStorage.getItem('bgSelectIndex'))].selected = true;
    } else {
        bgSelect.options[0].selected = true;
    }
});


function setCursorEffect(effect) {
    switch (effect) {
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


function setBgImage(image) {
    switch (image) {
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
}


cursorSelect.addEventListener('change', () => {
    localStorage.setItem('cursorSelect', cursorSelect.value);
    localStorage.setItem('cursorSelectIndex', cursorSelect.options.selectedIndex)
    if (cursorEffect) {
        cursorEffect.destroy();
        setCursorEffect(cursorSelect.value)
    }
});


bgSelect.addEventListener('change', () => {
    setBgImage(bgSelect.value);
    localStorage.setItem('bgSelect', bgSelect.value);
    localStorage.setItem('bgSelectIndex', bgSelect.options.selectedIndex);
});