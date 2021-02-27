//alert('Grr...')

// chrome.runtime.onMessage.addListener( function (request, sender, sendResponse) {
//     const re = new RegExp('bear', 'gi')
//     const matches = document.documentElement.innerHTML.match(re)
//     sendResponse({count: matches.length})
// })

const re = new RegExp('bear', 'gi')
const matches = document.documentElement.innerHTML.match(re)

var matchesNum = 0

// alert(document.title)



chrome.runtime.sendMessage({
    url: window.location.href,
    count: matchesNum,
    action: 'updateIcon',
    value: false
})
