// var React = require('react');//instead of doing this do below written codes
// import React from 'react';
// var ReactDOM = require('react-dom');//instead of doing this do below written codes
// import ReactDOM from 'react-dom';
// ReactDOM.render(<h1> Hello world my name is vaibhav</h1>, document.getElementById('root'));

// JXS full form = javascript extension or javascript XML

//pure JAVAscipt code of above render code

// var h1=document.createElement('h1')
// h1.innerHTML="vaibhav kushwaha"
// document.getElementById('root').appendChild(h1)

//how to render multiple element inside reactdom.render in react js
// ReactDOM.render(
//   <div>
//   <h1> Hello world my name is kushwaha</h1>
//     <p> vaibhav cool</p> </div>, document.getElementById('root'));
//or
//if your version of reactDom is above 16.0.0 then you dont have to write div to render multiple element
//in react V16 it's possible for render() to return an array of element
// ReactDOM.render(
//   [
//   <h1> Hello world my name is kushwaha</h1>,
//     <p> vaibhav cool</p> ], document.getElementById('root'));

//understanding react fragment in react js

// ReactDOM.render(
//   <React.Fragment>
//   <h1> Hello world my name is kushwaha</h1>
//   <p> vaibhav cool</p>
//   <h2>awesome</h2>
//   </React.Fragment>, document.getElementById('root'));
//or
//use below method always in comparison of above three
// ReactDOM.render(
//   <>
//   <h1> Hello world my name is kushwaha</h1>
//   <p> vaibhav cool</p>
//   <h2>awesome</h2>
//   </>, document.getElementById('root'));

//JSX challenge
//create a react app from scratch
//add one h1 element in it
//add one p element in it
//Add list of fav 5 netflix series in it using an order list

// ReactDOM.render(
//   <>
//     <h1>Vaibhav Kushwaha fav Netflix Series</h1>
//     <p>List of 5 series.</p>
//     <ol>
//       <li>GOT</li>
//       <li>Dark</li>
//       <li>Stranger things</li>
//       <li>predestination</li>
//       <li>YOU</li>
//     </ol>
//   </>,document.getElementById('root')
// );

//JS expression in JSX in react js
//we can only use pair of curly braces only for expression not for statement .
// const flname='vaibhav kushwaha'
// ReactDOM.render(
//   <>
//   <h1> my name is {flname} </h1>
//   <p> lucky number is {Math.random()}</p>
//   </>,
//   document.getElementById('root')
// );

//ES6 template literals in JSX in react js
// const fname='vaibhav '
// const lname='kushwaha'
// ReactDOM.render(
//   <>
//   <h1> {` my name is ${fname} ${lname}`} </h1>
//   <p> lucky number is {Math.random()}</p>
//   </>,
//   document.getElementById('root')
// );

//react js challenge Display Current Date and Time in JSX
//Create a react app from scratch
//add one h1 element ex. your name
//add one  p element int  it with current Date
//Add one  P element IN it wiht Current Time

// const currDate = new Date().toLocaleDateString()

// const currTime = new Date().toLocaleTimeString()
// ReactDOM.render(
//   <>
//     <h1>Vaibhav kushwaha</h1>
//     <p>{`todays date is ${currDate}`}</p>
//     <p>{`Current time is ${currTime}`}</p>
//   </>,document.getElementById('root')
// )

//JSX attributes in react js
// const name='vaibhav '
// const img1="https://picsum.photos/200/300"
// const img2="https://picsum.photos/210/300"
// const links="https://www.thapatechnical.com"
// const img3="https://picsum.photos/230/300"
// ReactDOM.render(
//     <>
//         <h1 contentEditable='true'>my name is {name}</h1>
//         <img src={img1} alt="random images"/>
//         <img src={img3} alt="random images"/>
//         <a href={links}>
//         <img src={img2} alt="random images"/>
//         </a>
//     </>,document.getElementById('root')
// )

//CSS styling and importing CSS files in react js
// import './index.css';
// const name='vaibhav '
// const img1="https://picsum.photos/200/300"
// const img2="https://picsum.photos/210/300"
// const links="https://www.thapatechnical.com"
// const img3="https://picsum.photos/230/300"
// ReactDOM.render(
//     <>
//         <h1 className="heading">my name is {name}</h1>
//         <div className='img_div'>
//         <img src={img1} alt="random images"/>
//         <img src={img3} alt="random images"/>
//         <a href={links}>
//         <img src={img2} alt="random images"/>
//         </a>
//         </div>
//     </>,document.getElementById('root')
// )

//How to use Google fonts in react js applicaton
// import './index.css';
// const name='vaibhav '
// const img1="https://picsum.photos/200/300"
// const img2="https://picsum.photos/210/300"
// const links="https://www.thapatechnical.com"
// const img3="https://picsum.photos/230/300"
// ReactDOM.render(
//     <>
//         <h1 className="heading">my name is {name}</h1>
//         <div className='img_div'>
//         <img src={img1} alt="random images"/>
//         <img src={img3} alt="random images"/>
//         <a href={links}>
//         <img src={img2} alt="random images"/>
//         </a>
//         </div>
//     </>,document.getElementById('root')
// )

