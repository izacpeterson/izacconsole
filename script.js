/** @format */

const urlParams = new URLSearchParams(window.location.search);
const query = urlParams.get("query");
console.log(query);

args = query.split(" ");

switch (args[0]) {
  case "goto":
    switch (args[1]) {
      case "google":
        if (args[2]) {
          window
            .open(`https://www.google.com/search?q=${args[2]}`, "_blank")
            .focus();
        } else {
          window.open(`https://www.google.com/`, "_blank").focus();
        }
        break;
      case "izac.com":
        window.open("https://www.izacpeterson.com", "_blank").focus();
        break;
      case "github":
        window.open("https://github.com/", "_blank").focus();
        break;
    }
    break;
  case "help":
    $("body").append(`<h1>Available Commands:</h1>
                        <h2>goto</h2>`);
}
