import SearchPage from '../../src/components/search-page';

const shallow = enzyme.shallow;

let wrapper;

beforeEach(() => {
  wrapper = shallow(<SearchPage apiKey="9c5d6b4947c4158889089d104d6ad8b8" />);
});

describe('search-page.js', () => {
  it('should render the search page component', () => {
    expect(wrapper.find('.search-page__wrapper')).to.be.present();
  });
  it('should have a heading', () => {
    expect(wrapper.find('.search-page__section-header')).to.have.text('Search');
  });
  it('should have a sub-heading', () => {
    const subheading = 'Want to watch something that\'s not on Plex? Let\'s sort that out...'
    expect(wrapper.find('.search-page__sub-header')).to.have.text(subheading);
  });
  it('should render a text search for media', () => {
    expect(wrapper.find('.search-page__text-input')).to.be.present();
  });
  it('should render a button to clear the result list if showList === true', () => {
    wrapper.setState(() => ({ showList: true }));
    expect(wrapper.find('.search-page__button')).to.be.present();
  });
  it('should not render if the button if showList !== true', () => {
    expect(wrapper.find('.search-page__button')).to.not.be.present();
  });
  it('should receive an API key as props', () => {
    const apiKey = '9c5d6b4947c4158889089d104d6ad8b8';
    expect(wrapper.instance().props.apiKey).to.equal(apiKey);
  });
  it('doesn\'t render the media list component if when showList !== true', () => {
    expect(wrapper.find('MediaList')).to.not.be.present();
  });
  it('should render the media list component when showList === true', () => {
    wrapper.setState(() => ({ showList: true }));
    expect(wrapper.find('MediaList')).to.be.present();
  })
});
