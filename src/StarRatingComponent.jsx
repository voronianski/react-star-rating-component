import React, { PropTypes } from 'react';
import cx from 'classnames';

export default class StarRatingComponent extends React.Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        value: PropTypes.number,
        editing: PropTypes.bool,
        starCount: PropTypes.number,
        starColor: PropTypes.string,
        onStarClick: PropTypes.func,
        renderStarIcon: PropTypes.func
    }

    static defaultProps = {
        starCount: 5,
        value: 0,
        editing: true,
        starColor: '#ffb400'
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
        const { onStarClick, editing } = this.props;
        if (!editing) {
            return;
        }
        onStarClick && onStarClick(name, i);
    }

    renderStars() {
        const { name, starCount, starColor, editing, renderStarIcon } = this.props;
        const starStyles = {
            float: 'right',
            cursor: editing ? 'pointer' : 'default'
        };
        const radioStyles = {
            display: 'none',
            position: 'absolte',
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
                    checked={this.state.value === i}
                    onChange={this.onChange.bind(this, name, i)}
                />
            );
            const starNodeLabel = (
                <label
                    key={`label_${id}`}
                    style={this.state.value >= i ? {float: starStyles.float, cursor: starStyles.cursor, color: starColor} : starStyles}
                    className="dv-star-rating-star"
                    htmlFor={id}
                    onClick={this.onStarClick.bind(this, name, i)}
                >
                    {typeof renderStarIcon === 'function' ? (
                        renderStarIcon(name, i, this.state.value)
                    ) : (
                        <i style={{fontStyle: 'normal'}}>&#9733;</i>
                    )}
                </label>
            );
            starNodes.push(starNodeInput);
            starNodes.push(starNodeLabel);
        }

        return starNodes;
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
