import React from "react";
import { useRouter } from "next/router";
import axios from "axios";

export const getServerSideProps = async ({ query }: any) => {
  const data = query.q;
  const res = await axios.get(
    `${process.env.HOST_URL}api/blogs/?filters[title][$contains]=${data}`
  );
  const blogs = res.data;
  return {
    props: {
      blogs,
    },
  };
};

const serachPage = ({ blogs }: any) => {
  return (
    <div>
      <h1> Search result for </h1>

      <div>
        {blogs.data.map((blog: any) => (
          <div key={blog.id}>
            <p>{blog.attributes.title}</p>
            <p>{blog.attributes.description}</p>
            <br></br>
          </div>
        ))}
      </div>
    </div>
  );
};

export default serachPage;
