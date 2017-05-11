// function VanillaModal(config) {
//     this._body = document.getElementsByTagName('body')[0];
//     var modal = document.createElement('div');
//     modal.id = 'modal' + Date.now() * 9999;
//     modal.style = 'position: absolute;left: ' + screen.width / 2 + 'px;top: ' + screen.height / 2 + 'px;transform:translate(-100%, -100%);width: 300px;height: 300px;background-color: red;z-index: 9999999';
//     this._modal = modal;
//     this.defaultPosition = this._body.style.position;
//     this.defaultOverflow = this._body.style.overflow;
//     this.defaultBackgroundColor = this._body.style.backgroundColor;
// }
//
// Object.assign(VanillaModal.prototype, {
//     open: function() {
//         this._body.style.position = 'relative';
//         this._body.style.overflow = 'hidden';
//         this._body.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
//         this._body.appendChild(this._modal);
//     },
//     close: function() {
//         this._body.style.position = this.defaultPosition;
//         this._body.style.overflow = this.defaultOverflow;
//         this._body.style.backgroundColor = this.defaultBackgroundColor;
//         this._body.removeChild(this._modal);
//     }
// })
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
    var openButton = document.getElementById('btn-open');
    var closeButton = document.getElementById('btn-close');
    var lazadaModal = new LazadaModal();

    openButton.addEventListener('click', function() {
        lazadaModal.open();
    });

    closeButton.addEventListener('click', function() {
        lazadaModal.close();
    });
}