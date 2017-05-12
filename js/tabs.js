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
        this._clearActiveTab(this.tabButtonList);
        this._clearActiveTab(this.tabContentList);

        var selectedId = getHash(element.firstChild.getAttribute('href'));
        this._activeSelectTab(document.getElementById(selectedId));
        this._activeSelectTab(element);
    };

    SwitchTab.prototype._clearActiveTab = function(list) {
        list.forEach(function(e) {
            e.className = e.className.replace(' active', '');
        });
    };

    SwitchTab.prototype._activeSelectTab = function(tabContent) {
        tabContent.className = tabContent.className + ' active';
    };
}());