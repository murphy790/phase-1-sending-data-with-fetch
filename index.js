// Add your code here
const formData ={
    name: "alex",
    email : "alex@alex.com",
}
function submitData() {

 fetch("http://localhost:3000/users", {
   method: "POST",
   headers: {
     "Content-Type": "application/json",
     Accept: "application/json",
   },
   body: JSON.stringify(formData),
 })
   .then((response) => response.json())
   .then((data) => {
     console.log(data);
     document.body.innerHTML += `<p>${data.id}</p>`;
   })
   .catch((error) => {
       alert("not accessible!");
     console.log(error.message);
     document.body.innerHTML += `<p>${error.message}</p>`;
   });
}
