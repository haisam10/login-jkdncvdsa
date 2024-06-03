document.getElementById("submit").addEventListener("click", () => {
  
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const parson = document.getElementById("haisam");
  console.log(parson,username,password);

  if (username === "admin" && password === "admin") {
    alert("Login successful!");
    window.location.href = "index.html";
    // const person = "hasiam"; 
    parson.innerText = "admin";
    console.log (parson.innerText);
  }
  else if ( username === "admin1" && password === "admin1"){
    alert("Login successful!");
    window.location.href = "index.html";
  }
  else if ( username === "admin2" && password === "admin2"){
    alert("Login successful!");
    window.location.href = "index.html";
  }
  else {
    alert("Invalid username or password.");
  }
});