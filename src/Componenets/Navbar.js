import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBBtn,
    MDBInputGroup
} from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal } from '../Features/cartSlice';

export default function App() {
    const {totalQuantity} = useSelector((state)=> state.allCart)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getCartTotal())
    })

    // jese hi apn card pe hit karenge to vo increment hota jyga
    // dispatch ka use action ko dispatch karne ke ly hota he 
    return (
        <MDBNavbar light bgColor='light'>
            <MDBContainer fluid>
                <MDBNavbarBrand>Navbar</MDBNavbarBrand>
                <Link to="/">All Product</Link>
                <MDBBtn color='light'>
                    <Link to="/cart">Cart({totalQuantity})</Link>
                </MDBBtn>
            </MDBContainer>
        </MDBNavbar>
    );
}