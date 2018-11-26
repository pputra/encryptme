import React from 'react';

const TableDynamic = ({tcontent}) => {
    
    return (
        <table className="table">
            <thead className="thead-dark">
                <tr>
                    {Object.keys(tcontent[0]).map((el, i) => (
                    <th scope="col" key={i}>{el}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                
                {tcontent.map( (row,i) => (
                    <tr key={i}>
                        
                        {Object.keys(row).map( (col) => (
                            <td key={++i}>{row[col]}</td>
                        ))}

                    </tr>
                ))}

            </tbody>
        </table>
    )
};

export default TableDynamic;
