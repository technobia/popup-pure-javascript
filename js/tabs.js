(function() {
    this.SwitchTab = function(tabs) {
        this.tabButtonList = [];
        this.tabContentList = [];

        for (var i = 0; i < tabs.length; i++) {
            if (tabs[i].nodeName == 'DIV') {
                this.tabButtonList.push(tabs[i]);
                var tabContentId = getHash(tabs[i].firstChild.getAttribute('href'));
                this.tabContentList.push(document.getElementById(tabContentId));
            }
        }
    };

    SwitchTab.prototype.doSwitch = function(element) {
        clearActiveTab(this.tabButtonList);
        clearActiveTab(this.tabContentList);

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