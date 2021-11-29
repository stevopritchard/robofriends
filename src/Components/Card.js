import React from 'react';

const Card = ({ name, email, id } ) => { //this is 'destructuring' - 'props' normally go here, so this is the same as '{name,email,id}=props;'
    return (
        <div className="tc bg-light-green dib br3 pa4 ma2 grow bw2 shadow-5">
            <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
            <div>
                <h2>{name}</h2> {/* as opposed to 'props.name' */}
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;