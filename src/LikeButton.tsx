import * as React from 'react';


const LikeButton: React.FC = () => {
    const [like, setLike] = React.useState(0);
    const [on, setOn] = React.useState(true);
    React.useEffect(() => {
        document.title = `点击了${like}次`;
    });
    return (
        <React.Fragment>
            <button onClick={() => setLike(like + 1)}>{like} Like</button>
            <button onClick={() => setOn(!on)}> {on ? 'ON' : 'OFF'}</button>
        </React.Fragment>
    )
}

export default LikeButton;