import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import Dropdown from 'react-bootstrap/Dropdown'
import { useNavigate, NavLink, Link } from 'react-router-dom'
import Mensdata from '../Mensdata'
import { IoCartSharp } from 'react-icons/io5'
import { Badge } from 'react-bootstrap'

export default function Navbar2(prop) {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  const onSearch = (searchTerm) => {
    setValue(searchTerm)
    // console.log('search', searchTerm)
  }

  const authToken = localStorage.getItem('authToken')
  const navigate = useNavigate()
  const handelLogout = () => {
    localStorage.removeItem('authToken')
    navigate('/')
  }

  return (
    <div>
      <Navbar
        bg="light"
        expand="lg"
        fixed="top"
        className="mb-2 shadow-lg p-3 bg-body rounded align-items-center"
      >
        <Container>
          <Navbar.Brand href="#home" className="fw-bold fs-2">
            SHOPY
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto   ms-5 fw-bold mx-5  align-items-center">
              <NavLink
                to="/"
                className="text-decoration-none  ms-5 text-secondary"
              >
                HOME
              </NavLink>
              <NavLink
                to="/mens"
                className="text-decoration-none text-secondary ms-5 align-items-center "
              >
                MEN
              </NavLink>
              <NavLink
                to="/womens"
                className="text-decoration-none ms-5 text-secondary"
              >
                WOMEN
              </NavLink>
              <NavLink
                to="/kids"
                className="text-decoration-none ms-5 text-secondary"
              >
                KID
              </NavLink>
              <NavLink
                to="/beauty"
                className="text-decoration-none ms-5 text-secondary"
              >
                BEAUTY
              </NavLink>
              <NavLink
                to="/electronics"
                className="text-decoration-none ms-5 text-secondary"
              >
                ELECTRONICS
              </NavLink>

              <Form className="me-3 d-flex flex-row ms-5  w-75">
                <Dropdown>
                  <div className="search-container">
                    <div className="search-inner">
                      <Form.Control
                        type="text"
                        placeholder="search for products"
                        className=" "
                        value={value}
                        onChange={onChange}
                      />
                      <button
                        className="border-danger w-25 px-2 py-1 bg-pink"
                        onClick={() => onSearch(value)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-search "
                          viewBox="0 0 16 16"
                        >
                          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                      </button>
                    </div>

                    <div className="dropdown">
                      {Mensdata.filter((item) => {
                        const searchTerm = value.toLowerCase()
                        const fullName = item.title.toLowerCase()

                        return (
                          searchTerm &&
                          fullName.startsWith(searchTerm) &&
                          fullName !== searchTerm
                        )
                      })
                        .slice(0, 10)
                        .map((item) => (
                          <div
                            onClick={() => onSearch(console.log(item.title))}
                            className="dropdown-row"
                            key={item.title}
                          >
                            {item.title}
                          </div>
                        ))}
                    </div>
                  </div>
                </Dropdown>
              </Form>

              <Dropdown className="ms-5">
                <Dropdown.Toggle
                  variant=""
                  className="border-0"
                  id="dropdown-basic"
                >
                  <i className="bi bi-person">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                      fill="currentColor"
                      className="bi bi-person  "
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                    </svg>
                  </i>
                  {/* <BiCart/> */}
                </Dropdown.Toggle>

                {!authToken ? (
                  <Dropdown.Menu className="shadow-lg p-3 bg-body rounded">
                    <Dropdown.Item>
                      <Link
                        to="/signup"
                        style={{ color: 'black', textDecoration: 'none' }}
                      >
                        Login/Sign up
                      </Link>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                ) : (
                  <Dropdown.Menu className="shadow-lg p-3 bg-body rounded">
                    <Dropdown.Item href="#/action-2">Watchlist</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">My Orders</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      <Link
                        to="/contact"
                        style={{ color: 'black', textDecoration: 'none' }}
                      >
                        Contact us
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3" onClick={handelLogout}>
                      Log out
                    </Dropdown.Item>
                  </Dropdown.Menu>
                )}
              </Dropdown>
            
              {authToken ? (
                <Link
                  to="/cartlist"
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  <IoCartSharp style={{  }} className="ms-1" />
                  <sup>
                    <Badge pill className="bg-pink">
                      {prop.count}
                    </Badge>
                  </sup>
                </Link>
              ) : null}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
