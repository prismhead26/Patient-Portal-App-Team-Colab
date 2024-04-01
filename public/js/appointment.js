  const upButtonHandler = async (event) => {
    event.preventDefault();
    const title = document.querySelector("#update-appointment-title").value.trim();
    const time = document.querySelector("#update-appointment-time").value.trim();
    const patient_id = document.querySelector("#update-appointment-patient_id").value.trim();
  
    if (event.target.hasAttribute("data-id")) {
      const id = event.target.getAttribute("data-id");
      const response = await fetch(`/api/appointments/${id}`, {
        method: "PUT",
        body: JSON.stringify({ title, time, patient_id }),
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        document.location.assign("/dashboard");
      } else {
        alert(response.statusText);
      }
    }
  };

  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute("data-id")) {
      const id = event.target.getAttribute("data-id");
      const response = await fetch(`/api/appointments/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        document.location.assign("/dashboard");
      } else {
        alert("Failed to delete project");
      }
    }
  };

    document
  .querySelector("#update-button")
  .addEventListener("click", upButtonHandler);

    document
  .querySelector("#delete-button")
  .addEventListener("click", delButtonHandler);
  