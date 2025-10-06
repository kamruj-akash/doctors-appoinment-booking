import axios from "axios";
import { useEffect, useState } from "react";

export const useDrList = () => {
  const [drData, setDrData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios(
      "https://raw.githubusercontent.com/kamruj-akash/doctors-appoinment-booking/refs/heads/main/public/DrData.json"
    )
      .then((res) => setDrData(res.data))
      .catch((err) => setError(err))
      .finally(setLoading(false));
  }, []);
  return [drData, loading, error];
};
