const logout = async () => {
  const response = await fetch("/api/doctors/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    let myModal = new bootstrap.Modal(
      document.getElementById("errorModal"),
      {}
    );
    myModal.show();
  }
};

document.querySelector("#logout").addEventListener("click", logout);
