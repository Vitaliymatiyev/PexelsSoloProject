let inputData = {
    myEmail: 'vitaliy.matiyev@gmail.com',
    randomPassword: '123456789vm',
    newFolder: 'Flying',
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
            .waitForElementVisible('@logInMenu', 7000)
            .click('@logInMenu')
            .click('@entryEmail')
            .setValue('@entryEmail', inputData.myEmail)
            .click('@entryPassword')
            .setValue('@entryPassword', inputData.randomPassword)
            .click('@buttonLogin')
            .click('@pexelsHomeIcon')
        browser.pause(100)
    },
    'QA6V-19 Search for Image': browser => {
        pageO
            .click('@searchBar')
            .setValue('@searchBar', inputData.newFolder)
            .click('@magnifyingGlass')
            .click('@firstImage')
        browser.pause(100)
    },
    'Creat folder': browser => {
        pageO
            .click('@collect')
            .click('@creatCollection')
            .waitForElementVisible('@title', 7000)
            .setValue('@entryCollection', inputData.newFolder)
            .click('@buttonCreat')
        browser.pause(1000)
    },
    'Select folder': browser => {
        pageO
            .click('@viewYourCollections')
            .waitForElementVisible('@profileHeader', 7000)
            .waitForElementVisible('@folderFour', 7000)
            browser.pause(1000)
            pageO.click('@folderFour')
        },
    'Delete folder': browser => {
        pageO
            .waitForElementVisible('@edit', 7000)
            .click('@edit')
            .click('@delete')
            .waitForElementVisible('@confirmDelete', 7000)
            .click('@confirmDelete')
            browser.acceptAlert()
        browser.pause(10000)
    },
}
