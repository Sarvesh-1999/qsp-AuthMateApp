window.addEventListener("DOMContentLoaded", () => {
  let authUser = JSON.parse(localStorage.getItem("authuser"));
  let spanEL = document.getElementById("authuser-name");
  spanEL.innerText = authUser.username;
  getPosts();
});

async function getPosts() {
  try {
    let response = await fetch("https://dummyjson.com/posts");
    let data = await response.json();
    displayPosts(data);
  } catch (error) {
    console.log(error);
    alert("Something went wrong 😵‍💫 !!!");
  }
}

function displayPosts({ posts }) {
  console.log(posts);
  const mainContainer = document.getElementById("main-container");

  posts.map((ele) => {
    let { id, body, title, reactions, tags, views } = ele;
    console.log(tags);

    const postCard = document.createElement("div");
    postCard.className = "postCard";

    postCard.innerHTML = `
    <h2>${title}</h2>
    <p>${body}</p>
    <div class='tags'>
        ${tags.map((tag) => `<span>${tag}</span>`).join(" ")}
    </div>
    <div>
        <span>${reactions.likes} 👍</span>
        <span>${reactions.dislikes} 👎</span>
        <span>views ${views}</span>
    </div>
    `
    mainContainer.append(postCard);
  });
}
