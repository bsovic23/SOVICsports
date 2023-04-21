import React, { useState } from 'react';

const EntryForm = ({ mutation, fields }) => {
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        mutation({ variables: { input: formData } });
    }

    return (
        <form onSubmit={handleChange}>
            {fields.map(field => (
                <div class="form-div">
                    <input
                    key={field.name}
                    name={field.name}
                    type={field.type}
                    placeholder={field.name}
                    value={formData[field.name] || ''}
                    onChange={handleChange}
                />
                </div>
            ))}
            <button type="submit">Submit</button>
        </form>
    )
};

export default EntryForm;