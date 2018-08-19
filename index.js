const rootURL = "https://api.github.com"

function getRepositories() {
  const name = document.getElementById("username").value
  const uri = rootURL + "/users/" + name + "/repos"
  const xhr = new XMHLHttpRequest()
   xhr.addEventListener("load", displayRepositories)
   xhr.open("Get", uri)
   xhr.send()
     return false;   
}
