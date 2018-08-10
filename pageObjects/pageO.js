module.exports = {
    url: 'https://www.pexels.com/',
    elements: {
        // Log in
        profileHeaderTitle: 'h1[class="profile-header__title"]',
        pexelsHomeIcon: 'a[class="navbar__title__anchor"]',
        dropDown: 'span[class="icon-dot"]',
        logInMenu: 'a[href="/login/"]',
        loginTab: 'a[class="tabs__tab tabs__tab--active"]',
        entryEmail: 'input[id="user_email"]',
        entryPassword: 'input[id="user_password"]',
        buttonLogin: 'input[value="Login"]',
        //  Image Components   
        searchBar: 'input[class="search__input"]',
        magnifyingGlass: 'button[class="search__icon"]',
        firstImage: {
            selector: '(//a[@class="js-photo-link"])[1]', locateStrategy: 'xpath',
        },
        confirmMountain: 'h1[class="title__headline"]',
        freeDownload: '.btn__primary.js-download',
        iconHeart: 'button.btn-quiet.js-like.btn-like',
        collect: 'button.btn-quiet.js-collect',
        mountainFolder: 'div[class="collection__img o-clip o-clip--cover"]',
        yourCollections: 'a[href="/me/collections/"]',
        yourLikes: 'a[href="/@vitaliy-matiyev-552939/likes/"]',
        yourDownloads: 'a[href="/@vitaliy-matiyev-552939/downloads/"]',
        customMountain: 'a[href="/collections/mountains-yoai6sb/"]',
        saveToCollection: 'h4[class="collections__title"]',
        viewYourCollections: {
            selector: '(//a[@href="/me/collections/"])[2]', 
            locateStrategy: 'xpath',
        },
        mountainImages: 'div[data-collection-id="yoai6sb"]',
        profileHeader: 'h1[class="profile-header__title"]',
        // Creat Collection
        creatCollection: 'button[class="btn-quiet btn--sm"]',
        entryCollection: 'input[name="collection_title"]',
        buttonCreat: 'button.btn-secondary',
        title: 'label[for="collection_title"]',
        folderFour: {
            selector: '(//h3[contains(text(),"Flying")])/parent::div/parent::div', locateStrategy: 'xpath',
        },
        // edit: '//a[contains(.,"Edit")]',
        edit: { selector: '//span[text()="Edit"]', locateStrategy: 'xpath' },
        delete: 'svg[class="svg-icon"]',
        confirmDelete: 'input[class="btn-warning"]',
    }
}

