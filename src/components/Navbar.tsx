import React, {FormEvent, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import Dropdown from './Dropdown'
import './Dropdown.scss'
import './Navbar.scss'
import Button from "./Button";
import SearchForm from "./SearchForm";
import IntroProps from "../types/inputProps";
const Logo = require( '../images/logo192.png')

const Navbar: React.FC<IntroProps> = ({ onSearch }) => {
    const [click, setClick] = useState(false)
    const [dropdown, setDropdown] = useState(false)
    const [should, setShould] = useState(false)


    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const handleScroll = () => {
        const position = window.scrollY;
        if (position > 100) {
            setShould(true)
        } else if (position < 100) {
            setShould(false)
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [handleScroll]);

    const onMouseEnter = () => {
        if(window.innerWidth < 960) {
            setDropdown(false)
        } else {
            setDropdown(true)
        }
    }

    const onMouseLeave = () => {
        if(window.innerWidth < 960) {
            setDropdown(false)
        } else {
            setDropdown(false)
        }
    }

    const [search, setSearch] = useState('');

    const submitHandler = (e: FormEvent) => {
        e.preventDefault();
        onSearch(search);
        setSearch('');
    }


    return (
        <>
            <nav className='navbar' style={{paddingRight: should ? '20px' : undefined,width: should ? '100%' : undefined, position: should ? 'fixed' : undefined, top: should ? '0' : undefined, backgroundColor: should ? '#242222' : undefined, zIndex: should ? '200' : undefined}} >
                <Link to='/' className='navbar-logo' style={{display: 'flex', gap: '16px'}}>
                    <img src={Logo} alt="Pexels" style={{width: '40px', height: '40px'}}/>
                    <span>Pexels</span>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <div className="place-for-search">
                    { should ? <form className='search-block' onSubmit={submitHandler}>
                        <SearchForm value={search} onChange={(e) => setSearch(e.currentTarget.value)}/>
                        <button className='search-button'>
                            <i className='fa fa-search'></i>
                        </button>
                    </form> : null}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'><Link to='/search-results' className='nav-links' onClick={closeMobileMenu}>
                        Найти фото
                    </Link></li>
                    <li className='nav-item'><Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Лицензия
                    </Link></li>
                    <li className='nav-item'><Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Загрузить
                    </Link></li>
                    <li className='nav-item'
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    ><Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        <i className="fa-solid fa-ellipsis"></i>
                    </Link>
                        {dropdown && <Dropdown/>}
                    </li>
                    <li className='nav-item'><a href='https://www.pexels.com/ru-ru/onboarding/' className='nav-links-mobile' onClick={closeMobileMenu}>
                        Присоединиться
                    </a></li>
                </ul>
                <Button/>
            </nav>
        </>
    );
};

export default Navbar;