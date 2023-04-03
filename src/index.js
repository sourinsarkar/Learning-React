import React from 'react';
import ReactDOM from 'react-dom';
import SingleComment from './SingleComment';
import DP1 from './image/p1face.png';
import DP2 from './image/p2face.png';
import DP3 from './image/p3face.png';

const App = () => {
    return (
        <div className='ui comments'>
            <SingleComment
            name="Shanaya"
            date="Today at 5:00PM"
            text="Hello Asia"
            picture={DP1}
            />

            <SingleComment
            name="Sheetal"
            date="Today at 6:00PM"
            text="Hello India"
            picture={DP2}
            />

            <SingleComment
            name="Samantha"
            date="Today at 7:00PM"
            text="Hello Delhi"
            picture={DP3}
            />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)