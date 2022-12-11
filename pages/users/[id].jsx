import React from "react";

const UserById = ({ user }) => {
  return (
    <div>
      <h2>{user?.name}</h2>
    </div>
  );
};

export async function getStaticProps(context) {
  const { id } = context.params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const user = await response.json();

  return {
    props: {
      user,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          id: "1",
        },
      },
      {
        params: {
          id: "2",
        },
      },
      {
        params: {
          id: "3",
        },
      },
      {
        params: {
          id: "4",
        },
      },
      {
        params: {
          id: "5",
        },
      },
      {
        params: {
          id: "6",
        },
      },
      {
        params: {
          id: "7",
        },
      },
      {
        params: {
          id: "8",
        },
      },
      {
        params: {
          id: "9",
        },
      },
      {
        params: {
          id: "10",
        },
      },
    ],
    fallback: true,
  };
}

export default UserById;
