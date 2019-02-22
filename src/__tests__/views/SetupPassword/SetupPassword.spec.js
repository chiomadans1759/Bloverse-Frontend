import { mount, RouterLinkStub } from '@vue/test-utils';
import SetupPassword from '@/views/general/SetupPassword/SetupPassword.vue';

describe('SetupPassword Component', () => {
  it('should render correctly', () => {

    const wrapper = mount(SetupPassword, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
