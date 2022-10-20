import { useState } from "react";
import Contato from "../../pages/contato";
import Home from "../../pages/home";
import Sobre from "../../pages/sobre";
import './menu.css'


function Menu() {
    const [visivel, setVisivel] = useState(1)

    function seletorDeComponente() {
        if (visivel === 1) {
            return <Home texto={"Página Home"} />
        } else if (visivel === 2) {
            return <Sobre texto={"Pagina Sobre"} />
        } else {
            return <Contato texto={"Página Contato"} />
        }
    }

    return (
        <>
            <header>

                <h1>Logo</h1>




                <nav>

                    <button onClick={() => { setVisivel(1) }} >Home</button>


                    <button onClick={() => { setVisivel(2) }} >Sobre</button>


                    <button onClick={() => { setVisivel(3) }} >Contato</button>

                </nav>


            </header>

            {seletorDeComponente()}

        </>


    );
}

export default Menu;