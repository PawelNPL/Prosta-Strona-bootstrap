import React from 'react';
import { Container , Card } from 'react-bootstrap';



const Component1 = () => {
    return (
      <div style={{ width: '100%' ,paddingTop:'13%' }}> {}
        <Container  fluid style={{ padding: '0', margin: '0' }}>
          <div style={{marginLeft:'2.5%'  , fontSize:'14vw', fontFamily:"EB garamond", fontWeight:'500'}}>Design</div>
          <div className="d-flex justify-content-center">
                    <div style={{ backgroundColor: '#111', height: '3px', width: '95%' }} />
                </div>
        
                <div style={{marginLeft:'2.8%' , fontSize:'4vw', fontFamily:"EB garamond", fontWeight:'200'}}>To nasza pasja.</div>
        </Container>
      </div>
    );
  };

export default Component1;
