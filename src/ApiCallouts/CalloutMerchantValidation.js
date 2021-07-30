async function PostCompany(payload) {
  const axios = require("axios");
  var value;

  await axios({
    method: "post",
    url:
      "https://saltpay-salesforce-api.herokuapp.com/reactValidation/merchant",
    responseType: "json",
    headers: { "content-type": "application/json" },
    data: payload
  })
    .then(async function (response) {
      console.log(response.data);
      value = response.data;
    })
    .catch(async function (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        value = error.response.data;
      } else if (error.request) {
        console.log(error.request);
      }
    });

  return value;
}

export default PostCompany;
