import React from "react";
import StarIcon from '../resource/pngegg.png';

const ResultCard = ({ result }) => {
    return (
        <div className="result-card">
            <div className="owner-info">
                <img src={result.owner.avatar_url} alt="Owner Avatar" width={50} height={50} />
                <div>
                    <h3>{result.name}</h3>
                    <p className="star-count">
                        <img src={StarIcon} alt="Star Icon" id="star-icon" />
                        {result.stargazers_count}
                    </p>
                </div>
            </div>
            <p className="description" id="description"><b>Description:</b> {result.description}</p>
            <p><b>Language:</b> <span className="result-language">{result.language}</span></p>
        </div>
    );
};

export default ResultCard;