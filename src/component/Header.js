import React from "react";
import { Container, Nav, Form, FormControl, Button,Navbar } from "react-bootstrap";
import "./Header.css";
import { Fragment, useState, useEffect } from "react";
import { NavDropdown, Col, Row} from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  const [DataResponse, setDataResponse] = useState ([]);
  useEffect(() => {
    getData()
  },[]);

  function getData() {
    const axios = require('axios');

// Make a request for a user with a given ID
axios.get('http://adminmesuji.embuncode.com/api/menus?instansi_id=13')
  .then(function (Response) {
    // handle success
    console.log(Response);
    setDataResponse(Response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
}

  return (
    <Fragment>
      <Navbar expand="lg" position="fixed">
        <div className="navbar-all">
          <Container>
            <Navbar.Collapse className="text-navbar" id="navbarScroll">
              <Container>
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: "300 px" }}
                  navbarScroll
                > {DataResponse &&
                  DataResponse.map((m, i) => {
                    return (
                      <Fragment key={i}>
                        {m.children.length > 0 ? (
                          <>
                            <NavDropdown title={m.name}>
                              {m.children &&
                                m.children.map((h, k) => {
                                  return (
                                    <Fragment key={k}>
                                      {h.children.length > 0 ? (
                                        <>
                                          <NavDropdown title={h.name}>
                                            {h.children &&
                                              h.children.map((j, o) => {
                                                return (
                                                  <Fragment key={o}>
                                                    {j.children.length > 0 ? (
                                                      <>
                                                        <NavDropdown title={j.name}>
                                                          {j.children &&
                                                            j.children.map((k, l) => {
                                                              return (
                                                                <NavDropdown.Item eventKey='4.1' href={k.url} key={l}>
                                                                  {k.name}
                                                                </NavDropdown.Item>
                                                              );
                                                            })}
                                                        </NavDropdown>
                                                      </>
                                                    ) : j.static_page != null ? (
                                                      <Link to={"/static/" + j.static_page}>{j.name}</Link>
                                                    ) : (
                                                      <Nav.Link href={j.url}>{j.name}</Nav.Link>
                                                    )}
                                                  </Fragment>
                                                );
                                              })}
                                          </NavDropdown>
                                        </>
                                      ) : h.static_page != null ? (
                                        <Link to={"/static/" + h.static_page}>{h.name}</Link>
                                      ) : (
                                        <Nav.Link href={h.url}>{h.name}</Nav.Link>
                                      )}
                                    </Fragment>
                                  );
                                })}
                            </NavDropdown>
                          </>
                        ) : m.static_page != null ? (
                          <Link to={"/static/" + m.static_page}>{m.name}</Link>
                        ) : (
                          <Nav.Link href={m.url}>{m.name}</Nav.Link>
                        )}
                      </Fragment>
                    );
                  })}
                </Nav>
              {" "}
              </Container>
            </Navbar.Collapse>
          </Container>
        </div>
      </Navbar>{" "}
      <br></br>
    </Fragment>
  );
};

export default Header;
