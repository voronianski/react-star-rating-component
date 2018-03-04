# react-star-rating-component

[![npm version](http://badge.fury.io/js/react-star-rating-component.svg)](http://badge.fury.io/js/react-star-rating-component)
[![Dependency Status](http://david-dm.org/voronianski/react-star-rating-component.svg)](http://david-dm.org/voronianski/react-star-rating-component)
[![Download Count](http://img.shields.io/npm/dm/react-star-rating-component.svg?style=flat)](http://www.npmjs.com/package/react-star-rating-component)

> Tiny [React.js](https://facebook.github.io/react) component for star (or any other *icon based*) ratings.

## Install

```bash
npm install react-star-rating-component --save
```

## Demo

[<img src="https://image.ibb.co/d9VFZb/Basic_React_Component_For_Star_Ratings.gif" width="600" />](http://voronianski.github.io/react-star-rating-component/example)

## Props

```javascript
<StarRatingComponent
    name={String} /* name of the radio input, it is required */
    value={Number} /* number of selected icon (`0` - none, `1` - first) */
    starCount={Number} /* number of icons in rating, default `5` */
    onStarClick={Function(nextValue, prevValue, name)} /* on icon click handler */
    onStarHover={Function(nextValue, prevValue, name)} /* on icon hover handler */
    onStarHoverOut={Function(nextValue, prevValue, name)} /* on icon hover out handler */
    renderStarIcon={Function(nextValue, prevValue, name)} /* it should return string or react component */
    renderStarIconHalf={Function(nextValue, prevValue, name)} /* it should return string or react component */
    starColor={String} /* color of selected icons, default `#ffb400` */
    emptyStarColor={String} /* color of non-selected icons, default `#333` */
    editing={Boolean} /* is component available for editing, default `true` */
/>
```

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

  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
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
          renderStarIcon={() => <span></span>}
          starCount={10}
          value={8}
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
