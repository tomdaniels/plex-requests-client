import Header from '../../src/components/header';

const shallow = enzyme.shallow;

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Header title="Plex Requests" />);
});

describe('header.js', () => {
  it('should render the header section', () => {
    expect(wrapper.find('.plex-requests__header-wrap')).to.be.present();
  });
  it('should render a small image icon with anchor element to click on', () => {
    expect(wrapper.find('.plex-requests__header-img')).to.have.length(1);
  });
  it('should display the title passed in via props', () => {
    expect(wrapper.find('.plex-requests__header-title')).to.have.text('Plex Requests');
  });
});
