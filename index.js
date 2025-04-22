fetch('https://jsonplaceholder.typicode.com/posts')
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    var postContainer = document.getElementById('post-container');
    postContainer.innerHTML = ""; // clear the loading text

    for (var i = 0; i < 5; i++) {
      var post = json[i];
      var postDiv = document.createElement('div');
      postDiv.className = 'post';
      postDiv.innerHTML =
        '<h2>' + post.title + '</h2>' +
        '<p>' + post.body + '</p>';
      postContainer.appendChild(postDiv);
    }
  })
  .catch(function(error) {
    console.error("Fetch failed:", error);
  });