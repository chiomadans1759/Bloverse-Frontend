import { shallowMount } from '@vue/test-utils'
import App from '../../../App';
import Loading from '../../../components/Loading';

describe('App Component', () => {
  it('should render correctly', () => {
    const wrapper = shallowMount(App, Loading);
    expect(wrapper.isVueInstance()).toBeTruthy();
  })
});
