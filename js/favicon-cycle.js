var odd = true;

var cycleFavicon = function() {
    changeFavicon(
        odd ? '/img/favicon-bis.gif' : '/img/favicon.gif'
    );

    odd = !odd;
};

window.setInterval(cycleFavicon, 700);

function changeFavicon(src) {
    var previousLink = document.getElementById('favicon');
    var link = document.createElement('link');
    link.id = 'favicon';
    link.rel = 'shortcut icon';
    link.href = src;

    if (previousLink) {
        document.head.removeChild(previousLink);
    }

    document.head.appendChild(link);
}
