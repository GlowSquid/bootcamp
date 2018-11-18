class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  showProfile(user) {
    const company = user.company === null ? "None" : user.company;
    const blog =
      user.blog === ""
        ? "None"
        : `<a href="${user.blog}" target="_blank">
          ${user.blog}
        </a>`;
    const location = user.location === null ? "Not shared" : user.location;
    user.created_at = user.created_at.slice(0, 10);
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <h3>${user.login}</h3>
            <a href="${
              user.html_url
            }" target="_blank" class="btn btn-primary btn-block mb-3">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary">Public Repos: ${
              user.public_repos
            }</span>
            <span class="badge badge-warning">Public Gists: ${
              user.public_gists
            }</span>
            <span class="badge badge-success">Followers: ${
              user.followers
            }</span>
            <span class="badge badge-info">Following: ${user.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${company}</li>
              <li class="list-group-item">Website: ${blog}</li>
              <li class="list-group-item">Location: ${location}</li>
              <li class="list-group-item">Member Since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
    `;
  }

  // Show user repos
  showRepos(repos) {
    let output = "";

    repos.forEach(function(repo) {
      output += `
        <div class="card card-body mb-2">
          <div class="row>
            <div class="col-md-6">
              <a href="${repo.html_url}" target=_blank">${repo.name}</a>
            </div>
            <div class="col-md-6">
              <span class="badge badge-primary">Stars: ${
                repo.stargazers_count
              }</span>
              <span class="badge badge-warning">Watchers: ${
                repo.watchers_count
              }</span>
              <span class="badge badge-success">Forks: ${
                repo.forks_count
              }</span>
            </div>
          </div>
        </div>
      `;
    });

    // Output repos
    document.getElementById("repos").innerHTML = output;
  }

  showAlert(message, className) {
    this.clearAlert();
    const div = document.createElement("div");
    div.className = className;
    div.appendChild(document.createTextNode(message));
    // Get parent
    const container = document.querySelector(".searchContainer");
    // Get search box
    const search = document.querySelector(".search");
    // insert alert
    container.insertBefore(div, search);

    // Timeout alert
    setTimeout(() => {
      this.clearAlert();
    }, 2000);
  }

  clearAlert() {
    const currentAlert = document.querySelector(".alert");

    if (currentAlert) {
      currentAlert.remove();
    }
  }

  clearProfile() {
    this.profile.innerHTML = "";
  }
}
