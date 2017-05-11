(function() {
    this.switchTab = function(tabButtonList, tabContentList, element) {
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