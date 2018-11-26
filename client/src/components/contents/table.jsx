import React from 'react';

const Table = ({tcontent, thead, fn}) => {
    
    return (
        <table className="table">
            <thead className="thead-dark">
                <tr>
                    {thead.map((el, i) => (
                    <th scope="col" key={i}>{el}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                
                {tcontent.map( (el,i) => (
                    <tr key={i}>    
                        <td>{el.url}</td>
                        <td>{el.username}</td>
                        <td>{el.password}</td>
                        <td>{el.createdAt}</td>
                        <td>{el.updatedAt}</td>
                        <td className="d-flex flex-column  align-items-center justify-content-center">
                            <button type="button" class="btn btn-primary btn-sm mb-2" onClick={() => fn.edit(el.id)}><i class="fas fa-edit"></i></button>
                            <button type="button" class="btn btn-danger btn-sm" onClick={() => fn.delete(el.id)}><i class="fas fa-minus-circle"></i></button>
                        </td> 
                    </tr>
                ))}

            </tbody>
        </table>
    )
};

export default Table;
