import React from 'react';

function SelectStatus(props) {
    return (
        <React.Fragment>
            <td>
                <div className="select">
                    <select
                        name={props.name}
                        value={props.value}
                        onChange={props.onChange}
                    >
                        <option value="">Status</option>
                        <option value="IN PROGRESS">In Progress</option>
                        <option value="DONE">Done</option>
                    </select>
                </div>
            </td>
        </React.Fragment>
    );
}

export default SelectStatus;
