
// import React, { useState , useEffect} from 'react';
// import { useParams,Link } from 'react-router-dom'; // or any other named export from 'react-router-dom'
// import axios from 'axios'

// function Read() {
//     const [data, setData] = useState([])
//      const{id} = useParams();

//     useEffect(() => {

//         axios.get('http://localhost:3000/user/' +id)
//             .then(res => setData(res.data))
//             .catch(err => console.log(err))

//     }, [])
//     return (
//         <div>
//            <h3>Detail of user</h3>
//           <strong>Name:{data.name}</strong>
//           <br />
//           <strong>Company:{data.company}</strong>
//           <br />
//           <strong>Username:{data.username}</strong>
//           <br />
//           <strong>Email:{data.email}</strong>
//           <br />
//          <Link to={`/update/${id}`}>Edit</Link>
//          <Link to={"/"}>Back</Link>

//         </div>
      
        
//     )
// }

// export default Read
