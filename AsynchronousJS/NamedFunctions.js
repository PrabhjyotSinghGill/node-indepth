console.log("before");
//------------------------------------
getUser(1, getRepositories1);

console.log("after");
//------------------------------------
function getRepositories1(user){
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
function getUser(id, callback) {
  setTimeout(() => {
    console.log("Reading a user from database...");
    callback({ id: id, gitUsername: "gill" });
  }, 2000);
}

function getRepositories2(username, callback) {
  setTimeout(() => {
    console.log("connecting with github...");
    callback(["Facebook", "Netflix", "Gmail"]);
  }, 2000);
}
