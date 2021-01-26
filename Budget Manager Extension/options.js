$(function () {
    //we need to get the value of limit if its already stored
    chrome.storage.sync.get('limit', function (budget) {
        $('#limit').val(budget.limit);
    })


    $('#saveLimit').click(function () {
        var limit = $('#limit').val();
        if (limit) {
            chrome.storage.sync.set({ 'limit': limit }, function () {
                //we can close the tab also,when the user clicks on the button by using close()
                //Hence ,we can set the value of limit in chrome storage and then close the tab.
                close();
            });
        }
    });

    $('#resetTotal').click(function () {
        chrome.storage.sync.set({ 'total': 0 }, function () {
            var notifOptions = {
                type: 'basic',
                iconUrl: 'icon48.png',
                title: 'Total Reset!',
                message: "Total has been reset to 0 "
            };
            chrome.notifications.create('resetNotif', notifOptions);
        });
    })
});