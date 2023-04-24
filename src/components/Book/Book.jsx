import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Book = () => {
  const user = null;
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, []);
  return <div>all nooks here ....</div>;
};

export default Book;
