import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// By naming convention, this file will be run first,
// make it a perfect place for setting things up

Enzyme.configure({adapter: new Adapter()});