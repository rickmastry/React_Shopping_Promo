import React, {Component} from 'react';
import {Button, Collapse, Card, Media, Well, Row, Col} from 'react-bootstrap';

export default class ItemDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }
    render(){
        return(
            <div>
                <Button className="item-details-button" variant="link" onClick={() => this.setState({open: !this.state.open})}>{this.state.open === false ? `See` : `Hide `} item details
                {this.state.open === false ? ` +` : ` -`}
                </Button>
                <Collapse in={this.state.open}>
                   <Card>
                       <Media>
                           <img width={100}height={100}alt="thumbnail"src="https://webobjects2.cdw.com/is/image/CDW/5504009?wid=1142&hei=818&resMode=bilin&fit=fit,1"/>
                        </Media>
                        <Media.Body>
                            <p>iMac Desktop i7 16 gb ram 3.2 ghz</p>
                            <Row className="show=grid">
                              <Col md={6}>
                                <strong>{`$${this.props.price}`}</strong>
                                <br />
                                <strong className="price-strike">{`$${this.props.price}`}</strong>
                              </Col>
                              <Col md={6}>Qty. 1</Col>
                            </Row>
                        </Media.Body>
                   </Card>
                
                </Collapse>
            </div>
        )
    }
}