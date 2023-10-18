import CardList from "./CardList";
import react from "react";

function NavBar ({countAll}) {


    return(
    <>
    <header className = "Bordure">
    <img src="https://www.bordeaux.fr/images/ebx/fr/organisme/99941/2/imageSpec/673414/image/wildcodeschool2_1.jpg"/>  
    <h1>Wild Code School shop</h1>
    <p>compteur :{countAll}</p>
    
    </header>
   
 </>
 )
}

export default NavBar;