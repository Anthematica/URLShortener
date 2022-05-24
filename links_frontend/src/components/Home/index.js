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
import { ModalDelete } from "../ModalDelete";

function Home() {
  const navigate = useNavigate();

  const [toggle, setToggle] = useState(false);
  const [toggleDelete, setToggleDelete] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [links, setLinks] = useState([]);
  const [currenIdLink, setIdLink] = useState(null);
  const [editToggle, setEditToggle] = useState(false);
  const [currentEditLink, setCurrentEditLink] = useState([]);

  //Links
  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");

    setTimeout(() => {
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
      setLoading(false);
    }, 4000);
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
        // setLoading(false);
      });
  }, [navigate]);

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
          <Links
            toggle={setToggle}
            links={links}
            setLinks={setLinks}
            toggleLinksDelete={toggleLinksDelete}
            setEditToggle={setEditToggle}
            setCurrentEditLink={setCurrentEditLink}
            loading={loading}
          ></Links>
          <EditLink
            editToggle={editToggle}
            setEditToggle={setEditToggle}
            currentEditLink={currentEditLink}
            links={links}
            setLinks={setLinks}
          ></EditLink>
          {toggle && (
            <AddLinkModal
              toggle={setToggle}
              user={user}
              links={links}
              setLinks={setLinks}
            ></AddLinkModal>
          )}

          {toggleDelete && (
            <ModalDelete
              handleDelete={handleDelete}
              setToggleDelete={setToggleDelete}
            ></ModalDelete>
          )}
        </div>
      </section>
    </div>
  );

  function toggleLinksDelete(id) {
    setIdLink(id);
    console.log(setIdLink);
    setToggleDelete(true);
  }

  async function handleDelete() {
    console.log("Desde el delete", currenIdLink);
    const resp = await ky
      .delete(`http://localhost:8000/api/v1/links/${currenIdLink}`)
      .json();
    setLinks((links) => links.filter((link) => link.id !== currenIdLink));
    setToggleDelete(false);
  }
}

export { Home };
