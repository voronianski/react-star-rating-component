import React from 'react';
import ReactDOM from 'react-dom';

import StarRatingComponent from '../';

class App extends React.Component {
    render() {
        return (
            <div style={{marginLeft: 20}}>
                <h2>ReactStarRatingComponent</h2>

                <h3>Editable:</h3>
                <div style={{fontSize: 24}}>
                    <StarRatingComponent name="app1" />
                </div>

                <h3>Non-Editable:</h3>
                <div style={{fontSize: 18}}>
                    <StarRatingComponent name="app2" editing={false} starCount={10} value={8} />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
