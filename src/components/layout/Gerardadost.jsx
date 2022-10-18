import React, { Component } from "react"
import axios from "axios";
import './Gerardadost.module.css'
import UserUp from '../pages/UserUp'
import Button from 'react-bootstrap/Button'
import UpdateUser from '../pages/UpdateUser'
import Teste from '../pages/UpdateUser'

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

        let i = 1;
        return (
            <>
                {usuarios.map(usuario => (
                    <tr key={usuario.id}>
                        <td>
                            {i++}
                        </td>
                        <td>
                            {usuario.nome}
                        </td>
                        <td>
                            {usuario.usuario}
                        </td>
                        {usuario.categoria == 0 && <td>Professor</td>}
                        {usuario.categoria == 1 && <td>Aluno</td>}
                        <td><UserUp id1={usuario.id}/></td>
                        <td><Button type="button" className='botao2' onClick={() => this.remove(usuario.id)}>Excluir</Button></td>
                    </tr>
                ))}
            </>
        );
    }
}

export default GerarDadost

