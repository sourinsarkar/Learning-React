import React from 'react';
// import SingleComment from './SingleComment';
// import DP1 from './image/p1face.png';
// import DP2 from './image/p2face.png';
// import DP3 from './image/p3face.png';
// import UserCard from './UserCard';
import ClassExample from './Components/ClassExample';

function App() {
    return (
        <div>
            {/* <div className="ui comments">
                <UserCard>
                    <div>
                        Hello my name is Sourin, I live in India.
                    </div>
                </UserCard>
                <UserCard>
                    <SingleComment
                        name="Sheetal"
                        date="Today at 3:00PM"
                        text="Hello boy"
                        picture={DP1}
                    />
                </UserCard>
                <SingleComment
                    name="Shanaya"
                    date="Today at 4:00PM"
                    text="Hello man"
                    picture={DP2}
                />
                <SingleComment
                    name="Sia"
                    date="Today at 5:00PM"
                    text="Hello dude"
                    picture={DP3}
                />
            </div> */}
            <ClassExample />
        </div>
    )
}

export default App;