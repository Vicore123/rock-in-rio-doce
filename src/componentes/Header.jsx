import { Link } from "react-router-dom"

export default function Header() {
    return(
        <>
            <ul>
                <li>
                    <Link to={"/"}> Home </Link>
                </li>
                <li>
                    <Link to={"/sobre"}> Sobre</Link>
                </li>
            </ul>
            <h1>Header</h1>
        </>
    
    )
}