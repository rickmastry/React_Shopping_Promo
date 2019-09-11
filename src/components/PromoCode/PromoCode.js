import React, {Component} from 'react';
import {Button, Collapse, Card, Form, FormGroup, FormLabel, FormControl, Row, Col} from 'react-bootstrap';
import {connect} from 'react-redux';
import {handleChange} from '../../actions/PromoCodeActions';

class PromoCodeDiscount extends Component {
    constructor(props){
        super(props);

        this.state = {
            open: false
           
        };
    }

     handleChange = e => {
         this.props.handleChange(e);
     };

    render(){
        return(
            <div>
                <Button className="promo-code-button" variant="link" onClick={()=> this.setState({open: !this.state.open})}>
                 {this.state.open === false ? `Apply ` : `Hide `}
                 Promo Code
                 {this.state.open === false ? ` +` : ` -`}
                </Button>
                <Collapse in={this.state.open}>
                <div>
                    <Card>
                        <Card.Body>
                        <Row className="show-grid">
                          <Col md={12}>
                           <Form>
                               <FormGroup controlId="formInLineName">
                                  <FormLabel>Promo Code</FormLabel>
                                  <FormControl type="text" placeholder="Enter promo code" value={this.props.promoCode} onChange={this.handleChange}  />

                               </FormGroup>
                               <Button block variant="success" className="btn-round" disabled={this.props.isDisabled} onClick={this.props.giveDiscount}>Apply</Button>
                           </Form>
                          </Col>
                        </Row>
                        </Card.Body>
                    </Card>
                </div>
                </Collapse>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    PromoCode: state.PromoCode.value
})

export default connect(mapStateToProps, {handleChange})(PromoCodeDiscount);