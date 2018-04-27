import React from 'react';
import ReactDOM from 'react-dom';

const socket = io.connect('http://localhost:3000');

socket.on('nadav', function(data){
    attempt()
});


const attempt = function() {

    function Button() {
        return (
            <button>Hellloooo</button>
        )
    }

    ReactDOM.render(
        <Button/>,
        document.getElementById('root')
    );
};

