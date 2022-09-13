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

    funcao(condition) {
        return <h1>teste</h1>
    }
    render() {
        return (
            <div className="App">

                <>
                    <Header />
                    <aside>
                        <Sidebar/>
                        <main>
                            <h1>
                                Dashboard
                            </h1>
                            <p>{this.funcao}</p>
                            <hr style={{width:"45vw"}}></hr>
                            <h4>
                                Dados de Uso    
                            </h4> 
                        </main> 
                    </aside>          
                    <Footer />
                </>
            </div>
        );

    }
}

export default Dashboard