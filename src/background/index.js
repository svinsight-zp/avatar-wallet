/* global chrome */

chrome.runtime.onInstalled.addListener(function() {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function(){
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [
                new chrome.declarativeContent.PageStateMatcher({pageUrl: {}}),
            ],
            actions: [
                new window.chrome.declarativeContent.showPageAction()
            ]
        }])
    })
})