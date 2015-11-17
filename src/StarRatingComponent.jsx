import React, { PropTypes } from 'react';

export default class StarRatingComponent extends React.Component {
    defaultProps = {
        starCount: 5
    }

    propTypes = {
        name: PropTypes.string.isRequired,
        starCount: PropTypes.number,
        onStarClick: PropTypes.func,
        renderStarIcon: PropTypes.func
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
                    type="radio"
                    name={name}
                    id={id}
                    value={i}
                    className="dv-star-rating-input"
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
        return (
            <div className={classes}>
                {this.renderStars()}
            </div>
        );
    }
}
