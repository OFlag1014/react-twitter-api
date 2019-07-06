import React from "react";
import PropTypes from "prop-types";

import connect from 'react-redux/es/connect/connect';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { Button, Input, Label, FormGroup } from "reactstrap";

import * as Actions from '../../store/actions';
import * as Utils from "../../utils/api";
import search from "../../store/reducers/search";

import TableShow from "../../components/TableShow";

class ShowSearchData extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectKey: ''
        };
    }

    handleSearchClick = () => {
        console.log("search button clicked");
        console.log("this.state.selectKey: ", this.state.selectKey);
        var searchKey = this.state.selectKey;
        console.log("here comes searchKey: ", searchKey);
        var data = Utils.xapi().get('/', {
            params: {
                key: searchKey
            }
        }).then((response) => {
            console.log("response: ", response);
            var data = response.data.result.tweets.statuses;
            console.log("here comes data: ", data);
            this.props.getSearchData(data);
        }).catch((error) => {
            console.log("error");
        });
    }

    handleKeySelect = (event) => {
        console.log(event.target.value);
        this.setState({
            selectKey: event.target.value
        });
        console.log("this.state.selectKey: ", this.state.selectKey);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4 offset-4 text-center">
                        <FormGroup>
                            <Label for="exampleSelect"> Select Key Words </Label>
                            <Input type="select" name="keySelect" id="keySelect" onChange={this.handleKeySelect}>
                                <option></option>
                                <option>Measles</option>
                                <option>measle</option>
                                <option>morbilliform rash</option>
                                <option>rubeola</option>
                                <option>morbilli</option>
                                <option>Koplik spots</option>
                                <option>Coryza</option>
                                <option>Pneumonia</option>
                                <option>pneum</option>
                                <option>pneumococcal</option>
                                <option>bronchopneumonia</option>
                                <option>pneumocystis</option>
                                <option>lung infection</option>
                                <option>chest infection</option>
                                <option>walking</option>
                                <option>pneumonia</option>
                            </Input>
                        </FormGroup>
                        <Button className="m-3" color="success" onClick={this.handleSearchClick}> Search </Button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <TableShow/>
                    </div>
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getSearchData: Actions.getSearchData
    }, dispatch);
}


export default connect(null, mapDispatchToProps)(ShowSearchData);