const GITHUB_USER_URL = "https://api.github.com/users/";

const form = document.getElementById("form");
const username = document.getElementById("username");
const main = document.getElementById("main");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    getUser(username.value);
});

async function getUser(username) {
    try {
        let { data } = await axios(`${GITHUB_USER_URL}${username}`);

        showProfile(data);
    } catch (err) {
        let profileContainer = createProfileContainer();
        profileContainer.innerText = `User Not Found`;
        main.innerHTML = profileContainer.outerHTML;
    }
}
async function getRepos(username) {
    let repoUrl = `https://api.github.com/users/${username}/repos`;
    let res = await fetch(repoUrl);
    const data = await res.json();
    return data;
}

async function showProfile({
    avatar_url,
    bio,
    followers,
    following,
    login,
    name,
    public_repos,
}) {
    let repos = await getRepos(login);
    let repoList = createReposElement(repos);
    let profileContainer = createProfileContainer();

    profileContainer.innerHTML = `
        <div class="profile-pic">
            <img src="${avatar_url}" alt="profile_pic" class="profile-img">
        </div>
        <div class="profile-info" id="profile-info">
            <h2>${name}</h2>
            <p>${bio}</p>
            <div class="stats">
                <span>${followers} Followers</span>
                <span>${following} Following</span>
                <span>${public_repos} Repos</span>
            </div>
            ${repoList.outerHTML}
        </div>
    `;
    main.innerHTML = profileContainer.outerHTML;
}

function createReposElement(repos) {
    let reposEl = document.createElement("div");
    reposEl.className = "repos";
    repos.forEach((repo) => {
        let repoEl = document.createElement("div");
        repoEl.innerText = repo.name;
        reposEl.append(repoEl);
    });
    return reposEl;
}

function createProfileContainer() {
    let profileContainer = document.createElement("div");
    profileContainer.className = "profile";
    return profileContainer;
}
