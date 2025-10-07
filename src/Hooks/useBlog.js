import axios from "axios";
import { useEffect, useState } from "react";

export const useBlog = () => {
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios("/blog.json")
      .then((res) => setBlog(res.data))
      .catch((err) => setError(err))
      .finally(setLoading(false));
  }, []);
  return [blog, loading, error];
};
