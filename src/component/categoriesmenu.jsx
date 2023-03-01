import React from 'react'
import { useEffect, useState } from 'react';
// import { Link} from "react router dom"
import { ListGroup, ListGroupItem, ListGroupItemHeading } from 'reactstrap';
import { LoadAllCatogoires } from '../services/category-service';
import { Router, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Categoriesmenu() {

    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        LoadAllCatogoires().then(data=>{
            console.log(data)
            setCategories([...data])
        }).catch(error=>{
            console.log(error);
        })

        

    },[])

    const [selectedCategory, setSelectedCategory] = useState([]);
    useEffect(() => {
        console.log(selectedCategory)
    }, [selectedCategory]);

    const isThereInSelectedCategory = () => {

    }

    // action={true} tag={Link} to={'/categories/'+ cat.categoryId}
  return (

   <>
    <div style={{height: "600px", overflow: "scroll", overflowX: "auto", overflowY: "scroll"}}>
        <ListGroup>
            <ListGroupItem tag={Link} to="/feed">
                    All Categories
            </ListGroupItem>
            {categories && categories.map((cat, index)=>{
                return(
                    <ListGroupItem className="mt-1" key={index} 
                    style={{
                        cursor: "pointer",
                        backgroundColor: selectedCategory.includes(cat.categoryId) ? "Blue" : "white"
                    }}
                        onClick={() => {
                            if (selectedCategory.includes(cat.categoryId)){
                                setSelectedCategory(selectedCategory.filter(number => number !== cat.categoryId))
                            } else {
                                setSelectedCategory([...selectedCategory, cat.categoryId])

                            }
                        }}
                    >
                        {cat.categoryTitle}
                    </ListGroupItem>
                )
            })}

        </ListGroup>
        
    </div>

    <Button style={{
        width: "100%",
         marginTop: "30px"
    }}
    onClick={() => {
        window.location.pathname = "/categories/" + selectedCategory
    }}
    > VIEW CATEGORIES </Button>

   </>
   
  )
  }

export default Categoriesmenu;
