import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchShoutOutsForUser } from "./api";

function UserShoutOuts() {
  const { name } = useParams();
  const [shoutOuts, setShoutOuts] = useState([]);

  useEffect(() => {
    async function loadShoutOuts() {
      const response = await fetchShoutOutsForUser(name);
      setShoutOuts(response.data);
    }

    loadShoutOuts();
  }, [name]);

  return (
    <div>
      <h1>Shout Outs for {name}</h1>
      <div>
        {shoutOuts.map((shoutOut, index) => (
          <div key={index}>
            <p>{shoutOut.message}</p>
            <p>From: {shoutOut.from}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserShoutOuts;
