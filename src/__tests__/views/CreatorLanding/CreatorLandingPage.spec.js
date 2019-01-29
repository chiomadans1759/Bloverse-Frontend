import { mount, RouterLinkStub  } from '@vue/test-utils'
import CreatorLandingPage from '@/views/journalists/CreatorLanding/CreatorLandingPage.vue';

describe('Creator Landing Page Component', () => {
  it('should render correctly', () => {

    const wrapper = mount(CreatorLandingPage, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    });
    expect(wrapper.find(RouterLinkStub).props().to).toBe('/')
    expect(wrapper.element).toMatchSnapshot();
  });
});
