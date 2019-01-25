import { mount, RouterLinkStub } from '@vue/test-utils'
import NewPassword from '@/views/general/NewPassword/NewPasswordPage.vue';

describe('NewPassword Page', () => {
  global.hideTawkBot = jest.fn();
  
  it('should render correctly', () => {

    const wrapper = mount(NewPassword, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    });
    expect(wrapper.find(RouterLinkStub).props().to).toBe('/')
    expect(wrapper.element).toMatchSnapshot();
  });


  it('should update the component state when input is changed', () => {
    const wrapper = mount(NewPassword, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    });
    const passwordInput = wrapper.find('#password');
    passwordInput.element.value = '1234567890';
    passwordInput.trigger('change');
    expect(wrapper.vm.password).toBe('1234567890');

    const confirmPasswordInput = wrapper.find('#confirmPassword');
    confirmPasswordInput.element.value = '1234567890';
    confirmPasswordInput.trigger('change');
    expect(wrapper.vm.confirmPassword).toBe('1234567890');
  });
});
