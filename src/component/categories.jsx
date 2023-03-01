import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loadcategorywise } from '../services/post-service';
import NewFeed from './NewFeed';
// import Post from './feed-post';
import Categoriesmenu from './categoriesmenu';
import Post from './feed-post';

function Categories() {
    const [posts, setPosts]= useState([])
    const {categoryId}= useParams()
    console.log(categoryId)

        useEffect(()=>{
            console.log(categoryId);

            Loadcategorywise(categoryId).then(data =>{
                setPosts([...data])
            }).catch(error=>{
                console.log(error)
            })
        },[])

  return (


    
    <div>
        {
            posts && posts.map((post,index)=>{
                console.log("PRATHAM", post)
                return(
                    < Post postData={post} key={index}/>
                )

            })

        }
      
      
    </div>
    
  )
}

export default Categories;
