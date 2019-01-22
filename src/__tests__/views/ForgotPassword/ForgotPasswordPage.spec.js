import { mount, RouterLinkStub } from '@vue/test-utils'
import ForgotPassword from '@/views/general/ForgotPassword/ForgotPasswordPage.vue';

describe('ForgotPassword Page', () => {
  it('should render correctly', () => {

    const wrapper = mount(ForgotPassword, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    });
    expect(wrapper.find(RouterLinkStub).props().to).toBe('/')
    expect(wrapper.element).toMatchSnapshot();
  });


  it('should update the component state when input is changed', () => {
    const wrapper = mount(ForgotPassword, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    });
    const emailInput = wrapper.find('#email');
    emailInput.element.value = 'Janet@email.com';
    emailInput.trigger('change');
    expect(wrapper.vm.email).toBe('Janet@email.com');
  })
});
