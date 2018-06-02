import MediaListItem from '../../src/components/media-list-item';

const shallow = enzyme.shallow;

let wrapper;

beforeEach(() => {
  const props = {
    title: 'futurama',
    date: '01/01/2000',
    source: 'tv',
    desc: 'information on tv show',
    imageSlug: '/path/to/image',
    apiKey: '9c5d6b4947c4158889089d104d6ad8b8'
  };
  wrapper = shallow(<MediaListItem {...props} />);
});

describe('media-list-item.js', () => {
  it('should render the component', () => {
    expect(wrapper.find('.media-list__title')).to.be.present();
  });
  it('will set the title to the name of the media passed in', () => {
    expect(wrapper.find('.media-list__media-name')).to.have.text('futurama');
  });
  it('will include the date in the header section', () => {
    expect(wrapper.find('.media-list__media-date')).to.have.text('01/01/2000');
  });
  it('should render a description', () => {
    expect(wrapper.find('.media-list__description')).to.be.present();
  });
  it('should include the image if it\'s received', () => {
    expect(wrapper.find('.media-list__poster')).to.be.present();

    const noImageProps = {
      title: 'futurama',
      date: '01/01/2000',
      source: 'tv',
      description: 'information on tv show',
      apiKey: '9c5d6b4947c4158889089d104d6ad8b8'
    };
    const componentNoImage = shallow(<MediaListItem {...noImageProps} />);

    expect(componentNoImage.find('media-list__poste')).to.not.be.present();
  });
  it('should render the same text it receives if description is provided', () => {
    expect(wrapper.find('p')).to.have.text('information on tv show');
  });
  it('will return a message if there is no description provided', () => {
    const noDescProps = {
      title: 'futurama',
      date: '01/01/2000',
      source: 'tv',
      date: '01/01/2000',
      apiKey: '9c5d6b4947c4158889089d104d6ad8b8'
    };
    // this message is broken onto two sep
    const message = 'Sorry, there is no description available for this series.';
    const componentNoDesc = shallow(<MediaListItem {...noDescProps} />);

    expect(componentNoDesc.find('p')).to.have.text(message);
  });
  it('should render the button component to prompt user request', () => {
    expect(wrapper.find('Button')).to.be.present();
  });
  it('should render an additional + button if the source is a tv show', () => {
    expect(wrapper.find('button')).to.be.present();
  });
  it('will render the Seasons modal if state is manipulated to true', () => {
    wrapper.setState(() => ({ expandTvShow: true }));
    expect(wrapper.find('Modal')).to.be.present();
    expect(wrapper.find('Seasons')).to.be.present();
  });
});
