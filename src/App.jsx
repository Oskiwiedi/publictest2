import './App.css'
import DataTable from "react-data-table-component";

function App() {
    const brands = ['VW', 'Opel', 'Audi', 'Mercedes'];

    const doubleheader = ['id', 'testname', 'tablename'];
    const doublebody = [
        [1, 'test1', 'table1'],
        [2, 'test2', 'table2'],
        [3, 'test3', 'table3']];

    const columns = [
        {
            name: 'id',
            selector: row => row.id,
            sortable: true,
        },
        {
            name: 'model',
            selector: row => row.model,
            sortable: true,
        },
        {
            name: 'type',
            selector: row => row.type,
            sortable: true,
        }
    ];
    const data = [
        {
            id: 1,
            model: 'Corsa',
            type: 'small'
        },
        {
            id: 2,
            model: 'Astra',
            type: 'family'
        },
        {
            id: 3,
            model: 'Mokka',
            type: 'SUV'
        },
        {
            id: 4,
            model: 'Movano',
            type: 'transporter'
        },
    ];

    return (
        <>
            <h2>Carmodels</h2>
            <DataTable
                columns={columns}
                data={data}
                selectableRows
            />

            <h2>Brands</h2>
            <ul>
                {brands.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>

            <table>
                <thead>
                <tr>
                    {doubleheader.map((value, valueid) => (
                        <th key={valueid}>{value}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {doublebody.map((row, rowid) => (
                    <tr key={rowid}>
                        {row.map((value, valueid) => (
                            <td key={valueid}>{value}</td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}

export default App