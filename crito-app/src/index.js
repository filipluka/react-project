import React from 'react';
import ReactDOM from 'react-dom/client';
// import {Router} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
// import Home from "./pages/home";
// import News from "./pages/news";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* <Route path="/" element={<Layout />}> */}
//           <Route index element={<Home />} />
//           <Route path="news" element={<News />} />
//           {/* <Route path="contact" element={<Contact />} />
//           <Route path="*" element={<NoPage />} /> */}
//         {/* </Route> */}
//       </Routes>
//     </BrowserRouter>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
