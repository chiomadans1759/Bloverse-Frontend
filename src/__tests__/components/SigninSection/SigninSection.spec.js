import { mount, RouterLinkStub  } from '@vue/test-utils'
import SigninComponent from '@/components/SigninSection/Signin.vue';

describe('SigninComponent Component', () => {
  it('should render correctly', () => {

    const wrapper = mount(SigninComponent, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    });
    expect(wrapper.find(RouterLinkStub).props().to).toBe('/creators/apply')
    expect(wrapper.element).toMatchSnapshot();
  })
});
