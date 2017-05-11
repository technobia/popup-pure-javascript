if (document.readyState !== 'loading') {
    onLoad()
} else {
    document.addEventListener('DOMContentLoaded', onLoad)
}

function onLoad() {
    // open and close popup
    var lazadaModal = new LazadaModal();
    var openButton = document.getElementById('btn-open');
    var closeButton = document.getElementById('btn-close');

    openButton.addEventListener('click', function() {
        lazadaModal.open();
    });

    closeButton.addEventListener('click', function() {
        lazadaModal.close();
    });

    // tabs
    var tabs = document.getElementById('tabs').childNodes;
    var switchTab = new SwitchTab(tabs);
    var tabButtonList = [];

    for (var i = 0; i < tabs.length; i++) {
        if (tabs[i].nodeName == 'DIV') {
            tabButtonList.push(tabs[i]);
        }
    }
    tabButtonList.forEach(function(item) {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            switchTab.doSwitch(this);
        });
    });
}

function getHash(url) {
    var hashPos = url.lastIndexOf('#');
    return url.substring(hashPos + 1);
}