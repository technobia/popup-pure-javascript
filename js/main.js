(function() {
    this.LazadaModal = function() {
        this.$body = document.getElementById('popup');
    };

    LazadaModal.prototype.open = function() {
        this.$body.className = 'open';
    };

    LazadaModal.prototype.close = function() {
        this.$body.className = this.$body.className.replace('open', '');
    };
}());


if (document.readyState !== 'loading') {
    onLoad()
} else {
    document.addEventListener('DOMContentLoaded', onLoad)
}

function onLoad() {
    var lazadaModal = new LazadaModal();

    var openButton = document.getElementById('btn-open');
    var closeButton = document.getElementById('btn-close');

    openButton.addEventListener('click', function() {
        lazadaModal.open();
    });

    closeButton.addEventListener('click', function() {
        lazadaModal.close();
    });
}