const delButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/patients/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      document.location.replace("/profile");
    } else {
      let myModal = new bootstrap.Modal(
        document.getElementById("deleteModal"),
        {}
      );
      myModal.show();
    }
  }
};

const upButtonHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#update-patient-name").value.trim();
  const birthday = document
    .querySelector("#update-patient-birthday")
    .value.trim();
  const address = document
    .querySelector("#update-patient-address")
    .value.trim();
  const phone = document.querySelector("#update-patient-phone").value.trim();

  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/patients/${id}`, {
      method: "PUT",
      body: JSON.stringify({ name, address, phone, birthday }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace(`/api/patients/${id}`);
    } else {
      let myModal = new bootstrap.Modal(
        document.getElementById("updateModal"),
        {}
      );
      myModal.show();
    }
  }
};

const addNote = async (event) => {
  event.preventDefault();
  const body = document.querySelector("#new-note").value;

  if (event.target.hasAttribute("data-id")) {
    const patient_id = event.target.getAttribute("data-id");

    const response = await fetch("/api/notes", {
      method: "POST",
      body: JSON.stringify({ body, patient_id }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.reload(`/api/patients/${patient_id}`);
    } else {
      let myModal = new bootstrap.Modal(
        document.getElementById("errorModal"),
        {}
      );
      myModal.show();
    }
  }
};

const delNoteHandler = async (event) => {
  console.log("delete");
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");
    console.log(id);
    const response = await fetch(`/api/notes/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      document.location.reload();
    } else {
      let myModal = new bootstrap.Modal(
        document.getElementById("deleteModal"),
        {}
      );
      myModal.show();
    }
  }
};

document
  .querySelector("#delete-button")
  .addEventListener("click", delButtonHandler);

document
  .querySelector("#update-button")
  .addEventListener("click", upButtonHandler);

document.querySelector("#addNote").addEventListener("click", addNote);

document
  .querySelectorAll(".delete-note")
  .forEach((el) => el.addEventListener("click", delNoteHandler));
