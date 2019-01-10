import { mount, RouterLinkStub } from '@vue/test-utils'
import SigninView from '@/views/Signin/Signin.vue';

describe('SigninView Component', () => {
  it('should render correctly', () => {

    const wrapper = mount(SigninView, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    });
    expect(wrapper.find(RouterLinkStub).props().to).toBe('/')
    expect(wrapper.element).toMatchSnapshot();
  })
});
