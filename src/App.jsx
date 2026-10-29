// import "./App.css";

// function App() {
//   return (
//     <div className="container">
//       <div className="form-box">

//         <h1>Registration Form</h1>
//         <form>

//           <label>Full Name</label>
//           <input
//             type="text"
//             placeholder="Enter your name"
//           />

//           <label>Email</label>
//           <input
//             type="email"
//             placeholder="Enter your email"
//           />

//           <label>Password</label>
//           <input
//             type="password"
//             placeholder="Enter password"
//           />

//           <label>Age</label>
//           <input
//             type="number"
//             placeholder="Enter your age"
//           />

//           <label>Date of Birth</label>
//           <input type="date" />

//           <label>Gender</label>

//           <div className="gender">
//             <label>
//               <input type="radio" name="gender" />
//               Male
//             </label>

//             <label>
//               <input type="radio" name="gender" />
//               Female
//             </label>

//             <label>
//               <input type="radio" name="gender" />
//               Other
//             </label>
//           </div>

//           <label>Select Course</label>

//           <select>
//             <option>Python</option>
//             <option>Java</option>
//             <option>React</option>
//             <option>JavaScript</option>
//             <option>MERN Stack</option>
//           </select>

//           <label>Skills</label>

//           <div className="skills">
//             <label>
//               <input type="checkbox" />
//               Java
//             </label>

//             <label>
//               <input type="checkbox" />
//               React
//             </label>

//             <label>
//               <input type="checkbox" />
//               Python
//             </label>

//             <label>
//               <input type="checkbox" />
//               Flutter
//             </label>
//           </div>

//           <label>Country</label>

//           <select>
//             <option>USA</option>
//             <option>India</option>
//             <option>Canada</option>
//             <option>Australia</option>
//             <option>UK</option>
//           </select>

//           <label>Address</label>

//           <textarea
//             placeholder="Enter your address"
//           ></textarea>

//           <label>Website</label>

//           <input
//             type="url"
//             placeholder="https://example.com"
//           />

//           <label>Preferred Time</label>

//           <input type="time" />

//           <label>Favorite Color</label>

//           <input
//             type="color"
//             className="color-input"
//           />

//           <label>Experience: 0 Years</label>

//           <input
//             type="range"
//             min="0"
//             max="10"
//             defaultValue="0"
//             className="range-input"
//           />

//           <label>Upload Photo</label>

//           <input
//             type="file"
//             accept="image/*"
//             className="file-input"
//           />
          
//           <div className="terms">
//             <header></header>
//             <input type="checkbox" />
//             <span>I agree to the Terms and Conditions</span>
//           </div>

//           <button type="submit">
//             Register
//           </button>

//         </form>

//       </div>
//     </div>
//   );
// }

// export default App;
//  import { useState, useEffect } from "react";

// function App() {
//   const [text, setText] = useState("");
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     if (text === "") {
//       setMessage("Text box is empty");
//     } else {
//       setMessage("You typed: " + text);
//     }
//   }, [text]);

//   return (
//     <div className="container">
//       <h1>Type Something</h1>

//       <input
//         type="text"
//         placeholder="Enter text here"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       />

//       <h3>{message}</h3>
//     </div>
//   );
// }

// export default App;
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./Login";
// import Dashboard from "./Dashboard";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
// import Quotes from "./Quotes";

// function App() {
//   return (
//     <div>
//       <Quotes />
//     </div>
//   );
// }

// export default App;
