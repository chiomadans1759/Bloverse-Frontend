import { mount, RouterLinkStub  } from '@vue/test-utils'
import CreatorNavigation from '@/components/CreatorNavigation/CreatorNavigation.vue';

describe('CreatorNavigation Component', () => {
  it('should render correctly', () => {
    const wrapper = mount(CreatorNavigation , {
      stubs: {
        RouterLink: RouterLinkStub
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
