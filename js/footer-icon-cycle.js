var icons = [
    'github-alt',
    'coffee',
    'music',
    'rocket',
    'paw',
    'gamepad',
    'code-fork',
    'heart',
    'flask',
    'hand-spock-o',
];

var iconIndex = 0;

window.setInterval(function() {
    iconIndex ++;
    if (iconIndex == icons.length) {
        iconIndex = 0;
    }

    document.getElementById('footerIcon').setAttribute(
        'class',
        'fa fa-' + icons[iconIndex]
    );
}, 1700);
