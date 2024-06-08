import Link from "next/link";
import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faMoneyBill1, faIdCard, faBox } from '@fortawesome/free-solid-svg-icons';

const NavItem = ({ text, href, target, icon, active }) => {
    const availableIcons = {
        home: faHouse,
        donate: faMoneyBill1,
        contact: faIdCard,
        box: faBox,
    };

    const selectedIcon = availableIcons[icon];

    return (
        <Link href={href} target={target}>
            <div className={`nav__link`}><FontAwesomeIcon className="icon" icon={selectedIcon} />{text}</div>
        </Link>
    );
};

export default NavItem;