import axios from "axios";
import React, { useEffect, useState } from "react";

export async function getServerSideProps() {
  const res = await axios.get(`${process.env.HOST_URL}api/blogs/`);
  const blogs = res.data;
  return {
    props: {
      blogs,
    },
  };
}
const Blog = ({ blogs }: any) => {
  return (
    <>
      <div>
        {blogs.data.map((blog: any) => (
          <>
            <p key={blog.id}>{blog.attributes.title}</p>
            <p>{blog.attributes.description}</p>
            <br></br>
          </>
        ))}
      </div>
    </>
  );
};

export default Blog;
