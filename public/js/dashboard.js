const signupFormHandler = async (event) => {
  event.preventDefault();

  const timeEl = document.querySelector("#new-appointment-time").value.trim();
  const dateEl = document.querySelector("#new-appointment-day").value.trim();
  const time = dateEl + "T" + timeEl;
  const title = document.querySelector("#new-appointment-title").value.trim();
  let patient_id = document
    .querySelector("#new-appointment-patient_id")
    .value.trim();

  if (patient_id === 'none') {
    patient_id = null
  }

  if (time && title) {
    const response = await fetch(`api/appointments`, {
      method: "POST",
      body: JSON.stringify({ time, title, patient_id }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.assign("/dashboard");
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
  .querySelector("#new-appointment")
  .addEventListener("click", signupFormHandler);
