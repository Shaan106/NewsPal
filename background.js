window.bears = {}

chrome.runtime.onMessage.addListener( function (request, sender, sendResponse) {
    window.bears[request.url] = request.count

    //alert(request.url.includes("google.com"), request.url)

    if (request.action === "updateIcon") {
        if (request.url.includes("bbc.com")) {
            chrome.browserAction.setIcon({path: "./images/BlueBadge.png"});

        }else if (request.url.includes("telegraph.com")) {
            chrome.browserAction.setIcon({path: "./images/GreenBadge.png"});

        }else if (request.url.includes("snopes.com")) {
            chrome.browserAction.setIcon({path: "./images/YellowBadge.png"});

        }else if (request.url.includes("infowars.com")) {
            chrome.browserAction.setIcon({path: "./images/OrangeBadge.png"});

        }else if (request.url.includes("theonion.com")) {
            chrome.browserAction.setIcon({path: "./images/RedBadge.png"});

        } else {
            chrome.browserAction.setIcon({path: "./images/PurpleBadge.png"});
        }
    }
})

// chrome.browserAction.onClicked.addListener( function (tab) {

//     chrome.tabs.create({url:'popup.html'})

// })


// in manifest.json ,
//    "default_popup": "popup.html"