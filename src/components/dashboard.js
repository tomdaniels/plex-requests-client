import React from 'react';
import Header from './header';
import apiKey from './api-key';
import SearchPage from './search-page';

const Landing = () => (
    <div>
        <Header title="Plex Requests" />
        <SearchPage apiKey={apiKey} />
    </div>
);

export default Landing;
