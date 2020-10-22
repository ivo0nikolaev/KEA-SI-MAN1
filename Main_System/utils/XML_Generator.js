const xmlbuilder = require("xmlbuilder");

const XML_Builder = (client) =>{
    let obj = {
        Person: {
            FistsName: client.FirstName,
            LastName: client.LastName,
            CprNumber: client.cpr,
            Email: client.Email,
        }
    }

    return xmlbuilder.create(obj).end({pretty: true})
}

module.exports = XML_Builder