import React, { useState } from 'react';
import Greeter from './components/Greeter';

const App = () => {

    const [] = useState('');

    return (
        <div>
            <Greeter phrase="Hello there" name="Luke"/>
            <Greeter phrase="Hello again" name="Leia"/>
            <Greeter phrase="Welcome" name="Han"/>
        </div>,
        <input>
            
        </input>
    )
};

export default App;