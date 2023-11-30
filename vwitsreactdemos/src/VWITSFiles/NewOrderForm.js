    import React, { useState } from 'react';
    import Form from 'react-bootstrap/Form';

    const NewOrderForm = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [date, setDate] = useState('');
    const [orderNumber, setOrderNumber] = useState('');

    const handleSubmit = () => {
        console.log('User entered details:');
        console.log('Name:', name);
        console.log('Address:', address);
        console.log('Date:', date);
        console.log('Order Number:', orderNumber);
    };

    return (
        <div className='container'>
        <h1>New Order</h1>
        <form>
            
            <label>
            Name:
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            </label>
            <br />

            <label>
            Address:
            <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
            />
            </label>
            <br />

            <label>
            Date:
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />
            </label>
            <br />

            <label>
            Order Number:
            <input
                type="text"
                value={orderNumber}
                onChange={(e) => setOrderNumber(e.target.value)}
            />
            </label>
            <br />

            <button type="button" style={{ backgroundColor: 'violet' }} onClick={handleSubmit}>
            Submit
            </button>
        </form>
        </div>
    );
    };

    export default NewOrderForm;



