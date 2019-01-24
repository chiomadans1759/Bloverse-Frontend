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

  it('should render initials button', () => {
    const wrapper = mount(Navbar, {
      stubs: {
        RouterLink: RouterLinkStub
      },
      propsData: {
        isLogin: false
      }
    });
    
    const initialsButton = wrapper.findAll('.initials');
    expect(initialsButton.length).toEqual(1);
    expect(wrapper.element).toMatchSnapshot();
  });
});
