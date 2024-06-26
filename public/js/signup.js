const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#name-signup").value.trim();
  const username = document.querySelector("#username-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  const clinic = document.querySelector("#clinic-signup").value.trim();

  if (name && username && password) {
    const response = await fetch("/api/doctors", {
      method: "POST",
      body: JSON.stringify({ name, username, password, clinic }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      let myModal = new bootstrap.Modal(
        document.getElementById("errorModal"),
        {}
      );
      myModal.show();
      setTimeout(function(){
        location.reload()
      }, 5000)
    }
  }
};

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
