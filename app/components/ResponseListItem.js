import React from 'react';

const ResponseListItem = (data) => {
    console.log("============== in ResponseListItem===============")
    console.log(data);
    return (
        <tr>
            <td>{data.res2.intervieweeFullName}</td>
            <td>{data.res2.intervieweePosition}</td>
            <td>{data.res1.title}</td>
            <td>{data.res1.category}</td>
            <td>{data.res2.date.substring(0,10)}</td>
            <td>{data.res2.status}</td>
            <td>
                <button type="button" className="btn btn-info btn-outline btn-sm">
                <span className="glyphicon glyphicon-trash"></span>
                </button>
            </td>
            <td>
                <button onClick={() => data.onViewAnswers(data.res1, data.res2)} type="button" className="btn btn-info btn-outline btn-sm">
                <span className="glyphicon glyphicon-eye-open"></span>
                </button>
            </td>
        </tr>
    )
};

export default ResponseListItem;