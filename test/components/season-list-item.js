import SeasonListItem from '../../src/components/season-list-item';

const shallow = enzyme.shallow;

let wrapper;

beforeEach(() => {
  const season = {
    name: 'simpsons',
    epCount: 127,
    date: '01/01/2000'
  };
  wrapper = shallow(<SeasonListItem {...season} />);
});

describe('season-list-item.js', () => {
  it('should render the component', () => {
    expect(wrapper.find('.season-list-item__wrapper')).to.be.present();
  });
  it('should use the show name as the component title', () => {
    expect(wrapper.find('.season-list-item__title')).to.have.text('simpsons');
  });
  it('should show how many episodes are in each seasons', () => {
    expect(wrapper.find('.season-list-ep-count')).to.have.text('127 episodes');
  });
  it('should show a spinner image once the season has been requested', () => {
    wrapper.setState(() => ({ isLoading: true }));
    expect(wrapper.find('.media-list__loader')).to.be.present();
  });
  it('should prompt users request by default', () => {
    expect(wrapper.find('.season-list-item__request-button')).to.have.text('Request Season');
  });
});
