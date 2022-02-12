import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Thanks from "./components/functional"
import WelcomeUser from "./components/rendering/practice1"
import Practice2 from "./components/rendering/practice2"
import Practice3 from "./components/rendering/practice3"
import ParentComponent from "./components/question4"
import Message from "./components/state/logical"
// import Example from "./components/state/logical1"
import Counter from "./components/state/logical2"
import Practice4 from "./components/rendering/practice4"
import NameList from "./list/example"
import Name from "./list/example1"
import List from "./list/example3"
import Form2 from "./forms/Form2"
// import Parent from "./components/Exam"
import Example from "./components/lifecycle/example"
import Example1 from "./components/lifecycle/example1"
import Example4 from "./components/lifecycle/example4"
import Example9 from "./components/lifecycle/example9"
// import Logical3 from "./Hooks/logical3"
// import Task from "./ParentChild/task"
import App from "./ParentChild/Parent" 
// import Parent from "./Exam/Child"
import Practical from "./ParentChild/practical"

// ReactDOM.render(
//   <React.StrictMode>
//     <ParentComponent/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
ReactDOM.render(
  <React.StrictMode>
    <Thanks/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
