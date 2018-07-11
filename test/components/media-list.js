import MediaList from '../../src/components/media-list';

const shallow = enzyme.shallow;

let wrapper;

beforeEach(() => {
  const media = [{
    name: 'simpsons',
    source: 'tv'
  }, {
    name: 'futurama',
    source: 'tv'
  }, {
    name: 'garfield',
    source: 'movie',
  }];
  wrapper = shallow(<MediaList media={media} apiKey="some-key" />);
});

describe('media-list.js', () => {
  it('should render the component', () => {
    expect(wrapper.find('div')).to.have.length(1);
  });
  it('should dynacially display number of results', () => {
    expect(wrapper.find('.media-list__section-header')).to.have.text('3 results found');
  });
  it('should render the media list if there are items in the media array', () => {
    expect(wrapper.find('MediaListItem')).to.be.present();
  });
  it('should not render the media list component if there are no items in the array', () => {
    const component = shallow(<MediaList />);
    expect(component.find('MediaListItem')).to.not.be.present();
  });
});
