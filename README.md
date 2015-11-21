# react-star-rating-component

[![npm version](http://badge.fury.io/js/react-star-rating-component.svg)](http://badge.fury.io/js/react-star-rating-component)
[![Dependency Status](http://david-dm.org/voronianski/react-star-rating-component.svg)](http://david-dm.org/voronianski/react-star-rating-component)

<img src="https://dl.dropboxusercontent.com/u/100463011/react-star-rating-component.gif" width="500" />

## Examples

### Editable 

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import StarRatingComponent from 'react-star-rating-component';

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
        const { rating } = this.state;
        return (                
            <div>
                <h2>Rating from state: {rating}</h2>
                <StarRatingComponent 
                    name="rate1" 
                    starCount={10}
                    value={rating}
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

### Non-editable (with custom icons)

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import StarRatingComponent from 'react-star-rating-component';

class App extends React.Component {
    render() {
        const { rating } = this.state;
        return (                
            <div>
                <h2>Rating from state: {rating}</h2>
                <StarRatingComponent 
                    name="rate2" 
                    editing={false}
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

Check more in [examples folder](https://github.com/voronianski/react-star-rating-component/tree/master/example).

---

**MIT Licensed**
