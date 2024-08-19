// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import {Link, useNavigate} from 'react-router-dom'

// function Home() {
//    const [data,setData]= useState([])
//    const navigate = useNavigate();

//    useEffect(()=>{

//            axios.get('http://localhost:3000/user')
//           .then(res => setData(res.data))
//           .catch(err => console.log(err))
        
//    },[])
   
//    const handleDelete =(id)=>{
//     const confirm = window.confirm("would u like to delete?");
//     if(confirm)
//     {
//         axios.delete(`http://localhost:3000/user`+id)
//         .then(res =>{
//             Location.reload();
//         }).catch(err=>console.log(err));
        
//     }
//   }

//   return (
//     <div>
//         <Link to="/create">Add</Link>
//        <table>
//         <thead>
//             <tr>
//                 <th>id</th>
//                 <th>name</th>
//                 <th>company</th>
//                 <th>username</th>
//                 <th>email</th>
//                 <th>action</th>
              
               
//             </tr>

//         </thead>
//         <tbody>
//             {
//                 data.map((d,i)=>(
//                     <tr key={i}>
//                         <td>{d.id}</td>
//                         <td>{d.name}</td>
//                         <td>{d.company}</td>
//                         <td>{d.username}</td>
//                         <td>{d.email}</td>
                      
              
//                         <td>
//                            <button> <Link to={`/update/${d.id}`}>Edit</Link></button>
//                             {/* <button>Edit</button> */}
//                            {/* <button><Link to={`/read/${d.id}`}>Read</Link></button>  */}
//                             <button onClick={e => handleDelete(d.id)}>delete</button>
//                         </td>

                       
//                     </tr>
//                 ))
//             }
//         </tbody>
//        </table>
//     </div>
//   )

  


// }

// export default Home

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
   const [data, setData] = useState([]);
   const navigate = useNavigate();

   useEffect(() => {
       axios.get('http://localhost:3000/user')
          .then(res => setData(res.data))
          .catch(err => console.log(err));
   }, []);
   
   const handleDelete = (id) => {
       const confirm = window.confirm("Would you like to delete?");
       if (confirm) {
           axios.delete(`http://localhost:3000/user/${id}`) // Added `/` before id
           .then(res => {
               setData(data.filter(item => item.id !== id)); // Update state to remove deleted item
           }).catch(err => console.log(err));
       }
   };

   return (
    <div>
        <Link to="/create">Add</Link>
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>company</th>
                    <th>username</th>
                    <th>email</th>
                    <th>action</th>
                </tr>
            </thead>
            <tbody>
                {data.map((d, i) => (
                    <tr key={i}>
                        <td>{d.id}</td>
                        <td>{d.name}</td>
                        <td>{d.company}</td>
                        <td>{d.username}</td>
                        <td>{d.email}</td>
                        <td>
                            <Link to={`/update/${d.id}`}>
                                <button>Edit</button>
                            </Link>
                            <button onClick={() => handleDelete(d.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  );
}

export default Home;
