// let moment = require("moment");
// // let _ = require("lodash");
// let today = moment().format("MM-DD-YYYY");
// let fourtyFiveDays = moment().add(45, "d").format("MM/DD/YY");
// let fourtySixDays = moment().add(46, "d").format("MM/DD/YY");
// console.log(today, fourtyFiveDays, fourtySixDays); // need to refine this to create within range
// // let self = this;

// module.exports = {
//     url: function() {
//         return this.api.launchUrl;
//     },
//     elements: {
//         expandFees: {
//             selector: "#expand-closing-costs",
//         },
//         greenPrice: {
//             selector: ".green.price",
//         },
//     },
//     sections: {
//         summaryTable: {
//             selector: "#price-summary",
//             elements: {
//                 item: {
//                     selector: ".item",
//                 },
//                 items: {
//                     selector: ".col-xs-8.item",
//                 },
//                 value: {
//                     selector: ".price",
//                 },
//                 values: {
//                     selector: ".col-xs-4.price.text-right",
//                 },
//                 table: {
//                     selector: "#price-summary",
//                 },
//             },
//         },
//         greenFees: {
//             selector: ".content-section",
//             elements: {
//                 item: {
//                     selector: ".col-sm-12",
//                 },
//                 greenValues: {
//                     selector: ".green",
//                 },
//             },
//         },
//         sliders: {
//             selector: ".slider-container",
//             elements: {
//                 itemLabel: {
//                     selector: ".slider-label",
//                 },
//                 slider: {
//                     selector: ".rz-pointer",
//                 },
//             },
//         },
//     },
//     commands: [{
//         verifyPageload: function() {
//             // waitForStuff...
//             return this.assert.title(this.props.title);
//         },
//         verifyPageValues: function() {
//             this.section.table
//                 .waitForElementVisible("@header")
//                 .parent.section.filters.waitForElementVisible("@filterByName")
//                 .parent.section.actions.waitForElementVisible("@addButton")
//                 .assert.title(this.props.title);
//             return this;
//         },
//         verifyConfigPage: function() {
//             return (
//                 this
//                     .section.summaryTable
//                     .getAttribute("@table", function(result) {
//                         console.log(result.value);
//                     })
//             );
//         },
//         verifyGapPage: function() {
//             return (
//                 this
//                     .section.content.waitForElementVisible("@summaryTable", 2000)
//                     .section.content.waitForElementVisible("@item", 2000)
//                     .section.content.waitForElementVisible("@values", 2000)
//             );
//         },
//         getAllAttribute: function(selector) {
//             this.api.getAttribute(selector, "class", function(result) { // #purchase-summary > div:nth-child(2) > div:nth-child(2) > h1:nth-child(3)
//                 if (result.value) {
//                     console.log("class name:" + result.value);
//                 } else {
//                     console.log("class name:" + result.value);
//                 }
//             });
//         },
//         getAllValues: function(selector, values) {
//             array = [];
//             this.api.getText(".green.price", function(result) {
//                 console.log("Result:", result.value);
//                 values = array.push(result.value);
//                 // _.forOwn(values, function(index) {
//                 console.log(values);
//                 //  });
//             });
//             return this;
//         },
//         getTableRows: function(browser, elements, callback) {
//             elements.value.forEach(function(el) {
//                 el = ".green.price";
//                 browser.click(el.ELEMENT, function(r) {
//                     browser.assert.ok(r.status === 0);
//                 });
//             });
//         },
//         getLinks: function(selector, attribute) {
//             // selector = ".footer-links";
//             // attribute = "row footer-links";
//             this.api.elements("css selector", selector, function(result) { // selector: .col-xs-6.col-sm-2
//                 for (let i in result.value) {
//                     this.elementIdAttribute(result.value[i].ELEMENT, attribute, function(result) { // attribute:  "col-xs-6 col-sm-2"
//                         console.log(result.value);
//                     });
//                 }
//             });
//             return this;
//         },
//     }],
// };
