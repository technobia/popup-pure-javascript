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

function getHash(url) {
    var hashPos = url.lastIndexOf('#');
    return url.substring(hashPos + 1);
}