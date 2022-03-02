import { Link } from "react-router-dom"
import "./header.css"


export const Header = () => {
    return(
        <section>
                <nav className="header">
                    <Link to="/">Home</Link>
                    <Link to="/chat">Chats</Link>
                    <Link to="/profile">Profile</Link>
                </nav>
                
        </section>
        
    )
}

export default Header

//Link это компонент который указывает путь как ссылка. 
//to как тег пропс передает куда (не забыть импортировать Link компонент из react-router-dom)