import React from 'react';
import './styles.css';

const Stats = ({ stats }) => {
    if (stats===undefined) {
        return <span className="stats">Loading...</span>;
    }
    return (
        <span className="stats">
            {stats?.error && '🤯 Error!'}
            {stats?.isLoading && '🙄 Loading...'}
            {stats?.downloads !== null && `🤘 ${stats.downloads}`}
            <br />
            {stats?.views !== null && `👓 ${stats.views}`}
        </span>
    );
};

export default Stats;
