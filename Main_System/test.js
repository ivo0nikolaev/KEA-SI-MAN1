var axios = require('axios');
var data = '<?xml version="1.0"?>\n<Person>\n    <FistsName>John</FistsName>\n    <LastName>Doe</LastName>\n    <CprNumber>1234567890</CprNumber>\n    <Email>john@doe.com</Email>\n</Person>';

var config = {
  method: 'post',
  url: 'http://localhost:8080/nemID/',
  headers: { 
    'Content-Type': 'application/xml'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
