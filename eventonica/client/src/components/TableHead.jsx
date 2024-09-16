import React from 'react';

const TableHead = () => {
  return (
    <div>
        <table id="table-head">
            <tr>
                <th>Name</th>
                <th>Date</th>
                <th>Category</th>
                <th>Location</th>
                <th className="td-button-head">Edit</th>
                <th className="td-button-head">Delete</th>
            </tr>
        </table>
    </div>
  )
}

export default TableHead;