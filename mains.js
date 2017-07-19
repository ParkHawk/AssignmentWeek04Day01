
var request = new XMLHttpRequest();
request.onload = myStory;
request.open('GET', 'https://api.github.com/users/parkHawk', true)
request.send()


function myStory(){
  var responseObj = JSON.parse(this.responseText);
  var storyContent = responseObj.bio;
  var body = document.querySelector("body");

  var name = responseObj.name;
  var github = responseObj.html_url;
  var email = responseObj.email;
  var company = responseObj.company;
  var website = responseObj.url;
  var image = responseObj.avatar_url;


body.innerHTML = `<header>
  <h1 id = "nameTitle">${name}</h1>
</header>
<div id="body">
  <section id = "basicsSection">
    <h3 id = "basicsTitle">The Basics</h3>
    <ul id="basics">
      <li id="name"><em>Name:</em> ${name}</li>
      <li id="github"><em>Github URL:</em> ${github}</li>
      <li id="email"><em>Email:</em> ${email}</li>
      <li id="company"><em>Company:</em> ${company}</li>
      <li id="website"><em>Website:</em> ${website}</li>
      <ul>
  </section>
  <hr>
  <section id="storySection">
    <h3 id="storyTitle">The Story</h3>
    <p id = "story">${storyContent}</p>
  </section>
  <section id = "imagesSection">
    <img src = "${image}">
  </section>
</div>`

}
