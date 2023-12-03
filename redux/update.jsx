import react from 'react'

import { useDispatch, useSelector } from 'react-redux';
import {useparams } from 'react-route-dom'
import { updateuser } from './userreducer';

 
function update() {
    const {id} = useparams();
    const users = useSelector((state) => state.users);
    const existinguser = user.filter(f => f.id === id);
    const {name, email} = existinguser[0];
    const [uname,setname] = useState(name)
    const [uemail, setemail] = usestate(email)
    const dipatch = useDispatch();
    const navigate = usenavigate();


    const handleupdate =(event) => {
        event.preventdefault();
        dispatchEvent(updatauser({
            id: id,
            name: uname,
            email: uemail,
        }))

     navigate('/')

    }


    return (
        
        <div className='d flex w-100 vh-100 justify-content-center align-items-center'>
        <div classname='w-5 border bg-secondary text-white p-5'>
        <h3>Updateuser</h3>
        <form onSubmit={handleupdate}>
       <div>
         <label htmlFor="name">name:</label>
        <input type="text" name='name' classname='form-control' placeholder='enter the name '  value={uname} onChange={e => setname(e.target.value)} />
        </div>
        </form>
        </div>
        <div>
        <label htmlFor="email">email:</label>
       <input type="email" name='email' classname='form-control' placeholder='enter the email' value = {uemail}  onChange={e => setemail(e.target.value)} />
       </div>
       <br />
       <button classname = 'btn btn-info'>update</button>

        </div>
    )

}
export default update
