import chai from 'chai';
import enzyme from 'enzyme';
import React from 'react';
import chaiEnzyme from 'chai-enzyme';
import Adapter from 'enzyme-adapter-react-16';

enzyme.configure({
  adapter: new Adapter()
});

global.React = React;
global.enzyme = enzyme;
global.chai = chai;


global.expect = chai.expect;
global.should = chai.should();

global.chai.use(chaiEnzyme());
