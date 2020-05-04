import React from 'react';
// import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {ReactComponent as Logo} from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

import {HeaderContainer, LogoContainer, OptionsContainer, OptionsLink} from './header.styles';
// import './header.styles.scss';

const Header = ({currentUser, hidden}) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo' />
        </LogoContainer>
        <OptionsContainer>
            <OptionsLink to='/shop'>
                SHOP
            </OptionsLink>
            <OptionsLink to='/'>
                CONTACT
            </OptionsLink>
            {
                currentUser ?
                <OptionsLink as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionsLink>
                :
                <OptionsLink to='/signIn'>
                    SIGN IN
                </OptionsLink>
            }
            <CartIcon />
        </OptionsContainer>
        {
            hidden ? null : <CartDropdown />
        }
    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);