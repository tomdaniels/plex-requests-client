import Seasons from '../../src/components/seasons-list';

const shallow = enzyme.shallow;

let wrapper;

beforeEach(() => {
  const title = 'banshee'
  const seasons = [{
    title: 'simpsons',
    source: 'tv'
  }, {
    title: 'futurama',
    source: 'movies'
  }];
  wrapper = shallow(<Seasons title={title} seasons={seasons} />);
});

describe('seasons-list.js', () => {
  it('should render the Season List component', () => {
    expect(wrapper.find('div')).to.have.length(1);
  });
  it('should use the name of the show as the title', () => {
    expect(wrapper.find('.season-list__section-header')).to.have.text('banshee');
  });
  it('will display a message if no results are found', () => {
    const component = shallow(
      <Seasons
        title={'simpsons'}
        seasons={[]}
      />
    );
    expect(component.find('.season-list__wrap')).to.have.text('No results found..');
  });
  it('will dynamically display how many seasons are available', () => {
    expect(wrapper.find('.season-list__section-subheader')).to.have.text('2 seasons found');
  });
  it('should render the child component if seasons are passed to it', () => {
    expect(wrapper.find('SeasonListItem')).to.be.present();
  });
});
