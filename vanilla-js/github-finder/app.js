const github = new GitHub();
const ui = new UI();

// Search Input
const searchUser = document.getElementById("searchUser");

// Search Input eventlistener
searchUser.addEventListener("keyup", e => {
  // Get Input Text
  const userText = e.target.value;

  if (userText !== "") {
    // Make HTTP call
    github.getUser(userText).then(data => {
      if (data.profile.message === "Not Found") {
        ui.showAlert("User not found", "alert alert-danger");
      } else {
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    // Clear profile
    ui.clearProfile();
  }
});
