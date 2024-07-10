import React, { useState } from "react";
import { connect } from "react-redux";
import { useDispatch } from 'react-redux';
import { changeTabActive } from '../redux/action';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";;


function NavBar({activeTab}) {

    const dispatch = useDispatch();
    const [listNav] = useState(['Home', 'Skills', 'Projects', 'Contacts']);
    const [statusNav, changeStatusNav] = useState(null);
    const toggleNav = () => {
        changeStatusNav(statusNav === null ? 'active' : null);
    }
    const changeTab = (value) => {
        dispatch(changeTabActive(value));
        toggleNav();
    }
    return (
        <header>
            <div className="logo">
                <img src="/public/logo.png" alt="" />Portfolio
            </div>
            <nav className={statusNav}>
                {
                    listNav.map((value, key) => (
                        <span className={activeTab === value ? 'active' : ''} 
                        key={key}
                        onClick={() => changeTab(value)}
                        >{value}</span>
                    ))
                }
            </nav>
            <div className="icon-bar" onClick={toggleNav}>
                <FontAwesomeIcon icon={faBars} />
            </div>
        </header>
    )
}

const mapStateToProps = (state) => ({
    activeTab: state.activeTab
})

export default connect(mapStateToProps, {changeTabActive}) (NavBar)
