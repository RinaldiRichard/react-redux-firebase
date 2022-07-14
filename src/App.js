import React, { useState } from "react";
import ConnectModal from "./components/ConnectModal";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase.config";
import CreatePost from "./components/CreatePost";

const App = () => {
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  return (
    <div>
      <div className="app-header">
        {user && (
          <div className="user-infos">
            <span>{user?.displayName[0]} </span>
            <h4>{user?.displayName}</h4>
            <button>
              <i className="fa-solid fa-arrow-right-from-bracket"></i>
            </button>
          </div>
        )}
        {user ? <CreatePost /> : <ConnectModal />}
      </div>

      <div className="posts-container"></div>
    </div>
  );
};

export default App;
