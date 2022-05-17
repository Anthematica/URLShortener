import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ky from "ky";
import "./index.css";
import { AsideDashboard } from "../Aside";

function Home() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  //Validation
  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");

    ky.get(`${process.env.REACT_APP_API_URL}/user`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .json()
      .then((resp) => {
        setUser(resp);
      })
      .catch((err) => {
        localStorage.removeItem("access_token");
        navigate("/login");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [navigate]);

  if (loading) {
    return <div>loading...</div>;
  }

  if (!user) {
    return null;
  }

  return (
    <div>
      <AsideDashboard></AsideDashboard>
    </div>
  );
}

export { Home };
