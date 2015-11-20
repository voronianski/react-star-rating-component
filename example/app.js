import React from 'react';
import ReactDOM from 'react-dom';

import StarRatingComponent from '../';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            rating: 1
        };
    }

    onStarClick(name, value) {
        this.setState({rating: value});
    }

    render() {
        return (
            <div style={{marginLeft: 20}}>
                <h2>ReactStarRatingComponent</h2>

                <h3>Editable:</h3>
                <div style={{fontSize: 24}}>
                    <StarRatingComponent name="app1" />
                </div>

                <h3>Editable with handlers (Rating from state - {this.state.rating}):</h3>
                <div style={{fontSize: 26}}>
                    <StarRatingComponent
                        name="app2"
                        starCount={8}
                        value={this.state.rating}
                        onStarClick={this.onStarClick.bind(this)}
                    />
                </div>

                <h3>Non-Editable:</h3>
                <div style={{fontSize: 18}}>
                    <StarRatingComponent
                        name="app3"
                        editing={false}
                        starCount={10}
                        value={8}
                    />
                </div>

                <h3>Non-Editable (with custom icons):</h3>
                <div style={{fontSize: 18}}>
                    <StarRatingComponent
                        name="app3"
                        editing={false}
                        starCount={10}
                    />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
