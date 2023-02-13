import { Card, CardBody, Container, Input, Form, Label } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useRef } from "react";
import { LoadAllCatogoires } from "../services/category-service";
import { useState } from "react";
import JoditEditor from "jodit-react";
import { createPost as doCreatePost } from "../services/post-service";

const Addpost = () => {
  const editor = useRef(null);
  // const [content, setContent] = useState("");

  const [post, setPost] = useState({
    title: "",
    content: "",
    categoryId: "",
  });

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

    doCreatePost(post).then(data=>{
      alert("post Created")

    }).catch((error)=>{
      alert('error')
      console.log(error)
    })
  };
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