//INternal CSS and inline CSS styling in react js
// import './index.css';
// const name='vaibhav '
// const img1="https://picsum.photos/200/300"
// const img2="https://picsum.photos/210/300"
// const links="https://www.thapatechnical.com"
// const img3="https://picsum.photos/230/300"

// const heading={
//     textTransform: 'capitalize',
//     color:'#fa9191',
//     textAlign: 'center',
//     fontWeight: 'bold' ,
//     textShadow: '0px 2px 4px #ffe9c5' ,
//     margin: '50px 0' ,
//     fontFamily: '"Poppins", sansSerif',
// }
// ReactDOM.render(
//     <>
//         <h1 style={heading}>my name is {name}</h1>
//         <div className='img_div'>
//         <img src={img1} alt="random images"/>
//         <img src={img3} alt="random images"/>
//         <a href={links}>
//         <img src={img2} alt="random images"/>
//         </a>
//         </div>
//     </>,document.getElementById('root')
// )

//Creating simple greeting  website using react js
//create  a react app from scratch
// show a heading that says Hello Sir, good morning if time is between 1 to 11 am
//Good afternoon if 12 pm to 7 pm
//Good night if 7 pm to till mid night
//Apply CSS in it then dynamically change the color of gretting parts only using inline CSS style
// import './index.css'
// let curDate= new Date();
// curDate=curDate.getHours();
// let greeting = '';
// const cssStyle={ };
// if(curDate>=1&&curDate<12){
//     greeting='Good Morning'
//     cssStyle.color='green'
// }
// else if(curDate>=12&&curDate<19){
//     greeting='Good Afternoon'
//     cssStyle.color='blue'
// }
// else{
//     greeting= 'Good Night'
//     cssStyle.color='black'
// }
// ReactDOM.render(
//     <>
// <div>
//     <h1>Hello Sir, <span style={cssStyle}>{greeting}</span></h1>
//     </div>
//     </>,document.getElementById('root')
// );

//React components, Functional Component in react js
//in this we created several components of App go check in its components in left hand side bar
// import App from './App'
// ReactDOM.render(<App/>, document.getElementById('root'))

//Rewrite our project into components in react js
// import './index.css'
// import App from './App';
// ReactDOM.render(
//     <App/>,
//     document.getElementById('root')
// )

// //ES6 Modules Import Export in react js
// import * as ques from './App'

// ReactDOM.render(
//     <>
//         <ol>
//             <li>vaibhav</li>
//             <li>{ques.default}</li>
//             <li>{ques.favprog}</li>
//             <li>{ques.myname()}</li>
//             <li>{ques.mynames()}</li>
//         </ol>
//     </>,document.getElementById('root')
// )

//Create simple Calculator
// import App from './App'
// ReactDOM.render(
//    <App/>,document.getElementById('root')
// )

// import React from "react";
// import ReactDOM from "react-dom";

//Netflix App creation
// import React from "react";
// import ReactDOM from "react-dom";
// import App from './App'
// import "./index.css"

//we can create another funtion and then call Map function or we can direnctly define function insde map function in Reactdom .render
// function ncard(val){
//    return (
//         <Card
//         sname= {val.sname}
//         imgscr={val.imgscr}
//         title={val.title}
//         links={val.links}
//         />
//    );
// }
// ReactDOM.render(
// <>
// <h1 className="heading_style">List Of Top 5 MX Player Series</h1>

// {/* {Sdata.map(ncard)} */}
// {Sdata.map(function ncard(val){
//    return (
//         <Card
//         sname= {val.sname}
//         imgscr={val.imgscr}
//         title={val.title}
//         links={val.links}
//         />
//    );
// })}
// </>
//     , document.getElementById("root")
//  );

//in above we had seen using simple function now we see using fat arrow function
//in react the map() function is most commonly used for rendering a lst of data to the dom
// ReactDOM.render(
//         <>
//         <h1 className="heading_style">List Of Top 5 MX Player Series</h1>

//         {/* {Sdata.map(ncard)} */}
//         {Sdata.map((val)=>{
//            return (
//                 <Card
//                 key={val.id}
//                 sname= {val.sname}
//                 imgscr={val.imgscr}
//                 title={val.title}
//                 links={val.links}
//                 />
//            );
//         })}
//         </>
//    <App/> , document.getElementById("root")
//     );

//react hooks
//Hooks are the new feature introduced in the rreact 16.8 version
//it allows you to use stole and other react features wthout writing a class Hooks are the functions which "hook into" React state and lifecycle features from function components
//it does not work inside classes
//Hooks should be used at the top level of the react function

import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";
import "./Keep.css";
import App1 from "./Keep";

// import TodoList from "./Todolist"
// import ToDoList from "./ToDoListt" //one component is ListCom if ever come to study check that
ReactDOM.render(<App1 />, document.getElementById("root"));

//The usecontext hook is little different though it just makes things nicer.
//in case you havent heard of react context API , its a way to pass data deeply throughout your app without having to manually pass props down through
//multiple levels.

//Use Effects hook
//By using  this hook you tell React that your component needs to do something after render. React will remember the function you passed and call it later after performing the DOM
// updates in this effect we set the document title, but we could alse perform data fetching or call some other imperative API.

//React hooks never work with class component it only works with functional components.
