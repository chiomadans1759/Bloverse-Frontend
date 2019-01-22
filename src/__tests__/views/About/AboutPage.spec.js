import { mount, RouterLinkStub } from '@vue/test-utils'
import About from '@/views/general/About/AboutPage.vue';

describe('About Page', () => {
  it('should render correctly', () => {

    const wrapper = mount(About, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    });
    expect(wrapper.find(RouterLinkStub).props().to).toBe('/login')
    expect(wrapper.element).toMatchSnapshot();
  });
});
