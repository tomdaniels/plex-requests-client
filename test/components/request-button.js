import RequestButton from '../../src/components/request-button';

const shallow = enzyme.shallow;

let wrapper;

const onClick = () => '';

beforeEach(() => {
  wrapper = shallow(<RequestButton onClick={onClick} />);
});

describe('request-button.js', () => {
  it('should render the button', () => {
    expect(wrapper.find('.media-list__button')).to.be.present();
  });
  it('picks the right text for either TV Series or Movies', () => {
    const component = shallow(<RequestButton source="tv" />);
    expect(component.find('.media-list__button')).to.have.text('Request Entire Series');
  });
});
