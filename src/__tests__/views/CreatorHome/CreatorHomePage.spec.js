import { mount, RouterLinkStub  } from '@vue/test-utils'
import CreatorHomePage from '@/views/journalists/CreatorHome/CreatorHomePage.vue';

describe('Creator Home Page', () => {
  it('should render correctly', () => {

    const wrapper = mount(CreatorHomePage, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    });
    expect(wrapper.find(RouterLinkStub).props().to).toBe('/')
    expect(wrapper.element).toMatchSnapshot();
  });
});
