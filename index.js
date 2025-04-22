console.log("JS is connected");

fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(function(response) {
    console.log("Fetch response received");
    return response.json();
  })
  .then(function(json) {
    console.log("Got this from API:", json);
    var postContainer = document.getElementById('post-container');
    postContainer.className = 'post';
    postContainer.innerHTML =
      '<h1>' + json.title + '</h1>' +
      '<p>' + json.body + '</p>';
  })
  .catch(function(error) {
    console.error("Fetch failed:", error);
  });