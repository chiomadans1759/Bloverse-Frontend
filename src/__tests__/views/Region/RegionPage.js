import { mount, RouterLinkStub } from '@vue/test-utils'
import Region from '@/views/consumers/Region/RegionPage.vue';

describe('Region Page', () => {
  it('should render correctly', () => {

    const wrapper = mount(Region, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    });
    expect(wrapper.find(RouterLinkStub).props().to).toBe('/')
    expect(wrapper.element).toMatchSnapshot();
  });
});
