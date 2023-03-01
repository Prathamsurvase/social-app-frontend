import { Card, CardBody, Container, Input, Form, Label } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useRef } from "react";
import { LoadAllCatogoires } from "../services/category-service";
import { useState } from "react";
import JoditEditor from "jodit-react";
import { getCurrentUserDetail } from "../auth";
import "./createform.css";
import { createPost as doCreatePost } from "../services/post-service";
import { MultiSelect } from "react-multi-select-component";
import { FcImageFile } from "react-icons/fc";
import axios from 'axios';

// var fs = require('fs');

const Addpost = () => {
  const editor = useRef(null);
  // const [content, setContent] = useState(""); 
   const [user, setUser] = useState(undefined)

  const [post, setPost] = useState({
    title: "",
    content: "",
    categoryId: "",
    image: "",
  });

  const options = [{
    
  }]

  const [postImage, setPostImage]= useState("")

  const [createPostImage, setcreatePostImage] = useState();



  const fieldchanged = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
    setPostImage(URL.createObjectURL(event.target.files[0]))
    setcreatePostImage(
      event.target.files[0]
    )
  };

  const contentFieldChanged = (data) => {
    setPost({ ...post, content: data });
  };
  // const config={
  //   placeholder: "Start typing..."
  // }

  const [categories, setCategories] = useState([]);

  useEffect(() => {

    setUser(getCurrentUserDetail())
    LoadAllCatogoires()
      .then((data) => {
        console.log(data);
        setCategories(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const CreatePost = async (event) => {
    event.preventDefault();
    console.log("form is submitted");
    console.log(post);
    if (post.title.trim() === "") {
      alert("post title is required");
      return;
    }
    if (post.content.trim() === "") {
      alert("post content is required");
      return;
    }

    // submit the form to the server
      post['userId']= user.id
      
      var formData = new FormData();
      formData.append('title', post?.content);
      formData.append('content', post?.title);
      formData.append('image', createPostImage);

      try {
        const response = await axios.post(`http://localhost:9090/api/user/${1 }/category/${1}/posts`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    


  };
    const handleFileChange =(event)=>{
      console.log(event.target.files[0])
    }
  return (
    <div className="wrapper" id="createmaincontainer">
      <Card>
        <CardBody>
          <h1 id="createheading">What is in your Mind?</h1>
          {/* {JSON.stringify(post)} */}

          <Form onSubmit={CreatePost}>
            <div className="header">
            <div className="titlecontainer">
              <label for="title">Post Title:</label>
              <input
               type="text"
                id="posttitle"
                placeholder="Enter Here"
                name="title"
                onChange={fieldchanged}
                style={{padding:"10px"}}
              />
            </div>
            <div className="tagcontainer">
              <label for="tag">Tags:</label>
              <input
               type="text"
                id="postags"
                placeholder="Enter Here"
                name="tag"
                // onChange={fieldchanged}
                style={{padding:"10px"}}
              />
            </div>
            </div>
            
            <div className="mt-3" encType="multipart/form-data" id="imagecontainer">
              <label for="image" ><div className="imageicon" ><FcImageFile/></div></label>
              <input 
              id="image" 
              type="file" 
              name="image"
              onChange={fieldchanged}
            
              style={{visibility:"hidden", position:"absolute"}}

              />
              <label id="uploadtext">Upload Your Image</label>
              
            </div>
            <div id="post">

              {
                postImage !== "" && <><img id="postimage" src={postImage} alt="image"></img></>
              }
            
            </div>

            <div>
              <Label for="content">Post Content</Label>
              {/* <Input
                type="textarea"
                id="postdescription"
                placeholder="Enter Here"
              /> */}
              <JoditEditor id="contentbox"
                ref={editor}
                // value={content}

                onChange={contentFieldChanged}
              />
            </div>



            <div>
              <Label for="category">Category</Label>
              <Input
                type="select"
                id="category"
                placeholder="Enter Here"
                name="categoryId"
                onChange={fieldchanged}
                defaultValue={0}
                >
                <option disabled value={0}>
                  --Select Category--     
                </option>
                
                {categories.map((category) => (
                  <option value={category.categoryId} key={category.categoryId}>
                    {category.categoryTitle}
                  </option>
                  
                ))}

                {/* <option>None</option> 
                <option>Programming Language</option>
                <option>Machine Learning</option>
                <option>Digital Marketing</option>
                <option>Ui/Ux Design</option>
                <option>Photography</option>
                <option>Music</option>
                <option>Health and Fitness</option>
                <option>Other</option> */}
              </Input>
            </div>

            <Container className="text-center">
              <button type="submit" id="createpostbtn">
                Create Post
              </button>
            </Container>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};

export default Addpost;
