import { Link } from 'react-router-dom';
import React from 'react';
import './index.css';


const indexData = [
    'Home',
    'About',
    'Contact me'
]
const stringWithoutSpaces = indexData[2].replace(/\s/g, '');

const routes = [
    {
        path: "/home",
        name: "home",
        label: "Page 1"
    },
    {
        path: "/about",
        name: "about",
        label: "Page 2"
    },
    {
        path: "/contactMe",
        name: "contactMe",
        label: "Page 3"
    },
]

const Navbar = () => {
    return (
        <nav className='container'>
            {
                indexData.map((el, key) => {
                    const id = /\s/.test(el) === false ? indexData[key] + key : stringWithoutSpaces + key;
                    const content = el;

                    return (
                        <Link to={routes[key].path} key={key} className="notUnique" id={id}>
                            {content}
                        </Link>
                    );
                })
            }
        </nav>
    )
}

export default Navbar