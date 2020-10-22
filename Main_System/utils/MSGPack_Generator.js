const fs = require("fs");
const msgpack = require("msgpack");
const request = require("request");

// Pass name and value
// store?

// FirstName: 'Ivo',
//   LastName: 'Ovcharov',
//   Email: 'ivo@gmail.com',
//   DateOfBirth: '11-12-1999',
//   Phone: '8348389',
//   Address: 'SuperStreet 12',
//   Country: 'BG',
//   nemId: '45484111219'

const pack = (person) => {
  const toPack = {
    f_name: person.FirstName,
    l_name: person.LastName,
    birth_date: person.DataOfBirth,
    email: person.Email,
    country: person.Country,
    phone: person.Phone,
    address: person.Address,
    CPR: person.cpr,
    NemID: person.nemID,
  };
  try{
  fs.writeFileSync("./msgpacks/" + person.cpr + ".msgpack", msgpack.pack(toPack));
  } catch(e){
      console.log(e)
  }
};

module.exports = pack;
