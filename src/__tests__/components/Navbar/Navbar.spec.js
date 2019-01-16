import { mount, RouterLinkStub } from '@vue/test-utils';
import Navbar from '@/components/Navbar/Navbar.vue';

describe('Navbar Component', () => {
  it('should render correctly', () => {
    const wrapper = mount(Navbar, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
