module.exports = {
    sections: {
        menu: {
            selector: "#gb",
            elements: {
                mail: {
                    selector: "a[href=\"mail\"]",
                },
                images: {
                    selector: "a[href=\"imghp\"]",
                },
            },
            sections: {
                apps: {
                    selector: "div.gb_pc",
                    elements: {
                        myAccount: {
                            selector: "#gb192",
                        },
                        googlePlus: {
                            selector: "#gb119",
                        },
                    },
                },
            },
        },
    },
};
