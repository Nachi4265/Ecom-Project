// import './3D.css';

// import content from './Product-data.json';

// function threeD(){
//     return(
//         <div className="threeD">
//             Animation
//             <br></br>
//             {
//                 content.map(content=>{
//                     return(
//                         <div className="box">
//                             {content.title}
//                         </div>

//                     )
//                 })
//             }
//         </div>
//     );
// }

// export default threeD;

var jcontent = {
    "firstName": "John",
    "lastName": "Smith"
}

var output = document.getElementById('output');
output.innerHTML = jcontent.firstName;