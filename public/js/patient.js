const delButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");
    console.log(id);
    const response = await fetch(`/api/patients/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to delete project");
    }
  }
};

const upButtonHandler = async (event) => {
  event.preventDefault();
  console.log("button clicked");
  const name = document.querySelector("#update-patient-name").value.trim();
  const birthday = document
    .querySelector("#update-patient-birthday")
    .value.trim();
  const address = document
    .querySelector("#update-patient-address")
    .value.trim();
  const phone = document.querySelector("#update-patient-phone").value.trim();
  console.log(name, address, phone, birthday);

  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");
    console.log("the id is: " + id);
    const response = await fetch(`/api/patients/${id}`, {
      method: "PUT",
      body: JSON.stringify({ name, address, phone, birthday }),
      headers: { "Content-Type": "application/json" },
    });
    console.log("the response is: " + response);
    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector("#delete-button")
  .addEventListener("click", delButtonHandler);

document
  .querySelector("#update-button")
  .addEventListener("click", upButtonHandler);
