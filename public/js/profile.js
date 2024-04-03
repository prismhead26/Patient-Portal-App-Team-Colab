const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#new-patient-name").value.trim();
  const birthday = document.querySelector("#new-patient-birthday").value.trim();
  const address = document.querySelector("#new-patient-address").value.trim();
  const phone = document.querySelector("#new-patient-phone").value.trim();

  if (name && address && birthday && phone) {
    const response = await fetch("/api/patients", {
      method: "POST",
      body: JSON.stringify({ name, address, birthday, phone }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.reload("/profile");
    } else {
      let myModal = new bootstrap.Modal(
        document.getElementById("errorModal"),
        {}
      );
      myModal.show();
    }
  }
};

document
  .querySelector("#new-patient")
  .addEventListener("click", signupFormHandler);
