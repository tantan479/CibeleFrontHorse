import React, { Component } from "react"
import axios from "axios";
import './Gerardadost.module.css'
import UserUp from '../pages/UserUp'
import Button from 'react-bootstrap/Button'
import UpdateUser from '../pages/UpdateUser'

var data

class GerarDadost extends Component {

    state = {
        usuarios: [],
    }

    async componentDidMount() {
        const resp = await axios.get('http://localhost:8000/usuarios')
        this.setState({ usuarios: resp.data })
    }

    async remove(id) {
        var url = "http://localhost:8000/usuarios/"
        url += id
        console.log(url)
        await axios.delete(url)
        this.forceUpdate(GerarDadost)
    }

    async update(id) {

        this.id = id
        UserUp(id)
        // url += id
        // const resp = await axios.get(url)
        // console.log(resp.data)
        // // await axios.put(url, user)

    }

    render() {

        const { usuarios } = this.state

        return (
            <>
                {usuarios.map(usuario => (
                    <tr key={usuario.id}>
                        <td>
                            {usuario.id}
                        </td>
                        <td>
                            {usuario.nome}
                        </td>
                        <td>
                            {usuario.usuario}
                        </td>
                        {usuario.categoria == 0 && <td>Professor</td>}
                        {usuario.categoria == 1 && <td>Aluno</td>}
                        <td><UserUp id={usuario.id}/></td>
                        {/* <td><a role="button" style={{backgroundColor: "#ea8f01", color: "white"}} onClick={() => this.update(usuario.id)}>Editar</a></td> */}
                        <td><a role="button" style={{ backgroundColor: "red", color: "white" }} onClick={() => this.remove(usuario.id)}>Excluir</a></td>
                    </tr>
                ))}
            </>
        );
    }
}

export default GerarDadost

