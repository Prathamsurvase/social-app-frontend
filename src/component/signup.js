
 import { useState,useRef, useEffect } from 'react';
import './signup.css';
  // import PreviewImage from './previewimage';



 function Signup() {

    const [data, setData] = useState({
        name: '',
        email: '',
        createpassword: '',
        bio: '',
    });

    const handlechange = (event, property) => {
        setData({data, [property]: event.target.value });
      
    };

    const [image, setImage] = useState('')

    const imageupload= useRef(null);
function handleImage(e) {
    setImage(e.target.files[0])
    console.log(e.target.files)
    }

const [preview, setPreview] = useState();
    useEffect(()=>{
        if (image){
     const reader= new FileReader();
     reader.onloadend= ()=>{
        setPreview(reader.result);
     };
     reader.readAsDataURL(image);

     }else{
        setPreview(null)
     }
    }, [image]);

    
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
            <h1>Profile Setup</h1>
            {JSON.stringify(data)}

           {preview ? (<img src={preview} alt="preview" onClick={()=>{
            setImage(null);
           }}/> 
     ) : (
            <button className='profilebutton'
            onClick={()=>{
                imageupload.current.click();
            }}>Upload</button>)}
            <input hidden type="file" onChange= { handleImage } ref={imageupload}/>

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
                 <link to="/Signup2">next</link>
                    <button onClick={resetform} type="reset">Reset</button>
                </container>





            </form>
        </container>


    );
}

export default Signup;