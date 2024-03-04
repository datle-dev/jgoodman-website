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
const body = document.querySelector('body');
const cursorSelect = document.querySelector('#cursor-select');
const bgSelect = document.querySelector('#bg-select');

window.addEventListener("load", (event) => {
    // check for previous cursor selection
    if (localStorage.getItem('cursorSelect')) {
        console.log('cursor in local storage');
        setCursorEffect(localStorage.getItem('cursorSelect'));
        console.log(`cursor set to ${localStorage.getItem('cursorSelect')}`);
    } else {
        setCursorEffect(cursorSelect.options[0].value)
        console.log(`cursor set to default: ${cursorSelect.options[0].value}`)
    }

    if (localStorage.getItem('cursorSelectIndex')) {
        cursorSelect.options[Number(localStorage.getItem('cursorSelectIndex'))].selected = true;
        console.log(Number(localStorage.getItem('cursorSelectIndex')));
    } else {
        cursorSelect.options[0].selected = true;
    }

    // check for previous background image selection
    if (localStorage.getItem('bgSelect')) {
        console.log('bg in local storage');
        setBgImage(localStorage.getItem('bgSelect'));
        console.log(`bg set to ${localStorage.getItem('bgSelect')}`);
    } else {
        setBgImage(bgSelect.options[0].value)
        console.log(`bg set to default: ${bgSelect.options[0].value}`)
    }

    if (localStorage.getItem('bgSelectIndex')) {
        bgSelect.options[Number(localStorage.getItem('bgSelectIndex'))].selected = true;
        console.log(Number(localStorage.getItem('bgSelectIndex')));
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
    console.log(`cursor: ${cursorSelect.value} at index ${cursorSelect.options.selectedIndex}`);
    localStorage.setItem('cursorSelect', cursorSelect.value);
    localStorage.setItem('cursorSelectIndex', cursorSelect.options.selectedIndex)
    if (cursorEffect) {
        console.log('cursor effect exists, destroying');
        cursorEffect.destroy();
        console.log('setting cursor effect');
        setCursorEffect(cursorSelect.value)
    } else {
        console.log('no cursor effect');
    }
});

bgSelect.addEventListener('change', () => {
    setBgImage(bgSelect.value);
    console.log(`bg: ${bgSelect.value} at index ${bgSelect.options.selectedIndex}`);
    localStorage.setItem('bgSelect', bgSelect.value);
    localStorage.setItem('bgSelectIndex', bgSelect.options.selectedIndex);
});