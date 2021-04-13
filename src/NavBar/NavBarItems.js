import {NavLink} from "react-router-dom";
function NavBarItems({label,uri}){
    return(
     <li><NavLink class="theme-general text-center p-2 hover:bg-red-200 w-screen  text-lg font-medium md:hover:bg-primary lg:hover:text-white" to={uri}>{label}</NavLink></li>
      // <li class=" text-center p-2 hover:bg-red-200 w-screen  text-lg font-medium md:hover:bg-red-200 lg:hover:text-white"><a  href={uri}>{label}</a></li>
    );
}
export default NavBarItems; 