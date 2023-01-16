//When we use Await operator in a function we need to decorate that function with Async modifier.
//Async/Await are built on promises, they are syntactical sugar and make us believe the asynchronous code as synchronous

//Async Await Approach
async function displayCommits() {
  try {
    const user = await getUser(1);
    const repos = await getRepositories(user.gitHubUsername);
    const commits = await getCommits(repos[0]);
    console.log(commits);
  } catch (err) {
    console.log("Error", err.message);
  }
}
// In promises we have .catch() block to chain like .then()
//but in async/await we have try catch block
displayCommits();
