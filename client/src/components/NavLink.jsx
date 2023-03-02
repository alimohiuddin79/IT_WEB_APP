import { Link } from "react-router-dom";

const NavLink = (props) => {
    return (
        <li 
            className={`text-base font-light text-slate-400 hover:text-slate-600 hover:tracking-widest transition-all duration-300 mx-2 ${props.showNavItems ? 'mx-0 ': ''}`}>
            <Link to={props.to}>{props.title}</Link>
        </li>
    )
}

export default NavLink;