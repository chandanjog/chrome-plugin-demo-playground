console.log("I am called !!!!");
main();

async function main() {
  // eslint-disable-next-line no-undef
  const extensionOrigin = 'chrome-extension://' + chrome.runtime.id;
  // eslint-disable-next-line no-restricted-globals
  if (!location.ancestorOrigins.contains(extensionOrigin)) {
    // Fetch the local React index.html page
    // eslint-disable-next-line no-undef

    await fetch(chrome.runtime.getURL('index.html'))
      .then((response) => response.text())
      .then((html) => {
        const indexHTML = html.replace(/\/static\//g, `${extensionOrigin}/static/`);
        // eslint-disable-next-line no-undef
        // document.body.innerHTML = document.body.innerHTML + indexHTML;
          console.log(indexHTML)
          debugger;
          $(indexHTML).appendTo('body');
          // document.body.appendChild(createElementFromHTML(indexHTML))
      })
      .catch((error) => {
        debugger;
        console.warn(error);
      });
  }
}

function createElementFromHTML(htmlString) {
    var div = document.createElement('div');
    div.innerHTML = htmlString.trim();
    // Change this to div.childNodes to support multiple top-level nodes
    return div;
}