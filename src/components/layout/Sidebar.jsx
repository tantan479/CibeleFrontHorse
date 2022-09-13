import React, { Component } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap';
import { Nav } from "react-bootstrap";
import './Sidebar.css'
import Navbar from 'react-bootstrap/Navbar';



class Sidebar extends Component {
   
    
    render() {
        return (
            <div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark sidebar">
                <span class="fs-4">Bem-vindo</span>
                <hr />
                <ul class="nav nav-pills flex-column mb-auto">
                    <li class="nav-item">
                        <a href="#" class="nav-link active" aria-current="page">
                            <svg class="bi me-2" width="16" height="16" id="teste"></svg>
                            Dashboard
                        </a>
                    </li>
                    <li>
                        <a href="#" class="nav-link text-white">
                            <svg class="bi me-2" width="16" height="16"></svg>
                            Relatorios
                        </a>
                    </li>
                    <li>
                        <a href="#" class="nav-link text-white">
                            <svg class="bi me-2" width="16" height="16"></svg>
                            Cadastro de Usuário
                        </a>
                    </li>
                </ul>
                <hr />
            </div>
        );
    }
}

export default Sidebar