
let start = () => {
  let username = document.querySelector("#username").value;
  let gmail = document.querySelector("#email").value;
  let pass = document.querySelector("#password").value;
  let login1 = "yes";
  if (username === "") {
    let user1 = document.querySelector("#username");
    user1.style.borderColor = "red";
    return false;
  } else if (gmail === "") {
    let gmail1 = document.querySelector("#email");
    gmail1.style.borderColor = "red";
    return false;
  } else if (pass === "") {
    let pass1 = document.querySelector("#passward");
    pass.style.borderColor = "red";
    return false;
  }
  localStorage.setItem("username", username);
  localStorage.setItem("email", gmail);
  localStorage.setItem("passward", pass);
  localStorage.setItem("islogin", login1);
  window.location.href = "login.html";
  return false;
};
let login = () => {
  let username = document.querySelector("#username").value;
  let passward = document.querySelector("#passward").value;
  let check1 = localStorage.getItem("username");
  let check2 = localStorage.getItem("passward");
  if (username === check1 && passward === check2) {
    alert("login success");
    window.location.href = "carbook.html";
  } else {
    alert("Login not done");
    return false;
  }
};

let ins = () => {
  let pick = document.querySelector("#Location1").value;
  let drop = document.querySelector("#droplocation").value;
  let pickup = document.querySelector("#date").value;
  let dropo = document.querySelector("#dropoffdate").value;
  let time1 = document.querySelector("#time").value;
  let url = "http://localhost:3000/booking";
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      pickup: pick,
      dropoff: drop,
      pickupdate: pickup,
      dropoffdate: dropo,
      time: time1,
    }),
  });
  let log = localStorage.getItem("islogin");
  if (log == "yes") {
    window.location.href = "bookings.html";
  } else {
    alert("Please login first");
    window.location.href = "login.html";
  }
  return false;
};

let fetchdata = async () => {
  let url = "http://localhost:3000/booking";
  let res = await fetch(url);
  let result = await res.json();
  let show1 = document.querySelector("#pickupshow");
  let show2 = document.querySelector("#dropofshow");
  let show3 = document.querySelector("#dropofshow1");
  result.map((e) => {
    show1.innerHTML = `
        <p> ${e.pickup}</p>
         <p>${e.pickupdate}</p>
         <p>${e.time}</p>
      `;
    show2.innerHTML = `
      <p>${e.dropoff}</p>
      <p>${e.dropoffdate}</p>
      <p>${e.time}</p>
      `;
    show3.innerHTML = `
      <p>${e.dropoff}</p>
      <p>53 Albert St, Brisbane Old,</p>
      <P>Brisbane Old,4000</p>
      <button onclick="fillform(${e.id})">Update</button>
      `;
  });
};
let fillform=async(id)=>{
 
    let url= `http://localhost:3000/booking/${id}`
   let res=await fetch(url)
   let data=await res.json()
  
   let formdata=`

    
    <section id="booking" >
        <div class="book-div">
            
            <form action="">

            <div class="book-div1" style="background-color: red;">

                  <h2 style="margin-left:0px; font-size:30px; color:blue;">UPDATE YOUR FORM</h2>

                 <h4>UPDATE PICK-UP LOCATION</h4>
                 <input type="text" id="update-pick-loc">

                 
                 <h4>UPDATE DROP-OFF LOCATION</h4>
                 <input type="text" id="update-drop-loc">

                 
                 <h4>UPDATE PIC-UP DATE</h4>
                 <input type="date" id="update-pick-date">

                 
                 <h4>UPDATE DROP-OFF DATE</h4>
                 <input type="date" id="update-drop-date">

                 
                 <h4>UPDATE PIC-UP TIME</h4>
                 <input type="time" id="update-pic-time"> <br>


      <input type="submit" onclick="finalupdate('${id}')" style="width: 130px; height: auto; background-color: blue;margin-left: 90px; ">


                </form>

        

           
        </div>
    </section>
   
   `

   document.querySelector(".updateshow").innerHTML=formdata



}

let finalupdate=(id)=>{

  let updatepickloc=document.querySelector("#update-pick-loc").value;
  let updatedroploc=document.querySelector("#update-drop-loc").value;
  let updatepickdate=document.querySelector("#update-pick-date").value;
  let updatedropdate=document.querySelector("#update-drop-date").value;
  let updatepicktime=document.querySelector("#update-pic-time").value;


  
try{
  let url=`http://localhost:3000/booking/${id}`
    fetch(url,
      {method:"PUT",
       
      headers:{
          "Content-Type":"application/json",
      },

      body:JSON.stringify(
          {
            "pickup": updatepickloc,
            "dropoff": updatedroploc,
            "pickupdate": updatepickdate,
            "dropoffdate": updatedropdate,
            "time": updatepicktime

          }
      )
      })
      
  }
  catch(error){
      console.log(error);
      
  }


}

let cart = () => {
  window.location.href = "carssss.html";
};
let insert = () => {
  let uppick = document.querySelector("#up1").value;
  let ofdrop = document.querySelector("#off1").value;
  let datepick = document.querySelector("#datepick").value;
  let datedrop = document.querySelector("#datedrop").value;
  let timepick = document.querySelector("#timepick").value;
  let carname = document.querySelector("#namecar").value;
  let url = "http://localhost:3000/booking";
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      pickup: uppick,
      dropoff: ofdrop,
      pickupdate: datepick,
      dropoffdate: datedrop,
      time: timepick,
    }),
  });
  return false;
};
// let savedetailes=async()=>{
//   try {
//     let url = "http://localhost:3000/booking";
//     let response = await fetch(url);
//     let result2 = await response.json();
//     let showcar1 = document.querySelector("#showcar1");
//     let showcar2 = document.querySelector("#showcar2");
//     result2.map((e) => {
//       showcar1.innerHTML = `
//         <p> ${e.pickup}</p>
//          <p>${e.pickupdate}</p>
//          <p>${e.time}</p>
//       `;
//       showcar2.innerHTML = `
//       <p>${e.dropoff}</p>
//       <p>${e.dropoffdate}</p>
//       <p>${e.time}</p>
//       `;
//     });
//   } catch (error) {
//     console.log(error)
//   }
//   let carname = document.querySelector("#namecar").value;
//   if (carname == "Audi Q3") {
//     showcar2.innerHTML = `
//      <img src="car-12.jpg" alt="">
//      <p>The price of the car is $400</p>
//     `;
//   } else if (carname == "AMG A 45 S") {
//     showcar2.innerHTML = `
//      <img src="car-10.jpg" alt="">
//      <p>The price of the car is $800</p>
//     `;
//   } else if (carname == "c-class") {
//     showcar2.innerHTML = `
//      <img src="car-11.jpg" alt="">
//      <p>The price of the car is $450</p>
//     `;
//   } else if (carname == "AMG GT") {
//     showcar2.innerHTML = `
//      <img src="car-9.jpg" alt="">
//      <p>The price of the car is $900</p>
//     `;
//   } else if (carname == "Wrangler") {
//     showcar2.innerHTML = `
//      <img src="car-8.jpg" alt="">
//      <p>The price of the car is $500</p>
//     `;
//   }
// };


VANTA.BIRDS({
  el: ".signup",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 500.0,
  minWidth: 500.0,
  scale: 1.0,
  scaleMobile: 1.0,
});

// var typed = new Typed("#element", {
//   strings: [""],
//   typeSpeed: 100,
// });
