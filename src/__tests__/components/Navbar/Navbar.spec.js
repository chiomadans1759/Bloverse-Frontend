import { mount } from '@vue/test-utils';
import Navbar from '@/components/Navbar/Navbar.vue';

describe('Navbar Component', () => {
  it('should render correctly', () => {
    const wrapper = mount(Navbar);

    expect(wrapper.element).toMatchSnapshot();
  });
});