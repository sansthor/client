import React from 'react';

function TableProfileTalent(props) {
    return (
        <React.Fragment>
            <tr>
                <td>Skills:</td>
                {props.skills !== undefined ? (
                    <td>{props.skilss}</td>
                ) : (
                    <td>-</td>
                )}
            </tr>
            <tr>
                <td>Link Portofolio:</td>
                {props.link !== undefined ? <td>{props.link}</td> : <td>-</td>}
            </tr>
            <tr>
                <td>Phone:</td>
                {props.phone !== undefined ? (
                    <td>{props.phone}</td>
                ) : (
                    <td>-</td>
                )}
            </tr>
        </React.Fragment>
    );
}

export default TableProfileTalent;
