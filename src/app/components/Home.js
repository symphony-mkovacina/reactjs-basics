import React from 'react';
import PropTypes from 'prop-types';

export class Home extends React.Component {
    constructor(props) {
        super();
        this.state = {
            age: props.initialAge,
            status: 0
        };
    }

    onMakeOlder() {
        this.setState({
            age: this.state.age + 1
        });
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <p>In a new Component!</p>
                <p>Your name is: {this.props.name}, your age is {this.state.age} </p>
                <p>Status: {this.state.status}</p>
                <hr/>
                <button onClick={() => this.onMakeOlder()} className="btn btn-primary">Make me older!</button>

                {/*<p>User object => Name: {this.props.user.name}</p>*/}
                {/*<div>*/}
                {/*<ul>*/}
                {/*{this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}*/}
                {/*</ul>*/}
                {/*</div>*/}
                {/*<hr/>*/}
                {/*{this.props.children}*/}
            </div>
        );
    }
}

Home.propTypes = {
    name: PropTypes.string,
    initialAge: PropTypes.number,
    // user: PropTypes.object,
    // children: PropTypes.element.isRequired
}