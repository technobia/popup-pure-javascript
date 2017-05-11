if (document.readyState !== 'loading') {
    onLoad()
} else {
    document.addEventListener('DOMContentLoaded', onLoad)
}

function onLoad() {
    var lazadaModal = new LazadaModal();

    // open and close popup
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
    var tabButtonList = [];
    var tabContentList = [];
    for (var i = 0; i < tabs.length; i++) {
        if (tabs[i].nodeName == 'DIV') {
            tabButtonList.push(tabs[i]);

            var tabContentId = getHash(tabs[i].firstChild.getAttribute('href'));
            tabContentList.push(document.getElementById(tabContentId));
        }
    }
    tabButtonList.forEach(function(item) {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            new switchTab(tabButtonList, tabContentList, this);
        });
    });
}