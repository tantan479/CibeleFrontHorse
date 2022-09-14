import React, { Component } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'

class UserCad extends Component {
    componentDidMount() {
        document.title = "Cadastrar Usuário"
    }

    render() {
        return ( 
            <>
               <h1>Cadastrar Usuário</h1>
               <hr style={{ width: "45vw" }}></hr>
            </>
        );
    }
}

export default UserCad