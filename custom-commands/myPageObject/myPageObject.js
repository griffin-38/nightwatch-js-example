module.exports = {
    elements: {},
    commands: [
        {
            myCommand: function() {
                console.log("Page object command as method"); // called immediately
            },
            myQueuedCommand: function() {
                this.api.perform(function() {
                    console.log("Page object command as queued command"); // called in queue
                }); // ensure `this` in perform is still page object
            },
        },
    ],
};

/*
  // test using page object commands

module.exports = {
  'page object commands': function (browser) {
    var myPageObject = browser.page.myPageObject();

    console.log('Calling page object commands');
    myPageObject.myCommand();
    myPageObject.myQueuedCommand();
    console.log('Called page object commands');
  }
};

// Output:
//-> Calling page object commands
//-> Page object command as method
//-> Called page object commands
//-> Page object command as queued command
*/
