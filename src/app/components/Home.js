import React from 'react';
import PropTypes from 'prop-types';

export class Home extends React.Component {
    render() {
        console.log(this.props);
        let text = 'Something';
        return (
            <div>
                <p>In a new Component!</p>
                <p>{text}</p>
                <p>Your name is: {this.props.name}, your age is {this.props.age} </p>
                <p>User object => Name: {this.props.user.name}</p>
                <div>
                    <ul>
                        {this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
                    </ul>
                </div>
                <hr/>
                {this.props.children}
            </div>
        );
    }
}

Home.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    user: PropTypes.object,
    children: PropTypes.element.isRequired
}