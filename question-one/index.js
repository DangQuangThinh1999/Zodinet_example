// Giving an API endpoint: https://jsonplaceholder.typicode.com/posts.

// Use JavaScript or TypeScript to write a function that fetches data from this API endpoint.
const fetchApi = async (url, callback) => {
  await fetch(url)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.log(error));
};
fetchApi("https://jsonplaceholder.typicode.com/posts");

// Use JavaScript or TypeScript to write a function that creates a new post using this API endpoint.

const postApi = async (url, callback) => {
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      username: "DANG QUANG THINH",
    }),
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.log(error));
};
postApi("https://jsonplaceholder.typicode.com/posts");

// (Optional) Create a UI that has 2 buttons: “Fetch” and “Create” that execute the two functions above.
let userApi = "https://jsonplaceholder.typicode.com/posts";
let storedUser = [];

//-------stored User----------

const getUser = () => {
  fetch(userApi)
    .then((response) => response.json())
    .then((data) => {
      storedUser = data;
    })
    .catch((error) => console.log(error));
};
getUser();

const renderUser = (userData) => {
  let listUsers = document.querySelector("#list-users");
  let htmls = userData?.map(
    (user) =>
      `<li><h3>ID:  ${user.id} </h3>
    <h4> ${user.title} </h4>
    <p>${user.body}</p>
    </li>`
  );
  listUsers.innerHTML = htmls.join("");
};
// --------------- BUTTON FETCH---------------

let fetchBtn = document.querySelector("#fetch-btn");
fetchBtn.onclick = () => {
  renderUser(storedUser);
};
// -------------- BUTTON CREATE ------------------
const createUser = (data) => {
  let options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  };

  fetch(userApi, options)
    .then((response) => response.json())
    .then((data) => {
      storedUser.push(data);
      renderUser(storedUser);
    })
    .catch((error) => console.log(error));
};

const handleSubmitFormCreate = () => {
  let createBtn = document.querySelector("#create");

  createBtn.onclick = () => {
    let title = document.querySelector('input[name="title"]').value;
    let body = document.querySelector('input[name="body"]').value;
    let formData = {
      title: title,
      body: body,
    };

    createUser(formData);
  };
};
handleSubmitFormCreate();
