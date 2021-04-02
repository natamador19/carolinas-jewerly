import {NavLink} from "react-router-dom";
function NavBarItems({label,uri}){
    return(
       // <li><NavLink to={uri}>{label}</NavLink></li>
       <li class=" text-center p-2 hover:bg-gray-100 w-screen md:hover:bg-red-200 lg:hover:text-white"><a  href={uri}>{label}</a></li>
    );
}
export default NavBarItems; 