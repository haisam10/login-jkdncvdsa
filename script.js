


//jhvbchjasbcjhbas
document.getElementById("deposit-btn").addEventListener("click", function () {
  const dep_input = document.getElementById("deposit-input");
  const dep_value = parseFloat(dep_input.value);
  const parson = document.getElementById("haisam");
  console.log(parson);

  if (dep_input.value === "") {
    alert("Enter Your Amount");
  } 
  else {
    const pre_depo = document.getElementById("deposit-value");
    const pre_depotext = parseFloat(pre_depo.innerText);
    const total_dep = dep_value + pre_depotext;
    pre_depo.innerText = total_dep;
    dep_input.value = "";
    const total = document.getElementById("total");
    const totaltext = parseFloat(total.innerText);
    const sumtotal = dep_value + totaltext;
    total.innerText = sumtotal;
  }
});

document.getElementById("withdraw-btn").addEventListener("click", function () {
  const dep_input = document.getElementById("withdraw-input");
  const dep_value = parseFloat(dep_input.value);
  if (dep_input.value === "") {
    alert("Enter Your Amount");
  } 
  else {
    const pre_depo = document.getElementById("withdraw-value");
    const pre_depotext = parseFloat(pre_depo.innerText);
    const total_dep = dep_value + pre_depotext;
    pre_depo.innerText = total_dep;
    dep_input.value = "";
    const total = document.getElementById("total");
    const totaltext = parseFloat(total.innerText);
    const sumtotal = totaltext - dep_value;
    total.innerText = sumtotal;
  }
});


//login _setup

// document.getElementById("submit").addEventListener("click", () => {
  
//   const username = document.getElementById("username").value;
//   const password = document.getElementById("password").value;
//   const parson = document.getElementById("haisam");
//   console.log(parson);

//   if (username === "admin" && password === "admin") {
//     alert("Login successful!");
//     window.location.href = "index.html";
//     // const person = "hasiam"; 
//     parson.innerText = "admin";
//     console.log (parson.innerText);
//   }
//   else if ( username === "admin1" && password === "admin1"){
//     alert("Login successful!");
//     window.location.href = "index.html";
//   }
//   else if ( username === "admin2" && password === "admin2"){
//     alert("Login successful!");
//     window.location.href = "index.html";
//   }
//   else {
//     alert("Invalid username or password.");
//   }
// });
