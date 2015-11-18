import React, { PropTypes } from 'react';
import cx from 'classnames';

export default class StarRatingComponent extends React.Component {
    static defaultProps = {
        starCount: 5,
        value: 0,
        editing: true
    }

    static propTypes = {
        name: PropTypes.string.isRequired,
        value: PropTypes.number,
        editing: PropTypes.bool,
        starCount: PropTypes.number,
        onStarClick: PropTypes.func,
        renderStarIcon: PropTypes.func
    }

    constructor(props) {
        super();

        this.state = {
            value: props.value
        };
    }

    onChange(name, value) {
        const { editing } = this.props;
        if (!editing) {
            return;
        }

        this.setState({ value });
    }

    onStarClick(name, i) {
        const { onStarClick } = this.props;
        onStarClick && onStarClick(name, i);
    }

    renderStars() {
        const { name, starCount, renderStarIcon } = this.props;

        // populate stars
        let starNodes = [];
        for (let i = starCount; i > 0; i--) {
            const id = `${name}_${i}`;
            const starNodeInput = (
                <input
                    key={`input_${id}`}
                    className="dv-star-rating-input"
                    type="radio"
                    name={name}
                    id={id}
                    value={i}
                    checked={this.state.value === i}
                    onChange={this.onChange.bind(this, name, i)}
                />
            );
            const starNodeLabel = (
                <label
                    key={`label_${id}`}
                    htmlFor={id}
                    className="dv-star-rating-star"
                    onClick={this.onStarClick.bind(this, name, i)}
                >
                    {typeof renderStarIcon === 'function' ? renderStarIcon() : <i>&#9733;</i>}
                </label>
            );
            starNodes.push(starNodeInput);
            starNodes.push(starNodeLabel);
        }

        return starNodes;
    }

    render() {
        const { editing, className } = this.props;
        const classes = cx('star-rating', {
            'star-rating-non-editable': !editing
        }, className);

        return (
            <div className={classes}>
                {this.renderStars()}
            </div>
        );
    }
}
