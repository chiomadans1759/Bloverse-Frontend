import { mount, RouterLinkStub } from '@vue/test-utils';
import Posts from '@/views/journalists/Post/PostPage.vue';

describe('Posts Component', () => {
  it('should render correctly', () => {

    const wrapper = mount(Posts, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});