import { useState } from "react"
import Header from "./components/Header"
import Guitar from "./components/Guitar"
import { useEffect } from "react"
import{db} from "./data/db"

function App() {

    //State
    const [data, setData] = useState(db)
    const[cart, setCart] = useState([])

    function addToCart(item){

        const itemExists = cart.findIndex((guitar) => guitar.id == item.id); //Traemos la posicion del elemento en el arreglo si existe, si no, mostrara -1
        if(itemExists >= 0){
            const updatedCart = [...cart] //Creamos una copia de lo que hay en el state para no mutar el original
            updatedCart[itemExists].quantity++  //Agregamos 1 a la cantidad de ese elemento,   itemExists es la posicion del elemento en el arreglo
            setCart(updatedCart) //Seteamos el nuevo valor del arreglo con el quantity actualizado
        }
        else{
            item.quantity = 1; //Agregamos la propiedad quantity
            setCart(prevCart => [...prevCart, item])
        }
    }

    return (
        <>
            <Header></Header>

            <main className="container-xl mt-5">
                <h2 className="text-center">Nuestra Colección</h2>

                <div className="row mt-5">
                    {data.map((guitar) => (
                        <Guitar
                            key = {guitar.id}
                            guitar = {guitar}
                            setCart = {setCart}
                            addToCart ={addToCart}
                        />
                    ))}
                </div>
            </main>


            <footer className="bg-dark mt-5 py-5">
                <div className="container-xl">
                    <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
                </div>
            </footer>
        </>
    )
}

export default App
