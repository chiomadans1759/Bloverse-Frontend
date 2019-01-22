import { mount, RouterLinkStub  } from '@vue/test-utils'
import PrivacyPolicy from '@/views/general/PrivacyPolicy/PrivacyPolicy.vue';

describe('PrivacyPolicy Component', () => {
  it('should render correctly', () => {

    const wrapper = mount(PrivacyPolicy, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
