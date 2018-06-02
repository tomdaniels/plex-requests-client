import Landing from '../../src/components/landing';

const shallow = enzyme.shallow;

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Landing />);
});

describe('Landing.js', () => {
  it('should render the header the component', () => {
    expect(wrapper.find('Header')).to.be.present();
  });
  it('should render the search bar', () => {
    expect(wrapper.find('SearchPage')).to.be.present();
  })
});
