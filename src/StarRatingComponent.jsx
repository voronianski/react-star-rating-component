import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

class StarRatingComponent extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.number,
    editing: PropTypes.bool,
    starCount: PropTypes.number,
    starColor: PropTypes.string,
    onStarClick: PropTypes.func,
    renderStarIcon: PropTypes.func,
    renderStarIconHalf: PropTypes.func
  };

  static defaultProps = {
    starCount: 5,
    value: 0,
    editing: true,
    starColor: '#ffb400',
    emptyStarColor: '#333'
  };

  constructor(props) {
    super();

    this.state = {
      value: props.value
    };
  }

  componentWillReceiveProps(nextProps) {
    const { value } = nextProps;

    if (value != null && (value !== this.state.value)) {
      this.setState({ value });
    }
  }

  onChange(value) {
    const { editing } = this.props;

    if (!editing) {
      return;
    }

    this.setState({ value });
  }

  onStarClick(index, value, name) {
    const { onStarClick, editing } = this.props;

    if (!editing) {
      return;
    }

    onStarClick && onStarClick(index, value, name);
  }

  onStarOverOrLeave(index) {
    this.setState({ hover: index });
  }

  renderStars() {
    const { name, starCount, starColor, emptyStarColor, editing } = this.props;
    let { value, hover } = this.state;

    if (hover && editing) {
      value = hover;
    }

    const starStyles = (i, value) => ({
      float: 'right',
      cursor: editing ? 'pointer' : 'default',
      color: value >= i ? starColor : emptyStarColor
    });
    const radioStyles = {
      display: 'none',
      position: 'absolute',
      marginLeft: -9999
    };

    // populate stars
    let starNodes = [];

    for (let i = starCount; i > 0; i--) {
      const id = `${name}_${i}`;
      const starNodeInput = (
        <input
          key={`input_${id}`}
          style={radioStyles}
          className="dv-star-rating-input"
          type="radio"
          name={name}
          id={id}
          value={i}
          checked={value === i}
          onChange={this.onChange.bind(this, i, name)}
        />
      );
      const starNodeLabel = (
        <label
          key={`label_${id}`}
          style={starStyles(i, value)}
          className={'dv-star-rating-star ' + (value >= i ? 'dv-star-rating-full-star' : 'dv-star-rating-empty-star')}
          htmlFor={id}
          onClick={this.onStarClick.bind(this, i, value, name)}
          onMouseOver={this.onStarOverOrLeave.bind(this, i)}
          onMouseLeave={this.onStarOverOrLeave.bind(this, null)}
        >
          {this.renderIcon(i, value, name)}
        </label>
      );

      starNodes.push(starNodeInput);
      starNodes.push(starNodeLabel);
    }

    return starNodes;
  }

  renderIcon(index, value, name) {
    const { renderStarIcon, renderStarIconHalf } = this.props;

    if (
      typeof renderStarIconHalf === 'function' &&
      Math.ceil(value) === index &&
      value % 1 !== 0
    ) {
      return renderStarIconHalf(index, value, name);
    }

    if (typeof renderStarIcon === 'function') {
      return renderStarIcon(index, value, name);
    }

    return <i style={{fontStyle: 'normal'}}>&#9733;</i>;
  }

  render() {
    const { editing, className } = this.props;
    const classes = cx('dv-star-rating', {
      'dv-star-rating-non-editable': !editing
    }, className);

    return (
      <div style={{display: 'inline-block', position: 'relative'}} className={classes}>
        {this.renderStars()}
       </div>
    );
  }
}

export default StarRatingComponent;
