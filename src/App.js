// import React, { useState , useEffect} from "react";
// import "./App.css";
// import { GoGlobe } from "react-icons/go";
// import { initializeApp } from "firebase/app";
// import { getDatabase ,push , ref ,set,onChildAdded} from "firebase/database";
// const firebaseConfig = {
//   apiKey: "AIzaSyAfKiOhu8J_8n4t_PpsP5jkaZrxnp34q6U",
//   authDomain: "chat-app-21-08-2022.firebaseapp.com",
//   databaseURL: "https://chat-app-21-08-2022-default-rtdb.firebaseio.com",
//   projectId: "chat-app-21-08-2022",
//   storageBucket: "chat-app-21-08-2022.appspot.com",
//   messagingSenderId: "642761414715",
//   appId: "1:642761414715:web:cef5cab99a50209faca41e"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// const db = getDatabase();
// const chatListRef = ref(db, 'chats');

// function App() {
//   const [name , setName] = useState("")
//   const [buttonClick , setButtonClick] = useState(false)
//   const [message ,setMessage] = useState("")
//   const [chats ,setChats] = useState([])

//   const onchangeHandler = (event) => {
//   console.log(event.target.value)
//   setName(event.target.value )
//   }
//   const onclickHandler = ()=> {
//     console.log("button Clicked")
//     setButtonClick(true)

//     console.log(name)
//   }

//   const onMessageHandler = (event) =>{
// console.log(event.target.value)
// setMessage(event.target.value)
//   }
// const sendChat = () =>{

// const chatRef = push(chatListRef);
// set(chatRef, {
//   name , message:message
// });
//   // const c = [...chats]
//   // setChats([...chats ,message])
//   // c.push({name , message:message})
//   // setChats(c)
//   console.log(chats)
//   console.log("message sent")
//   setMessage('')

// }
//   const onSendHandler = () => {
//     sendChat()

//   }
//   return (
//     <div>
//     { !buttonClick && <><div
//       className="container d-flex flex-column align-items-center  "
//       style={{ marginTop: "200px" }}
//     >
//       <div
//         className="card border border-4 border-secondary text-center  mb-1 bg-primary text-dark fs-4 fw-bold fst-italic shadow"
//         style={{ width: "25rem", height: "20rem", borderRadius: "25px" }}
//       >
//         <div className="card-body">
//           <div>
//             <GoGlobe className="icons" />
//           </div>
//           <p className="my-3">Chat with Me </p>
//           <input placeholder="Enter Name" className="rounded-4" onChange={onchangeHandler} value={name}></input>

//           <button
//             type="button"
//             className="btn btn-outline-dark fs-5 fw-bold fst-italic border border-3 "
//             style={{ marginTop: "20px", width: "150px", borderRadius: "20px" }}
//             onClick={onclickHandler}
//           >
//             Sign up
//           </button>
//         </div>
//       </div>
//     </div>
//     </>}
//     {
//       buttonClick && <>
//       <div>
//       <h3 className="text-primary">Name of User :{name}</h3>
//       <div id="chat" className="chat-container">
//       {chats.map((c,i) => (
//         <div key={i} className="container ">
//           <p className="chatbox">
//             <strong>{name}: </strong>
//             <span>{chats[i]}</span>
//           </p>
//         </div>
//       ))}
//     </div>

//       </div>

//         <div className="btm">
//         <input
//           type="text"

//       onChange={onMessageHandler}
//           placeholder="enter your chat"
//           value={message}
//         ></input>
//         <button onClick={onSendHandler}>Send</button>
//       </div>
//       </>

//     }
//     </div>
//   );
// }

// export default App;
import React, { useEffect, useState } from "react";
import { GoGlobe } from "react-icons/go";
import "./App.css";
import { initializeApp } from "firebase/app";
import { getDatabase, push, ref, set, onChildAdded } from "firebase/database";



const firebaseConfig = {
  apiKey: "AIzaSyC3vlVxiTUeSY_qMiR2F5XSK238S2y0VCI",
  authDomain: "gentle-current-353215.firebaseapp.com",
  databaseURL: "https://gentle-current-353215-default-rtdb.firebaseio.com",
  projectId: "gentle-current-353215",
  storageBucket: "gentle-current-353215.appspot.com",
  messagingSenderId: "5551107221",
  appId: "1:5551107221:web:3f3eed69520bfd124e3f9c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

function App() {
  const [name, setName] = useState("");
  const [chats, setChats] = useState([]);
  const [message, setMessage] = useState("");


  const db = getDatabase();
  const chatListRef = ref(db, "chats");

  useEffect(() => {
    onChildAdded(chatListRef, (data) => {
      setChats((chats) => [...chats, data.val()])
      // console.log(data.val())
   
    });
  }, []);

  const sendChat = () => {
    const chatRef = push(chatListRef);
    set(chatRef, {
      name,
      message: message,
    });
    setMessage("");
  };
 

  return (
    <div>
      {name ? null : (
        <div className="text-center mb-5 bg-primary text-dark fs-4 fw-bold fst-italic shadow">
         <div>
                    <GoGlobe className="icons" />
                  </div>
                  <p className="my-3">Chat with Me </p>
          <input style={{ width: "25rem", height: "4rem", borderRadius: "25px" ,marginTop:"40px" }} className=" mb-1 bg-primary text-dark fs-4 fw-bold fst-italic shadow"
            type="text"
            placeholder="Enter your name"
           
            onBlur={(e) => setName(e.target.value)}
          ></input>
          <botton 
          className="text-center text-dark fs-4 fw-bold fst-italic shadow p-2 m-2 btn btn-warning"
          >CLick me</botton>
        </div>
      )}
      {name ? (
        <div>
          <h4 className="text-info fw-bolder">User name:<span className="text-warning text-capitalize fw-bolder fst-italic"> {name}</span></h4>
          <div id="chat" className="chat-container">
            {chats.map((c, i) => (
              <div
                key={i}
                className={`container ${c.name === name ? "me" : ""}`}
              >
                <p className="chatbox">
                  <strong className="text-capitalize text-success ">{c.name} : </strong>
                  <span className="fw-bolder font-monospace text-capitalize text-primary">{c.message}</span>
                </p>
              </div>
            ))} 
          </div>
          <div className="btm">
            <input
              type="text"
              placeholder="enter message"
              onInput={(e) => setMessage(e.target.value)}
              value={message}
            ></input>
            <button type="submit" onClick={(e) => sendChat()}>
              send
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default App;
