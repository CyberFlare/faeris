"use client";

import { useEffect, useState } from "react";

const Scorer = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    window.addEventListener("message", (event) => {
      if (event.data.type === "faerisVAC_SEND_DATA") {
        console.log("Got the data!", event.data.data);
        setData(event.data.data);
      }
    });
  }, []);

  return (
    <div>
      {(() => {
        if (data) {
          return <pre>{JSON.stringify(data, null, 2)}</pre>;
        } else {
          return <p>Waiting for data...</p>;
        }
      })()}
    </div>
  );
};

export default Scorer;