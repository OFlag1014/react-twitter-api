import React from "react";
import { Table, Row } from "reactstrap";
import connect from 'react-redux/es/connect/connect';

class TableShow extends React.Component {

    render() {
        return (
            <div className="table">
                {
                    this.props.search_data.length > 0 &&
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Number</th>
                                <th>Text</th>
                                <th>Author</th>
                                <th>Location</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.search_data.map((row, index) => {
                                    return (
                                        <tr key={ index }>
                                            <td><input type="number" className="form-control" value={ index+1 } onChange={ this.handleChange }/></td>
                                            <td><input type="text" className="form-control" value={ row.retweeted_status? row.retweeted_status.text : "" } onChange={ this.handleChange }/></td>
                                            <td><input type="text" className="form-control" value={ row.user.name } onChange={ this.handleChange }/></td>
                                            <td><input type="text" className="form-control" value={ row.user.location } onChange={ this.handleChange }/></td>
                                        </tr>
                                        // <tr key={index}>
                                        //     <td><input type='number' className='form-control' step='1' min="1" value={row[0]} onChange={() => onCellChange(index, 0)} /></td>
                                        //     <td><input type='text' className='form-control' value={row[1]} onChange={() => onCellChange(index, 1)} /></td>
                                        //     <td><input type='text' className='form-control' placeholder='6.00' value={row[2]} onChange={() => onCellChange(index, 2)} /></td>
                                        // </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                }
            </div>
        );
    }

    handleChange = () => {

    }
}


function mapStateToProps(state) {
    return {
        search_data: state.search.data
    };
}

export default connect(mapStateToProps, null)(TableShow);