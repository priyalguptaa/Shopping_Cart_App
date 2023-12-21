import React from 'react';

import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBContainer,
    MDBCol,
    MDBRow,
} from 'mdb-react-ui-kit';
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../Features/cartSlice';

export default function App() {

    const items = useSelector((state) => state.allCart.items)
    // useSelectr hook redux me redux dtore de data niklne ke ly use hota he 
    // useselector provide state and with this state we can access the data
    // with the help of useSelector we can acess the data from store
    // with the help of state we can access the data from productData.js
    const dispatch = useDispatch();
    // dispatch jo he vo redux-dispatch ke action ko dhekta he jese hi action perform hota he 
    // redux store me action ko dispatch karne ke ly dispatch ka use karte he 

    return (
        <div class='m-3'>
            <MDBContainer>
                <MDBRow className='mb-1'>

                    {
                        //we want to print all the data which are present in productData.js file
                        items.map((item) =>
                            <MDBCol key={item.id} size='md'>
                                <MDBCard>
                                    <MDBCardImage src={item.img}
                                        position='top'
                                        alt='...' />
                                    <MDBCardBody>
                                        <MDBCardTitle>{item.title}</MDBCardTitle>
                                        <MDBCardText>
                                            {item.price}
                                        </MDBCardText>
                                        <MDBBtn onClick={() => dispatch(addToCart(item))}>Add to Cart</MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        )
                    }
                </MDBRow>
            </MDBContainer>
        </div>
    );
}