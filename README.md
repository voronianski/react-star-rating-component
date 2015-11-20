# react-star-rating-component

[![npm version](http://badge.fury.io/js/react-star-rating-component.svg)](http://badge.fury.io/js/react-star-rating-component)
[![Dependency Status](http://david-dm.org/voronianski/react-star-rating-component.svg)](http://david-dm.org/voronianski/react-star-rating-component)

## Examples

### Editable 

```javascript
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
            <div>
                <h2>Rating from state: {this.state.rating}</h2>
                <StarRatingComponent 
                    name="rate1" 
                    starCount={8}
                    value={this.state.rating}
                    onStarClick={this.onStarClick.bind(this)}
                />
            </div>
        );
    }
}

ReactDOM.render(
    <App />, 
    document.getElementById('app')
);
```

### Non-editable

```javascript
```

---

**MIT Licensed**
