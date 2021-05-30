function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

var HttpClient = function () {
  this.get = function (aUrl, aCallback) {
    var anHttpRequest = new XMLHttpRequest();
    anHttpRequest.onreadystatechange = function () {
      if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
        aCallback(anHttpRequest.responseText);
    };

    anHttpRequest.open("GET", aUrl, true);
    anHttpRequest.send(null);
  };
};

function onSignUp() {
  var client = new HttpClient();
  var url =
    "https://us-central1-neat-throne-258104.cloudfunctions.net/signup_email?t=d-d4a896f1b17a4bcb8ecb832f5d751730&u=";

  const email = $("#user-email").val();
  if (validateEmail(email)) {
    client.get(url + email, function (response) {
      // do something with response
    });
    console.info("Thanks!");
  }
}
