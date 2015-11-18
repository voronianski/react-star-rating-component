import React from 'react';
import ReactDOM from 'react-dom';

import StarRatingComponent from '../';

class App extends React.Component {
    render() {
        return (
            <div>
                App
                <StarRatingComponent name="app" />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
