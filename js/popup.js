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

    LazadaModal.prototype.switchTab = function(tabButtonList, tabContentList, element) {
        clearActiveTab(tabButtonList);
        clearActiveTab(tabContentList);

        var selectedId = getHash(element.firstChild.getAttribute('href'));
        activeSelectTab(document.getElementById(selectedId));
        activeSelectTab(element);
    };

    function clearActiveTab(list) {
        list.forEach(function(e) {
            e.className = e.className.replace(' active', '');
        });
    }

    function activeSelectTab(tabContent) {
        tabContent.className = tabContent.className + ' active';
    }
}());

function getHash(url) {
    var hashPos = url.lastIndexOf('#');
    return url.substring(hashPos + 1);
}