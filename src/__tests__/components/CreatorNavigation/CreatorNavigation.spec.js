import { mount, RouterLinkStub  } from '@vue/test-utils'
import CreatorNavigation from '@/components/CreatorNavigation/CreatorNavigation.vue';

describe('CreatorNavigation Component', () => {
  it('should render correctly', () => {
    const wrapper = mount(CreatorNavigation , {
      stubs: {
        RouterLink: RouterLinkStub
      },
      propsData: {
        active: 'posts',
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
