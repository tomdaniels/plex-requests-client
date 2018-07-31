import RequestButton from '../../src/components/request-button';

const shallow = enzyme.shallow;

let wrapper;

const onClick = () => '';

beforeEach(() => {
  wrapper = shallow(
    <RequestButton
      onClick={onClick}
      source="tv"
      mediaName="simpsons"
      />
    );
});

describe('request-button.js', () => {
  it('should render the button', () => {
    expect(wrapper.find('.media-list__button')).to.be.present();
  });
  it('picks the right text for either TV Series or Movies', () => {
    const tvText = shallow(<RequestButton source="tv" mediaName="simpsons" />);
    expect(tvText.find('.media-list__button')).to.have.text('Request entire series');

    const movieText = shallow(<RequestButton source="movie" mediaName="the simpsons movie" />);
    expect(movieText.find('.media-list__button')).to.have.text('Request movie');

    const requestText = shallow(<RequestButton mediaName="simpsons" source="tv" requested />);
    expect(requestText.find('.media-list__button')).to.have.text('Successfully requested');
  });
});
