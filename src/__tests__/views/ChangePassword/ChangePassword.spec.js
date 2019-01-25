import { mount, RouterLinkStub  } from '@vue/test-utils'
import ChangePassword from '@/views/consumers/ChangePassword/ChangePassword.vue';

describe('ChangePassword Component', () => {
  it('should render correctly', () => {

    const wrapper = mount(ChangePassword, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
