import { mount, RouterLinkStub  } from '@vue/test-utils'
import SocialMedia from '@/views/journalists/SocialMedia/SocialMediaPage.vue';

describe('SocialMedia Component', () => {
  it('should render correctly', () => {

    const wrapper = mount(SocialMedia, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
