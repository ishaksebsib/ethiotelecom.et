import axios from "axios";
import React from "react";

export async function getServerSideProps({ params }: any) {
  const { id } = params;
  const res = await axios.get(`${process.env.HOST_URL}api/blogs/${id}`);
  const blog = res.data;
  return {
    props: {
      blog,
    },
  };
}

const BlogDetail = ({ blog }: any) => {
  console.log(blog);

  return <div>BldfdogDetail</div>;
};

export default BlogDetail;
