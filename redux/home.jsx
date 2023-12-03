import react from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {userselector} from  'react-rodux'
import {deleteuser } from './userreducer'

function home() {
    const classname =userselector((state) => state.user );


    const dispatch = useDispatch();
    const handleDelete = (id) => {
        dispatch(delteuser({id:id})) 

    } 

    return (
        <div classname = "container">
            <h2>crud app with JSON server</h2>
            <link  to="/create" classname = 'btn btn-success my-3'>create+</link>
             <table classname='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>name</th>
                        <th>email</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                  {user.map((user, index) => (
                <tr key = {index}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <td>
                            <link to={'/edit/  ${user.id}'} classname='btn btn-sm btn-primary'>delete</link>
                            <button onClick={()  => handleDelete(user.id)} classname='btn tn-sm btn-primary'>edit</button>
                        </td>
                    </td>
                </tr>
                  ) )}
                </tbody>
             </table>
        </div>
    )
}
export default home;