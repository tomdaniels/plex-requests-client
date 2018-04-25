import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage from '../../components/error-page';

test('should render the 404 page, link back to dash', () => {
    const wrapper = shallow(<NotFoundPage />);
    expect(wrapper).toMatchSnapshot();
});