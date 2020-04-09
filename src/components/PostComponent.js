import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Label, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, Form, Errors, actions } from 'react-redux-form';


const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);
const isNumber = val => !isNaN(+val);
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);


class Post extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            description: '',
            state: '',
            lga:'',
            town:'',
            address:'',
            agreeToUseMap: false,
            advertisersName:'',
            phoneNum: '',
            textMessage:'',
            email: '',
            images: '',
            touched: {
                title: false,
                description: false,
                state: false,
                lga: false,
                town: false,
                advertisersName: false,
                phoneNum: false,
                textMessage: false,
                email: false
            }
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        console.log('Current state is: ' + JSON.stringify(values));
        alert('Current state is: ' + JSON.stringify(values));
        this.props.resetFeedbackForm();
    }

    render() {
      
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Post ad</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>Post ad</h2>
                        <hr />
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h2>Enter your ad information</h2>
                        <hr />
                    </div>
                    <div className="col-md-10">
                        <Form model="postadForm" onSubmit={values => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="title">Title</Label>
                                <Control.text model=".title" id="title" name="title"
                                className="form-control"
                                validators={{
                                    required, 
                                    minLength: minLength(2),
                                    maxLength: maxLength(15)
                                }}
                            />
                            <Errors
                                className="text-danger"
                                model=".title"
                                show="touched"
                                component="div"
                                messages={{
                                    required: 'Required',
                                    minLength: 'Must be at least 2 characters',
                                    maxLength: 'Must be 15 characters or less'
                                }}
                            />
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="description">Description</Label>
                                <Control.textarea model=".description" id="description" name="description"
                                    rows="12"
                                    className="form-control"
                                    validators={{
                                        required, 
                                        minLength: minLength(2),
                                        maxLength: maxLength(1500)
                                    }}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".description"
                                    show="touched"
                                    component="div"
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be at least 2 characters',
                                        maxLength: 'Must be 1500 characters or less'
                                    }}
                                />   
                            </Row>
                            <Row className="form-group">
                                <Col md={4}>
                                    <Label htmlFor="state">State</Label>
                                    <Control.select model=".state" name="state"
                                           className="form-control"
                                           validators={{
                                            required
                                        }}>
                                        <option>Alabama</option>
                                        <option>Minnesota</option>
                                        <option>Washington</option>
                                    </Control.select>
                                </Col>
                                <Col md={4}>
                                    <Label htmlFor="county">County</Label>
                                    <Control.select model=".county" name="county"
                                           className="form-control" 
                                           validators={{
                                            required
                                        }}>
                                        <option>Al_1_county</option>
                                        <option>Al_2_county</option>
                                        <option>Al_3_county</option>
                                        <option>Mi_1_county</option>
                                        <option>Mi_2_county</option>
                                        <option>Mi_3_county</option>
                                        <option>Wa_1_county</option>
                                        <option>Wa_2_county</option>
                                        <option>Wa_3_county</option>    
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="town">Town</Label>
                                <Control.text model=".town" id="town" name="town"
                                className="form-control"
                                validators={{
                                    required,
                                    minLength: minLength(2),
                                    maxLength: maxLength(15)
                                }}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".town"
                                    show="touched"
                                    component="div"
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be at least 2 characters',
                                        maxLength: 'Must be 15 characters or less'
                                    }}
                                />   
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="address">Address</Label>
                                <Control.text model=".address" id="address" name="address"
                                    className="form-control"
                                    validators={{
                                        required,
                                        minLength: minLength(2),
                                        maxLength: maxLength(15)
                                    }}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".address"
                                    show="touched"
                                    component="div"
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be at least 2 characters',
                                        maxLength: 'Must be 15 characters or less'
                                    }}
                                />
                            </Row>
                            <Row className="form-group">
                                <span model=".map" id="map" rows="12">{map}</span>
                            </Row>
                            <Row className="form-group">
                                <div className="form-check">
                                    <Label check>
                                        <Control.checkbox
                                            model=".agree"
                                            name="agree"
                                            className="form-check-input"
                                        /> 
                                        <h6>Use Map</h6>
                                        <p>You can use map to provide location</p>
                                    </Label>
                                </div>  
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="advertisersName">Advertiser's Name</Label>
                                <Control.text model=".advertisersName" id="advertisersName" name="advertisersName"
                                    className="form-control"
                                    validators={{
                                        required,
                                        minLength: minLength(2),
                                        maxLength: maxLength(15)
                                    }}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".advertisersName"
                                    show="touched"
                                    component="div"
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be at least 2 characters',
                                        maxLength: 'Must be 15 characters or less'
                                    }}
                                />
                            </Row>
                            <Row className="form-group">
                                <Label>How do you want to be contacted?</Label>
                                <Row className="form-group">
                                    <Control.radio model=".agree" name="agree" className="form-radio-input" xs={1}/> {' '}
                                    <Label htmlFor="phoneNum">Phone Call / Text Message</Label>
                                    <Control.text model=".phoneNum" id="phoneNum" name="phoneNum"
                                        placeholder="Phone number"
                                        className="form-control"
                                        validators={{
                                            required,
                                            minLength: minLength(2),
                                            maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".lastName"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be at least 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />  
                                </Row>
                                <Row className="form-group">
                                    <Control.radio model=".agree" name="agree" className="form-radio-input" xs={1}/> {' '}
                                    <Row className="form-group">
                                        <Row className="form-group">
                                            <Label htmlFor="textMessage" check>
                                                <Control.checkbox
                                                    model=".agree"
                                                    name="agree"
                                                    className="form-check-input" xs={1}
                                                /> {' '} xs={10}
                                                Text Message
                                            </Label>
                                            <Control.text model=".textMessage" id="textMessage" name="textMessage"
                                                placeholder="Phone number"
                                                className="form-control"
                                                validators={{
                                                    required,
                                                    validNum
                                                }}
                                            />
                                            <Errors
                                                className="text-danger"
                                                model=".textMessage"
                                                show="touched"
                                                component="div"
                                                messages={{
                                                    required: 'Required',
                                                    validNum: 'Invalid phone number'
                                                }}
                                            />
                                        </Row>
                                        <Row className="form-group">
                                            <Label htmlFor="email" check>
                                                <Control.checkbox
                                                    model=".agree"
                                                    name="agree"
                                                    className="form-check-input"
                                                />  {}
                                                Email
                                            </Label>
                                            <Control.text model=".email" id="email" name="email"
                                                placeholder="Email"
                                                className="form-control"
                                                validators={{
                                                    required,
                                                    validEmail
                                                }}
                                            />
                                            <Errors
                                                className="text-danger"
                                                model=".email"
                                                show="touched"
                                                component="div"
                                                messages={{
                                                    required: 'Required',
                                                    validEmail: 'Invalid email address'
                                                }}
                                            />
                                        </Row>
                                    </Row>
                                </Row>
                            </Row>
                            <Row className="form-group">
                                <Button type="submit" color="primary">
                                    choose Images
                                </Button> 
                            </Row>
                            <Row className="form-group">
                                <Row className="form-group">
                                    <Col>{image}</Col>
                                    <Col>{image}</Col>
                                    <Col>{image}</Col>
                                </Row>
                                <Row className="form-group">
                                    <Col>{image}</Col>
                                    <Col>{image}</Col>
                                    <Col>{image}</Col>
                                </Row>
                                <Row className="form-group">
                                    <Col>{image}</Col>
                                    <Col>{image}</Col>
                                    <Col>{image}</Col>
                                </Row>
                                <Row className="form-group">
                                    <Col>{image}</Col>
                                    <Col>{image}</Col>
                                    <Col>{image}</Col>
                                </Row>
                            </Row>
                            <Row className="form-group">
                                <Button outline type="submit">
                                    Back
                                </Button> 
                                <Button outline type="submit">
                                    Reset
                                </Button> 
                                <Button type="submit" color="primary">
                                    Next
                                </Button> 
                            </Row>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Post;