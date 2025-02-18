

import React from 'react';

const ReviewStar = (props) => {

    function onClick(index) {
        if (props.onClick) {
            props.onClick(index + 1);
        }
    }
    function renderStars(starCount) {

        let starList = [];
        for (let i = 0; i < 5; i++) {
            if (i < starCount) {
                starList.push(<span id={"reviewstar" + i} key={i} className="fa fa-star checked"  ></span>)
            }
            else {
                starList.push(<span id={"reviewstar" + i} key={i} className="fa fa-star" onClick={() => onClick(i)} ></span>)
            }
        }

        return starList;
    }
    return (
        <div className="app-reviewstar">
            {renderStars(props.star)}
        </div>
    );
};

export default ReviewStar;







