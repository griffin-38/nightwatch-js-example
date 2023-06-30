require("../../config/environment");
const data = require("../../data/globals");

module.exports = {
    url: function() {
        return this.api.launchUrl;
    },
    elements: {
        firstName_: {
            selector: "#firstName",
        },
        middleName_: {
            selector: "#middleName",
        },
        lastName_: {
            selector: "#lastName",
        },
        suffix_: {
            selector: "#suffix",
        },
        email_: {
            selector: "#email",
        },
        dob_: {
            selector: "#dob",
        },
        mobile_: {
            selector: "#mobilePhone",
        },
        firstName: {
            selector: "#borrower-firstName",
        },
        middleName: {
            selector: "#borrower-middleName",
        },
        lastName: {
            selector: "#borrower-lastName",
        },
        suffix: {
            selector: "#borrower-suffix",
        },
        email: {
            selector: "#borrower-email",
        },
        dob: {
            selector: "#borrower-dob",
        },
        mobile: {
            selector: "#borrower-mobilePhone",
        },
        deskTopLogo: {
            selector: ".desktop-logo",
        },
        submit: {
            selector: "//button[@class='button--md bg--blue-purple-sub']",
            locateStrategy: "xpath",
        },
        personal: {
            selector: "//h5[contains(.,'Personal')]",
            locateStrategy: "xpath",
        },
        confirmEmail: {
            selector: "#borrower-confirm-email",
        },
    },
    commands: [{
        setPersonal: function() {
            return this.assert.elementPresent("@deskTopLogo")
                .setValue("@firstName", "7Do not 77forget your docs")
                .setValue("@middleName", "7Do 7not 7forget your docs")
                .setValue("@lastName", "5Do 7not forget your docs")
                .setValue("@suffix", "Do not forget your docs")
                .setValue("@email", "/////.......")
                .setValue("@dob", "23/32/2242")
                .setValue("@mobile", "(999) 999-9")
                .submitForm("@submit");
        },
        setEasyApp: function(info) {
            const p = data.p2d;
            return this.assert.elementPresent("@personal")
                .setValue("@firstName", p.firstName)
                .setValue("@lastName", p.lastName)
                .setValue("@email", "purchasedealer@mailinator.com")
                .setValue("@dob", p.dob)
                .setValue("@mobile", p.mobile);
        },
        setEasyAppP: function(info) {
            const p = data.p2p_angela;
            return this.assert.elementPresent("@personal")
                .setValue("@firstName", p.firstName)
                .setValue("@lastName", p.lastName)
                .setValue("@email", "purchaseprivate@mailinator.com")
                .setValue("@dob", p.dob)
                .setValue("@mobile", "(949) 331-0000");
        },
        setPersonalFields: function(first, last, mobile, dob, email, email_) {
            this
                .assert.elementPresent("@personal")
                .setValue("@firstName", first)
                .setValue("@lastName", last)
                .setValue("@mobile", mobile)
                .setValue("@dob", dob)
                .setValue("@email", email)
                .setValue("@confirmEmail", email_);
            return this;
        },
    }],
};
