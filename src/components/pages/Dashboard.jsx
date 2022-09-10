import Header from '../layout/Header'
import Footer from '../layout/Footer'
import React, { Component } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap';
import { Nav } from "react-bootstrap";
import './Dashboard.module.css'
import Navbar from 'react-bootstrap/Navbar';
import Sidebar from '../layout/Sidebar';


class Dashboard extends Component {
    componentDidMount() {
        document.title = "Dashboard"
    }

    render() {
        return (
            <div className="App">

                <>
                    <Header />
                    <aside>
                        <Sidebar/>
                        <div>
                            <h1>
                                Dashboard
                            </h1>
                        </div>
                    </aside>
                    <Footer />
                </>
            </div>
        );

    }
}

export default Dashboard