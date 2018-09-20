import React from 'react';
import Header from './header';
import SearchPage from './search-page';

const Landing = () => (
  <div>
    <Header title="tomd.io | Requests" />
    <SearchPage apiKey="9c5d6b4947c4158889089d104d6ad8b8" />
  </div>
);

export default Landing;
