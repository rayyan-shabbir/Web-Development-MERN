import PropTypes from "prop-types"
import Button from "./Button"
import { useLocation } from 'react-router-dom'

const Header = ({title, onShow, showAddTask}) => {
    // const onClick = () => {
    //     console.log("Header Clicked");
    // }

    const location = useLocation();

    return (
        <header className="header">
            <h1>{title}</h1>
            {location.pathname === '/' && <Button color={showAddTask ? "red" : "green"} text={showAddTask ? "Close" : "Add"} onClick={onShow}/>}
        </header>
    );
}


// const Header = (props) => {
//     return (
//         <div>
//             <h1>This is message from Header.</h1>
//             <h2>{props.title}</h2>
//             <h2>{props.song}</h2>
//         </div>
//     );
// }

// const Header = ({title}) => {
//     return (
//         <div>
//             <h1>This is message from MyWay.</h1>
//             <h2>{title}</h2>
//             {/* <h2 style={{color:"red", backgroundColor: "black"}}>{title}</h2> */}
//             {/* <h2 style={headingStyle}>Yo Bro!</h2> */}
//         </div>
//     );
// }

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

Header.defaultProps = {
    title: 'This is Default Title',
    song: 'This is Default song',
}

// Css in JS
// const headingStyle = {
//     color:"green", backgroundColor: "yellow",
// }

export default Header;