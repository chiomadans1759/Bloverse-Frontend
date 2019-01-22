import { mount, RouterLinkStub  } from '@vue/test-utils'
import PostCards from '@/components/PostCards/PostCards.vue';

describe('PostCards Component', () => {
  it('should render correctly', () => {

    const wrapper = mount(PostCards, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
