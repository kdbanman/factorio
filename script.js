function reqListener () {
  console.log(this.responseText);
}

function startServer() {
  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", reqListener);
  oReq.open("GET", "https://k8yf3uxl51.execute-api.us-west-2.amazonaws.com/prod/factorio-start");
  oReq.send();
}

function stopServer() {
  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", reqListener);
  oReq.open("GET", "https://k8yf3uxl51.execute-api.us-west-2.amazonaws.com/prod/factorio-stop");
  oReq.send();
}
