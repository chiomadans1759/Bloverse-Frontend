import { mount, RouterLinkStub  } from '@vue/test-utils'
import PostCard from '@/components/PostCards/PostCard.vue';

describe('PostCard Component', () => {
  it('should render correctly', () => {

    const wrapper = mount(PostCard, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
