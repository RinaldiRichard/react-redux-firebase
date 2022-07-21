import React, { useState } from "react";

const Post = ({ post, user }) => {
  const [edit, setEdit] = useState(false);
  const { editMess, setEditMess } = useState(null);

  const dateFormater = (date) => {
    let days = Math.floor((new Date() - new Date(date)) / (1000 * 3600 * 24));
    if (days === 0) {
      return "aujourd'hui";
    } else if (days === 1) {
      return "il y à 1 jour";
    } else {
      return `il y à ${days} jours`;
    }
  };

  return (
    <div className="post">
      <div className="post-header">
        <div className="left-part">
          <div className="title">
            <span>{post.author[0]}</span>
            <h2>{post.author}</h2>
          </div>
          <h5>Posté {dateFormater(post.date)} </h5>
        </div>
        {post.authorId === user?.uid && (
          <div className="right-part">
            <span onClick={() => setEdit(!edit)}>
              <i className="fa-solid fa-pen-to-square"></i>
            </span>
            <span>DELETE</span>
          </div>
        )}
      </div>
      {edit ? <textarea></textarea> : <p>{post.message} </p>}
    </div>
  );
};

export default Post;
