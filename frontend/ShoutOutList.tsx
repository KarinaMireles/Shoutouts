import React, { useState, useEffect } from "react";
import { fetchShoutOuts, postShoutOut } from "./api";

function ShoutOutList() {
  const [shoutOuts, setShoutOuts] = useState([]);
  const [newShoutOut, setNewShoutOut] = useState({
    from: "",
    to: "",
    message: "",
  });

  useEffect(() => {
    async function loadShoutOuts() {
      const response = await fetchShoutOuts();
      setShoutOuts(response.data);
    }

    loadShoutOuts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await postShoutOut(newShoutOut);
    setNewShoutOut({ from: "", to: "", message: "" });
    // Reload shoutouts
  };

  return (
    <div>
      <h1>Shout Outs</h1>
      <div>
        {shoutOuts.map((shoutOut, index) => (
          <div key={index}>
            <p>{shoutOut.message}</p>
            <p>
              From: {shoutOut.from} - To: {shoutOut.to}
            </p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="From"
          value={newShoutOut.from}
          onChange={(e) =>
            setNewShoutOut({ ...newShoutOut, from: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="To"
          value={newShoutOut.to}
          onChange={(e) =>
            setNewShoutOut({ ...newShoutOut, to: e.target.value })
          }
        />
        <textarea
          placeholder="Message"
          value={newShoutOut.message}
          onChange={(e) =>
            setNewShoutOut({ ...newShoutOut, message: e.target.value })
          }
        />
        <button type="submit">Send Shout Out</button>
      </form>
    </div>
  );
}

export default ShoutOutList;
