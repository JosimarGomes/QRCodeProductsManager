import React from 'react';
import { Link } from 'react-router-dom';
import {
    HeaderContainer,
    MenuItem,
} from './styles';

export default function Header(props) {
    return (
        <HeaderContainer>
            <Link to="/">
                <MenuItem>DASHBOARD</MenuItem>
            </Link>
            <Link to="/products">
                <MenuItem>QR-CODES</MenuItem>
            </Link>
        </HeaderContainer>
    )
}