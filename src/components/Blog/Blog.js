import React from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';
import BlogCard from './BlogCard';

const Blog = () => {
    const blogs = useLoaderData();
    return (
        <div>
            <div>
                <Helmet>
                    <title>Friend's Care :: Blog</title>
                </Helmet>
                <div>
                    <h1 className='text-success text-5xl font-bold text-center mt-10 mb-7'>Blogs</h1>
                </div>
                <div className='grid md:grid-cols-2 gap-12'>
                    {
                        blogs.map(blogCard => <BlogCard key={blogCard._id} blogCard={blogCard} ></BlogCard>)
                    }
                </div>
            </div>
        </div>
    )
};

export default Blog;