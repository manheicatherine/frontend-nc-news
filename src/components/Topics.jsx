import React, { useEffect, useState } from "react";
import { getTopics } from "../utils/api";
import { Link } from "react-router-dom";

export default function Topics() {
  const [topic, settopics] = useState([]);
  

  useEffect(() => {
    getTopics().then((res) => {
      settopics(res);
    });
  }, [topic]);

  return (
    <>
      {topic.map((topic) => {
        return (
          <Link to={`/topics/${topic.slug}`} className="navbar" key={topic.description} >
            {topic.slug}
          </Link>
        );
      })}
    </>
  );
}