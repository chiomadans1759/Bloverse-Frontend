import { mount, RouterLinkStub  } from '@vue/test-utils'
import PostCards from '@/components/PostCards/PostCards.vue';

describe('PostCards Component', () => {
  it('should render correctly', () => {

    const wrapper = mount(PostCards, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    });
    const usernames = wrapper.findAll('.name');

    expect(wrapper.element).toMatchSnapshot();
    expect(usernames.length).toEqual(10);
  });

  it('should hide username', () => {
    const wrapper = mount(PostCards, {
      stubs: {
        RouterLink: RouterLinkStub
      },
      propsData: {
        hideUsername: true
      }
    });

    const usernames = wrapper.findAll('.name');

    expect(usernames.length).toEqual(0);
  });
});
