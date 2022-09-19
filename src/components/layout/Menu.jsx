import Header from '../layout/Header'
import Footer from '../layout/Footer'
import React, { Component } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import Sidebar from '../layout/Sidebar'
import ReactDOM from 'react-dom/client'
import Relatorio from '../pages/Relatorio'

class Menu extends Component {
    
    componentDidMount() {
        document.title = "Dashboard"
        ReactDOM.createRoot(document.getElementById('mainPage')).render(
            <React.StrictMode>
                <Relatorio />
            </React.StrictMode>
        )
    }
    render() {
        return (
            <div className="App" >
                <>
                    <Header />
                    <aside>
                        <Sidebar />
                        <main id="mainPage">
                        </main>
                    </aside>
                    <Footer />
                </>
            </div>
        );

    }
}

export default Menu