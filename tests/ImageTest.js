let inputData = {
    myEmail: 'vitaliy.matiyev@gmail.com',
    randomPassword: '123456789vm',
}
let pageO = {}
module.exports = {
    before: browser => {
        pageO = browser.page.pageO()
        pageO.navigate()
    },
    after: browser => {
        browser.end()
    },

    'Log in to Account': browser => {
        pageO
            .click('@dropDown')
            .waitForElementVisible('@logInMenu', 3000)
            .click('@logInMenu')
            .click('@entryEmail')
            .setValue('@entryEmail', inputData.myEmail)
            .click('@entryPassword')
            .setValue('@entryPassword', inputData.randomPassword)
            .click('@buttonLogin')
            .click('@pexelsHomeIcon')
        browser.pause(100)
    },
    ' QA6V-18 Search for Image': () => {
        pageO
            .click('@searchBar')
            .setValue('@searchBar', 'Mountains blue')
            .click('@magnifyingGlass')
            .waitForElementVisible('@confirmMountain', 3000)
    },
    'Image actions': browser => {
        pageO
            .click('@firstImage')
            .waitForElementVisible('@freeDownload', 3000)
            .click('@freeDownload')
            .waitForElementVisible('@iconHeart', 5000, false, function (result) {
                if (result.value === true) {
                    console.log('Value', result.value)
                    pageO.click('@iconHeart')
                }
            })
            .click('@collect')
            .waitForElementVisible('@mountainImages', 5000, false, function (result) {
                if (result.value === true) {
                    console.log('Value', result.value)
                    pageO.click('@mountainImages')
                }
            })
        .click('@viewYourCollections')
        browser.pause(80000)
    }
}