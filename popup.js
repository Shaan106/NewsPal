
document.addEventListener('DOMContentLoaded', function () {
    // document.querySelector('button').addEventListener('click', onclick, false)
    
    // function onclick () {
    //     chrome.tabs.query({currentWindow: true, active: true},
        
    //     function (tabs) {

    //         chrome.tabs.sendMessage(tabs[0].id, 'hi', setCount)

    //     })
    // }

    // function setCount(res) {
    //     const div = document.createElement('div')
    //     div.textContent = `${res.count} bears`
    //     document.body.appendChild(div)
    // }

    //TESTING WORD COUNTER 
    const bg = chrome.extension.getBackgroundPage()
    
    Object.keys(bg.bears).forEach(function (url) {
        const div = document.createElement('div')
        div.textContent = `${url}: ${bg.bears[url]}`
    })

}, false)