import React, { useState } from 'react';

const WatchForm = ({ onAdd }: { onAdd: (name: string, timezone: number) => void }) => {
    const [name, setName] = useState('');
    const [timezone, setTimezone] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name && timezone) {
        onAdd(name, parseInt(timezone));
        setName('');
        setTimezone('');
        }
    };

    return (
        <form className="form watch-form" onSubmit={handleSubmit}>
        <div className="watch-form__field">
            <label htmlFor="watch-name">Название</label>
            <input 
            type="text" 
            id='watch-name' 
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
        </div>
        <div className="watch-form__field">
            <label htmlFor="watch-zone">Временная зона</label>
            <input 
            type="number" 
            id='watch-zone' 
            value={timezone}
            onChange={(e) => setTimezone(e.target.value)}
            />
        </div>
        <div className="watch-form__field">
            <button type='submit'>Добавить</button>
        </div>
        </form>
    );
};

export default WatchForm;