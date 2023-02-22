import { Card, CardBody, Container, Input, Form, Label } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useRef } from "react";
import { LoadAllCatogoires } from "../services/category-service";
import { useState } from "react";
import JoditEditor from "jodit-react";
import { getCurrentUserDetail } from "../auth";
import { createPost as doCreatePost } from "../services/post-service";
var axios = require('axios');
var FormData = require('form-data');
var fs = require('fs');

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

  // const [image, setImage]= useState(null)

  const fieldchanged = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
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

  const CreatePost = (event) => {
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


    // doCreatePost(post).then(data=>{
    //   alert("post Created")

    // }).catch((error)=>{
    //   alert('error')
    //   console.log(error)
    // })

    var config = {
      method: 'post',
    maxBodyLength: Infinity,
      url: 'http://localhost:9090/api/user/1/category/1/posts',
      headers: { 
        'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ2akBkZXYuaW4iLCJleHAiOjE2NzY5OTcxMTcsImlhdCI6MTY3Njk3OTExN30.en_V1R2_0t9bqrgcWwDp2g-4mv9QnwNEK-9v1jJE4l0Wd53TprqvfBdOduWiIdsrbV63rZW-v5-XCgXa-oapSA', 
      },
      data : post
    };

    axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

    //Handling file Change event:

  };
    const handleFileChange =(event)=>{
      console.log(event.target.files[0])
    }
  return (
    <div className="wrapper">
      <Card>
        <CardBody>
          <h1>What is in your Mind?</h1>
          {JSON.stringify(post)}

          <Form onSubmit={CreatePost}>
            <div>
              <Label for="title">Post Title</Label>
              <Input
                type="text"
                id="posttitle"
                placeholder="Enter Here"
                name="title"
                onChange={fieldchanged}
              />
            </div>
            <div>
              <Label for="content">Post Content</Label>
              {/* <Input
                type="textarea"
                id="postdescription"
                placeholder="Enter Here"
              /> */}
              <JoditEditor
                ref={editor}
                // value={content}

                onChange={contentFieldChanged}
              />
            </div>

            <div className="mt-3" encType="multipart/form-data">
              <Label for="image">Upload Image</Label>
              <Input 
              id="postImage" 
              type="file" 
              name="image"
              // onChange={handleFileChange}
              onChange={fieldchanged}

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
              <button type="submit" color="primary">
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
