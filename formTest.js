
function buildForm() {
    buildNameOwner();
    buildAddress();
    buildSiteAddress();
}

function buildNameOwner() {
    var nameowner = {
        data: {
            "name": "Joe Shmo",
            "company": "N/A",
            "contact": "Joe Shmo",
            "homephone": "01306 112222",
            "workphone": "01306 112222",
            "mobile": "07000 111222"
        },
        schema: {
            "type": "object",
            "properties": {
                "name": {
                    "type": "string",
                    "required": true
                },
                "company": {
                    "type": "string",
                    "required": true
                },
                "contact": {
                    "type": "string",
                    "required": true
                },
                "homephone": {
                    "type": "string"
                },
                "workphone": {
                    "type": "string"
                },
                "mobile": {
                    "type": "string"
                }
            }
        },
        options: {
            "fields": {
                "name": {
                    "label": "Capture name",
                    "type": "text"
                },
                "company": {
                    "label": "Company",
                    "type": "text"
                },
                "contact": {
                    "label": "Contact",
                    "type": "text"
                },
                "homephone": {
                    "label": "Home phone",
                    "type": "text"
                },
                "workphone": {
                    "label": "Work phone",
                    "type": "text"
                },
                "mobile": {
                    "label": "Mobile",
                    "type": "text"
                }
            }
        }
    };


    var postRenderCallback = function (control) { };

    $("#nameowner").alpaca({
        "data": nameowner.data,
        "schema": nameowner.schema,
        "options": nameowner.options,
        "view": "VIEW_WEB_EDIT"
    });

};


function buildAddress() {
    var address = {
        data: {
            "address1": "The House",
            "address2": "The Street",
            "address3": "The Village",
            "address4": "",
            "county": "Surrey",
            "postcode": "RH1 1AB",
            "country": "gbr"
        },
        schema: {
            "type": "object",
            "properties": {
                "address1": {
                    "type": "string",
                    "required": true
                },
                "address2": {
                    "type": "string",
                    "required": false
                },
                "address3": {
                    "type": "string",
                    "required": false
                },
                "address4": {
                    "type": "string",
                    "required": false
                },
                "county": {
                    "type": "string",
                    "required": true
                },
                "postcode": {
                    "type": "string",
                    "required": true
                },
                "country": {
                    "type": "string",
                    "required": true
                }
            }
        },
        options: {
            "fields": {
                "address1": {
                    "label": "Address",
                    "type": "text"
                },
                "address2": {
                    "label": "&nbsp;",
                    "type": "text"
                },
                "address3": {
                    "label": "&nbsp;",
                    "type": "text"
                },
                "address4": {
                    "label": "&nbsp;",
                    "type": "text"
                },
                "county": {
                    "label": "County",
                    "type": "text"
                },
                "postcode": {
                    "label": "Post Code",
                    "type": "text"
                },
                "country": {
                    "label": "Country",
                    "type": "country"
                }
            }
        }
    };


    var postRenderCallback = function (control) { };

    $("#address").alpaca({
        "data": address.data,
        "schema": address.schema,
        "options": address.options,
        "view": "VIEW_WEB_EDIT"
    });

};


function buildSiteAddress() {

    var siteAddress = {
        data: {
            "address1": "The House",
            "address2": "The Street",
            "address3": "The Village",
            "address4": "",
            "county": "Surrey",
            "postcode": "RH1 1AB",
            "country": "gbr"
        },
        schema: {
            "type": "object",
            "properties": {
                "address1": {
                    "type": "string",
                    "required": true
                },
                "address2": {
                    "type": "string",
                    "required": false
                },
                "address3": {
                    "type": "string",
                    "required": false
                },
                "address4": {
                    "type": "string",
                    "required": false
                },
                "county": {
                    "type": "string",
                    "required": true
                },
                "postcode": {
                    "type": "string",
                    "required": true
                },
                "country": {
                    "type": "string",
                    "required": true
                }
            }
        },
        options: {
            "fields": {
                "address1": {
                    "label": "Address",
                    "type": "text"
                },
                "address2": {
                    "label": "&nbsp;",
                    "type": "text"
                },
                "address3": {
                    "label": "&nbsp;",
                    "type": "text"
                },
                "address4": {
                    "label": "&nbsp;",
                    "type": "text"
                },
                "county": {
                    "label": "County",
                    "type": "text"
                },
                "postcode": {
                    "label": "Post Code",
                    "type": "text"
                },
                "country": {
                    "label": "Country",
                    "type": "country"
                }
            }
        }
    };

    var postRenderCallback = function (control) { };


    $("#siteAddress").alpaca({
        "data": siteAddress.data,
        "schema": siteAddress.schema,
        "options": siteAddress.options,
        "view": "VIEW_WEB_EDIT"
    });
};