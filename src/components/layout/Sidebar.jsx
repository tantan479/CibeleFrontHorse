import React, { Component } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import './Sidebar.css'
import Relatorio from "../pages/Relatorio"
import ReactDOM from 'react-dom/client'
import Dashboard from "../pages/Dashboard"
import UserCad from "../pages/UserCad"
import UserUp from "../pages/UserUp"
import UserDel from "../pages/UserDel"

class Sidebar extends Component {

    dash() {
        document.getElementById("rela").classList.remove('active')
        document.getElementById("cadUs").classList.remove('active')
        document.getElementById("dash").classList.add('active')
        document.getElementById("upUs").classList.remove('active')
        document.getElementById("delUs").classList.remove('active')

        ReactDOM.createRoot(document.getElementById('mainPage')).render(
            <React.StrictMode>
                <Dashboard />
            </React.StrictMode>
        )
    }

    relatar() {
        document.getElementById("rela").classList.add('active')
        document.getElementById("cadUs").classList.remove('active')
        document.getElementById("dash").classList.remove('active')
        document.getElementById("upUs").classList.remove('active')
        document.getElementById("delUs").classList.remove('active')

        ReactDOM.createRoot(document.getElementById('mainPage')).render(
            <React.StrictMode>
                <Relatorio />
            </React.StrictMode>
        )
    }

    usercad(){
        document.getElementById("rela").classList.remove('active')
        document.getElementById("cadUs").classList.add('active')
        document.getElementById("dash").classList.remove('active')
        document.getElementById("upUs").classList.remove('active')
        document.getElementById("delUs").classList.remove('active')

        ReactDOM.createRoot(document.getElementById('mainPage')).render(
            <React.StrictMode>
                <UserCad />
            </React.StrictMode>
        )
    }

    userup(){
        document.getElementById("rela").classList.remove('active')
        document.getElementById("cadUs").classList.remove('active')
        document.getElementById("dash").classList.remove('active')
        document.getElementById("upUs").classList.add('active')
        document.getElementById("delUs").classList.remove('active')


        ReactDOM.createRoot(document.getElementById('mainPage')).render(
            <React.StrictMode>
                <UserUp/>
            </React.StrictMode>
        )
    }

    userdel(){
        document.getElementById("rela").classList.remove('active')
        document.getElementById("cadUs").classList.remove('active')
        document.getElementById("dash").classList.remove('active')
        document.getElementById("upUs").classList.remove('active')
        document.getElementById("delUs").classList.add('active')


        ReactDOM.createRoot(document.getElementById('mainPage')).render(
            <React.StrictMode>
                <UserDel />
            </React.StrictMode>
        )
    }

    render() {
        return (
            <div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark sidebar">
                <span class="fs-4">Bem-vindo</span>
                <hr />
                <ul class="nav nav-pills flex-column mb-auto">
                    <li class="nav-item">
                        <a href="#" class="nav-link text-white active" aria-current="page" onClick={this.dash} id="dash">
                            Dashboard
                        </a>
                    </li>
                    <li>
                        <a href="#" class="nav-link text-white" onClick={this.relatar} id="rela">
                            Relatórios
                        </a>
                    </li>
                    <li>
                        <a href="#" class="nav-link text-white" onClick={this.usercad} id="cadUs">
                            Cadastro de Usuário
                        </a>
                    </li>
                    <li>
                        <a href="#" class="nav-link text-white" onClick={this.userup} id="upUs">
                            Editar Cadastro
                        </a>
                    </li>
                    <li>
                        <a href="#" class="nav-link text-white" onClick={this.userdel} id="delUs">
                            Deletar Cadastro
                        </a>
                    </li>
                </ul>
                <hr />
            </div>
        );
    }
}

export default Sidebar