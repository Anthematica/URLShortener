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
  const [links, setLinks] = useState([]);

  //Links
  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");
    (async function get_links() {
      const resp = await ky
        .get(`${process.env.REACT_APP_API_URL}/v1/links`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .json();

      setLinks(resp.data);
    })();
  }, []);

  //Consultas por mes
  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");
    (async function get_visits() {
      const resp = await ky
        .get(`${process.env.REACT_APP_API_URL}/linkVisits`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .json();

      console.log(resp.data);
    })();
  }, []);

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
          <Links toggle={setToggle} links={links}></Links>
          <EditLink></EditLink>
          {toggle && (
            <AddLinkModal
              toggle={setToggle}
              user={user}
              links={links}
              setLinks={setLinks}
            ></AddLinkModal>
          )}
        </div>
      </section>
    </div>
  );
}

export { Home };
