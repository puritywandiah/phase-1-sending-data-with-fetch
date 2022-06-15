//Add your code here

function submitData(userName, userEmail){
     fetch (`http://localhost:3000/users`), {
         method: 'POST',
         headers: {
             "Content-Type": 'application/json',
             Accept: "application/json"     
         },
         body : JSON.stringify({
             name:userName,
             email:userEmail,
         })
     }
     .then ((res) => res.json())
     .then (data => document.body.textcontent = data[`id`])
     .catch((error) =>document.body.textContent =error.message)
 }




