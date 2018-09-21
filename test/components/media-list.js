import MediaList from '../../src/components/media-list';

const shallow = enzyme.shallow;

let wrapper;

beforeEach(() => {
  const media = [{
    id: 123,
    title: 'the simpsons',
    desc: 'the simpsons don\'t need a description',
    date: 45678987654,
    image: '/path/to/image',
  }, {
    id: 123,
    title: 'the simpsons',
    desc: 'the simpsons don\'t need a description',
    date: 45678987654,
    image: '/path/to/image',
  }];
  wrapper = shallow(<MediaList media={media} apiKey="some-key" />);
});

describe('media-list.js', () => {
  it('should render the component', () => {
    expect(wrapper.find('div')).to.have.length(1);
  });
  it('should dynacially display number of results, removing duplicates', () => {
    console.log(wrapper.find('.media-list__section-header'));
    expect(wrapper.find('.media-list__section-header')).to.have.text('1 results found');
  });
  it('should render the media list if there are items in the media array', () => {
    expect(wrapper.find('MediaListItem')).to.be.present();
  });
  it('should not render the media list component if there are no items in the array', () => {
    const component = shallow(<MediaList apiKey="some-key" />);
    expect(component.find('MediaListItem')).to.not.be.present();
  });
});
