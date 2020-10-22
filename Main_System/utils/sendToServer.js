var axios = require("axios");

//If all goes well it will return

const Send = async (xml) => {
  let config = {
    method: "post",
    url: "http://localhost:8080/nemID/",
    headers: {
      "Content-Type": "application/xml",
    },
    data: xml,
  };

  let nemId = await axios(config)
    .then((response) => {
      return response.data.nemID;
    })
    .catch((error) => {
      console.log(error);
    });

  return nemId;
};

module.exports = Send;
