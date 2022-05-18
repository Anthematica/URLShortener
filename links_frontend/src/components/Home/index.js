import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ky from "ky";
import "./index.css";
import { AsideDashboard } from "../Aside";
import { Header } from "../Header";
import { DashboardGraph } from "../DashboardGraph";
import { Links } from "../Links";
import { EditLink } from "../EditLink";
import { AddLinkModal } from "../Modal";

function Home() {
  const navigate = useNavigate();

  const [toggle, setToggle] = useState(false);
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
    <div className="wrapper_home">
      <AsideDashboard></AsideDashboard>
      <section className="wrapper_main">
        <Header></Header>
        <DashboardGraph></DashboardGraph>
        <div className="wrapper_links">
          <Links toggle={setToggle}></Links>
          <EditLink></EditLink>
          {toggle && <AddLinkModal toggle={setToggle}></AddLinkModal>}
        </div>
      </section>
    </div>
  );
}

export { Home };
