(function() {
    this.LazadaModal = function() {
        this.$body = document.getElementById('popup');
    };

    LazadaModal.prototype.open = function() {
        this.$body.className = 'open';
        this.resetForm();
    };

    LazadaModal.prototype.close = function() {
        this.$body.className = this.$body.className.replace('open', '');
    };

    LazadaModal.prototype.resetForm = function() {
        var inputTagList = document.getElementsByTagName('input');
        for (var i = 0; i < inputTagList.length; i++) {
            inputTagList[i].className = inputTagList[i].className.replace(' has-error', '');
            inputTagList[i].value = '';
        }
    };
}());