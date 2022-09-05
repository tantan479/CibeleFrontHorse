import Header from '../layout/Header'
import Footer from '../layout/Footer'
import React, { Component } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap';
import { Nav } from "react-bootstrap";
import './Dashboard.css'
import Navbar from 'react-bootstrap/Navbar';


class Dashboard extends Component {
    componentDidMount() {
        document.title = "Dashboard"
    }

    carregar() {
        ReactDOM.createRoot(document.getElementById('root')).render(
            <React.StrictMode><Login /></React.StrictMode>)
    }

    // window.addEventListener("resize", function(event) {
    //     console.log(document.body.clientWidth + ' wide by ' + document.body.clientHeight+' high');
    // }) 

    definiraltura() {
        var alturabody = document.getElementById('ibody').clientHeight
        var alturaheader = document.getElementById('header').clientHeight
        var alturafooter = document.getElementById('footer').clientHeight
        var alturaside = (alturabody - (alturafooter + alturaheader)) + "px"

        // document.getElementById('sidebar').setAttribute("style", "height: " + {alturaside}), "!important";

        document.getElementById('sidebar').style.height = alturaside; console.log(alturaside)
    }

    render() {
        return (
            <>
                <Header />
                {/* <Container className="principal">

                    <div class="containerside">
                        <Nav defaultActiveKey="/home" className="flex-column sidebar">
                            <div class='bemvindo'>
                                Bem vindo
                            </div>
                            <Nav.Link href="/">Dashboard</Nav.Link>
                            <Nav.Link eventKey="link-1">Login</Nav.Link>
                            <Nav.Link eventKey="link-2">Link</Nav.Link>
                            <Nav.Link eventKey="disabled" disabled>
                                Disabled
                            </Nav.Link>
                        </Nav>
                    </div>
                </Container> */}

                <aside>
                    <div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark sidebar" id="sidebar">
                        <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                            <svg class="bi me-2" width="40" height="32"></svg>
                            <span class="fs-4">Sidebar</span>
                        </a>
                        <hr />
                        <ul class="nav nav-pills flex-column mb-auto">
                            <li class="nav-item">
                                <a href="#" class="nav-link active" aria-current="page">
                                    <svg class="bi me-2" width="16" height="16"></svg>
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#" class="nav-link text-white">
                                    <svg class="bi me-2" width="16" height="16"></svg>
                                    Dashboard
                                </a>
                            </li>
                            <li>
                                <a href="#" class="nav-link text-white">
                                    <svg class="bi me-2" width="16" height="16"></svg>
                                    Orders
                                </a>
                            </li>
                            <li>
                                <a href="#" class="nav-link text-white">
                                    <svg class="bi me-2" width="16" height="16"></svg>
                                    Products
                                </a>
                            </li>
                            <li>
                                <a href="#" class="nav-link text-white">
                                    <svg class="bi me-2" width="16" height="16"></svg>
                                    Customers
                                </a>
                            </li>
                        </ul>
                        <hr />
                        <div class="dropdown">
                            <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2" />
                                <strong>mdo</strong>
                            </a>
                            <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                                <li><a class="dropdown-item" href="#">New project...</a></li>
                                <li><a class="dropdown-item" href="#">Settings</a></li>
                                <li><a class="dropdown-item" href="#">Profile</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><a class="dropdown-item" href="#">Sign out</a></li>
                            </ul>
                        </div>
                    </div>
                </aside>
                <p>
                    teste
                </p>
                <Footer />
            </>
        );

    }
}

export default Dashboard