
module.exports = {
    url: function() {
        return this.api.launchUrl + "/sba/p2p/buyer/verification";
    },
    elements: {
        playVideo: {
            selector: ".play-video",
        },
        closeVideo: {
            selector: ".close",
        },
        pauseVideo: {
            selector: "[data-title-pause='Pause']",
        },
        likeButton: {
            selector: ".like-button",
        },
        faPlay: {
            selector: ".play-video > .fa",
        },
        playIcon: {
            selector: "//img[@class='play-icon']",
            locateStrategy: "xpath",
        },
        playClose: {
            selector: "//button[@class='close']",
            locateStrategy: "xpath",
        },
        playIcons: {
            selector: ".play-icon",
        },
        closeIcon: {
            selector: "//button[@aria-label='Close']",
            locateStrategy: "xpath",
        },
        pauseIcon: {
            selector: "//button[@aria-label='Pause']",
            locateStrategy: "xpath",
        },
        target: {
            selector: ".target",
        },
        howTo: {
            selector: "//i[@class='fa fa-play-circle-o']",
            locateStrategy: "xpath",
        },
        deskTopLogo: {
            selector: ".desktop-logo",
        },
        continue: {
            selector: ".continue",
        },
    },
    commands: [{
        videoCheck: function() {
            this
                .waitForElementVisible("@deskTopLogo", 2000)
                .waitForElementVisible("@playIcons", 2000)
                .click("@playIcons")
                .waitForElementVisible("@video", 5000)
                .waitFor(1000)
                .assert.elementPresent("@closeVideo")
                .click("@closeVideo")
                .waitFor(1000);
            return this;
        },
        inspectVideo: function() {
            this
                .waitForElementVisible("@playIcons", 8000)
                .click("@playIcons")
                .waitFor(1000)
                .assert.elementPresent("@closeIcon")
                .click("@closeIcon");
            return this;
        },
        howToVideo: function() {
            this
                .waitForElementVisible("@deskTopLogo", 2000)
                .waitForElementVisible("@howTo", 2000)
                .click("@howTo")
                .waitForElementVisible("@video", 5000)
                .waitFor(1000)
                .assert.elementPresent("@closeIcon")
                .click("@closeIcon")
                .waitFor(1000);
            return this;
        },
    }],
};
