import { mount, RouterLinkStub  } from '@vue/test-utils'
import PrivacyPolicy from '@/views/general/PrivacyPolicy/PrivacyPolicyPage.vue';

describe('PrivacyPolicy Page', () => {
  it('should render correctly', () => {

    const wrapper = mount(PrivacyPolicy, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
