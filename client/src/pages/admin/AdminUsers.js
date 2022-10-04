import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Col, Container, Row, Button } from "react-bootstrap";
import "./adminusers.scss";
import Table from "react-bootstrap/Table";
import { AdminUsersInfo } from "../../components/modal/AdminUsersInfo";
import { Footer } from "../home/Footer";
import jwtDecode from "jwt-decode";

export const AdminUsers = ({ user, setUserModificate }) => {
  const [allUsers, setAllUsers] = useState([]);
  const [tablaBusqueda, setTablaBusqueda] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [userInfo, setUserInfo] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // const AUTH_TOKEN = window.localStorage.getItem("token");
    // axios.defaults.headers.common["authorization"] = `Bearer ${AUTH_TOKEN}`;
    const token = window.localStorage.getItem("infocoolx");
    if (token) {
      // setIsLogged(true);

      const { id, type } = jwtDecode(token).user;

      if (type === 1) {
        axios
          .get(`http://localhost:4000/admin/${user?.user_id}/allUsers`)

          .then((res) => {
            setAllUsers(res.data);
            console.log(res, "BUSQUEDA RES.DATA");
            setTablaBusqueda(res.data);
          })

          .catch((err) => {
            console.log(err);
          });
      } else {
        alert("No tienes permiso de administrador");
      }
    } else {
      alert("Debes iniciar sección como administrador");
    }
  }, []);

  // console.log(allUsers);

  const handleModal = (usuario) => {
    setUserInfo(usuario);
    setOpenModal(true);
  };

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };

  const filtrar = (terminoBusqueda) => {
    let filtrado = tablaBusqueda.filter((elemento) => {
      if (
        elemento.company
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase())
      ) {
        return elemento;
      }
    });
    setAllUsers(filtrado);
  };

  return (
    <>

    <div className="wrapper">
      <div className="getdown">
        <Container fluid>
          <Row>
            <Col className="adm-proj-state-header">
              <Button onClick={() => navigate("/admin")}>
                <img src="./assets/icons/arrow_left.svg" />
              </Button>
              <h1>Todas nuestras empresas</h1>
              
            </Col>
          </Row>

          <Row>
            <Col className="barra-busq-user">
            <input

                  className="form-control inputBuscar "
                  type="text"
                  placeholder="Buscar usuario"
                  value={busqueda}
                  onChange={handleChange}
                  />
                
            </Col>
          </Row>

          <Row className="m-0">
            <Table striped className="table-allusers">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Empresa</th>
                  <th>Nombre</th>
                  <th>NIF</th>
                  <th>País</th>
                  <th>Teléfono</th>
                  <th>Email</th>
                  <th>Más Info</th>
                  <th>Editar usuario</th>
                </tr>
              </thead>

              <tbody>
                {allUsers && 
                  allUsers.map((usuario, index) => (
                    <tr key={usuario.user_id}>
                      <td>{index + 1}</td>
                      <td>{usuario.company}</td>
                      <td>{usuario.user_name}</td>
                      <td>{usuario.nif}</td>
                      <td>{usuario.country}</td>
                      <td>{usuario.phone}</td>
                      <td>{usuario.email}</td>
                      <td>
                        <Button className="info-users" onClick={()=>{
                            handleModal(usuario);
                        }
                          } >Más info</Button>
                      </td>
                      <td>
                        <Button className="edit-users" onClick={()=> {
                            console.log(usuario);
                            setUserModificate(usuario)
                            // navigate(`/getEditUser/${usuario.user_id}`)
                            navigate(`/getEditUser`)
                        }  
                        }>Editar usuario</Button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </Row>
          <Row>
            <Col>
              <p>
                *Si tiene algun tipo de anomalia en el registro de sus datos por favor, pongase en contacto con nosotros. Le atenderemos de buena gana...en principio...
              </p>
            </Col>
          </Row>
        </Container>

        <AdminUsersInfo
           onHide={() => setOpenModal(false)}
           show={openModal}
           userInfo={userInfo}
        />

        </div>
      </div>
      <Footer />
    </>
  );
};
