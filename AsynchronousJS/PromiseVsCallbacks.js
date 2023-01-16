// Replacing Callbacks with PROMISES
console.log("before");
//------------------------------------
getUser(1, getRepositories1);

console.log("after");
//------------------------------------
function getRepositories1(user) {
  getRepositories2(user.gitUsername, getCommits);
}
//------------------------------------
function getCommits(repos) {
  getCommits(repo, displayCommits);
}
//------------------------------------
function displayCommits(commits) {
  console.log("Commits:" + commits);
}
//------------------------------------
//async function connecting with database and returning the results to callback function to console.log("User", user);
function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Reading a user from database...");
      resolve({ id: id, gitUsername: "gill" });
    }, 2000);
  });
}

function getRepositories2(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("connecting with github...");
      resolve(["Facebook", "Netflix", "Gmail"]);
    }, 2000);
  });
}
