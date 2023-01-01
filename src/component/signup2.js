import React, {useState} from "react";

function Signup2() {

    const [data, setData] = useState({
        name: '',
        email: '',
        createpassword: '',
        bio: '',
    });

    const handlechange = (event, property) => {
        setData({ ...data, [property]: event.target.value });
      
    };

    const resetform = () => {
        setData({
            profile:'',
            name: '',
            email: '',
            createpassword: '',
            bio: '',
        });
    };

    const submitform = (e) => {
        e.preventDefault();
        console.log(data);

    };

    return (
        <container className='forminput'>
            <h1>Profile </h1>
            {JSON.stringify(data)}

            <form onSubmit={submitform}>

                <formgroup>
                    <label for='name'> Name</label><br/>
                    <input
                        type='text'
                        placeholder='Enter Your Name'
                        id='name'
                        onChange={(e) => handlechange(e, 'name')}
                        value={data.name} />
                </formgroup><br/>

                <formgroup>
                    <label for='email'>Email Id</label><br/>
                    <input type='text' placeholder='Enter Your Email' id='password' onChange={(e) => handlechange(e, 'email')} value={data.email}></input>
                </formgroup><br/>

                <formgroup>
                    <label for='createpassword'>Password</label><br/>
                    <input
                        type='text'
                        placeholder='Enter Your Password'
                        id='createpassword'
                        onChange={(e) => handlechange(e, 'createpassword')}
                        value={data.createpassword} />

                </formgroup><br/>

                <formgroup>
                    <label for='bio'>Bio</label><br/>
                    <input
                        type='textarea'
                        placeholder='Enter Your Bio'
                        id='bio'
                        onChange={(e) => handlechange(e, 'bio')}
                        value={data.bio} />
                </formgroup><br/>

                <container>
                    <button className='signin1'>Next </button>
                    <button onClick={resetform} type="reset">Reset</button>
                </container>





            </form>
        </container>


    );
}

export default Signup2;
