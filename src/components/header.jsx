import React from "react"
import cart from "../assets/cart.svg"
import favourite from "../assets/favourite.svg"
import store from "../assets/store.svg"
import user from "../assets/user.svg"
import logo from "../assets/logo.png"
import search from "../assets/search.svg"

import "../components/header.css"

function header() {


    return (
        <>
            <header>
                <div className="logo"><img src={logo} /></div>
                <div className="group">
                    <button className="menuButton"><img src={user} /></button>
                    <button className="menuButton"><img src={cart} /></button>
                    <button className="menuButton"><img src={favourite} /></button>
                    <button className="menuButton"><img src={store} /></button>
                </div>
                <nav>
                    <h2>TIENDA</h2>
                    <h2>COMO FUNCIONA</h2>
                    <h2>SOBRE NOSOTROS</h2>
                    <h2>BLOG</h2>
                    <form class="search-container">
                        <input type="text" id="search-bar" placeholder="Buscar prendas, accesorios y mas..." />
                        <button className="search-button"><img src={search} /></button>
                    </form>
                </nav>
            </header>
        </>
    )
}

export default header