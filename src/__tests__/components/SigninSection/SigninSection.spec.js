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
  });

  it('should update the component state when input is changed', () => {
    const wrapper = mount(SigninComponent, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    });
    const emailInput = wrapper.find('#email');
    emailInput.element.value = 'Janet@email.com';
    emailInput.trigger('change');
    const passwordInput = wrapper.find('#password');
    passwordInput.element.value = 'awesome';
    passwordInput.trigger('change');
    expect(wrapper.vm.email).toBe('Janet@email.com');
    expect(wrapper.vm.password).toBe('awesome');
  })
});
