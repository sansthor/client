import React from 'react';

function TableProfileTalent(props) {
    return (
        <React.Fragment>
            <tr>
                <td>Skills:</td>
                {props.skills !== '' ? <td>{props.skills}</td> : <td>-</td>}
            </tr>
            <tr>
                <td>Link Portofolio:</td>
                {props.link !== '' ? <td>{props.link}</td> : <td>-</td>}
            </tr>
            <tr>
                <td>Phone:</td>
                {props.phone !== '' ? <td>{props.phone}</td> : <td>-</td>}
            </tr>
        </React.Fragment>
    );
}

export default TableProfileTalent;
