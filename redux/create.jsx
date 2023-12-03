import react, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { adduser } from './userreducer'


function create() {
    const [name,setname] = useState('')
    const [email, setemail] = usestate('')
    const user = useSelector((state) => state.user);


    const dipatch = usedispatch();
    const navigate = usenavigate();

    const handlesubmit = (event) => {
        event.preventdefault();
        dispatch(adduser({id: user [user.length - 1].id + 1, name, email}))
        navigate('/')


}
    return (
        <div className='d flex w-100 vh-100 justify-content-center align-items-center'>
        <div classname='w-5 border bg-secondary text-white p-5'>
        <h3>add new user</h3>
        <form onSubmit={handlesubmit}>
       <div>
         <label htmlFor="name">name:</label>
        <input type="text" name='name' classname='form-control' placeholder='enter the name ' onChange={e => setname(e.targetvalue)} />
        </div>
        </form>
        </div>
        <div>
        <label htmlFor="email">email:</label>
       <input type="email" name='email' classname='form-control' placeholder='enter the email' onChange={e => setemail(e.targetvalue)} />
       </div>
       <br />
       <button classname = 'btn btn-info'>submit</button>

        </div>
    ) 
}