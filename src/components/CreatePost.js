import React, { useRef } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../utils/firebase.config";


const CreatePost = ({ uid, displayName }) => {
  console.log(uid, displayName);
  const message = useRef();
 

  const handlePosts = async (e) => {
    e.preventDefault();

    const data = {
      author: displayName,
      authorId: uid,
      message: message.current.value,
      comments: null,
      date: Date.now(),
    };
    await addDoc(collection(db, "posts"), data);
    message.current.value = "";
    window.location.reload()
    
  };

  return (
    <div className="new-post-modal">
      <form onSubmit={(e) => handlePosts(e)}>
        <textarea placeholder="Message..." ref={message}></textarea>
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
};

export default CreatePost;
