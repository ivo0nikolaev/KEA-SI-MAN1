const parse = require('csv-parse/lib/sync');
const xml = require('./utils/XML_Generator')
const fs = require("fs");

const cpr = require('./utils/CPR_CodeGenerator')
const send = require('./utils/sendToServer')
const pack =  require('./utils/MSGPack_Generator')

const stream = fs.readFileSync('people.csv')
const clients = parse(stream, {columns: true})

clients.forEach(async (person) =>{
    person.cpr = cpr(person.DateOfBirth)
    const nemID = await send(xml(person))
    person.nemID = nemID
    pack(person)
})