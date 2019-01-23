import { mount, RouterLinkStub } from '@vue/test-utils'
import SinglePost from '@/views/general/SinglePost/SinglePostPage.vue';

describe('SinglePost Page', () => {
  it('should render correctly', () => {

    const wrapper = mount(SinglePost, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    });
    expect(wrapper.find(RouterLinkStub).props().to).toBe('/register')
    expect(wrapper.element).toMatchSnapshot();
  });
});
