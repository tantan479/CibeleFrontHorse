import React, { Component } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Table } from "react-bootstrap";
import * as data from '../../data/db.json'
import ReactDOM from 'react-dom/client'
import parse from 'html-react-parser';

const obj1 = data.usuarios


class Relatorio extends Component {
    componentDidMount() {
        document.title = "Relatórios"
    }

    rendertable() {
        // for (var i = 0; i < obj1.length; i++) {

        //     res = "<p>lalla</p>"

        //     // <tr>
        //     //     <td>teste</td>
        //     //     <td>Mark</td>
        //     //     <td>Otto</td>
        //     //     <td>@mdo</td>
        //     // </tr>
        // }
        // var res = "<p>lalla</p>"
        // var reactelemento = parse(res)
        // return reactelemento
    }

    render() {

        return (
            <div onLoad={this.rendertable}>
                <>
                    <h1 onClick={this.rendertable}>Relatório</h1>
                    <hr style={{ width: "45vw" }}></hr>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody id="corpo">
                            {/* <tr>
                            <td>0</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr> */}
                        </tbody>
                    </Table>
                </>
            </div>
        );
    }
}

export default Relatorio