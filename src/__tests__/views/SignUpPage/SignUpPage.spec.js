import { mount, RouterLinkStub } from '@vue/test-utils'
import SignUpPage from '@/views/consumers/SignUpPage/SignUpPage.vue';

describe('Signup Page', () => {
  it('should render correctly', () => {

    const wrapper = mount(SignUpPage, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    });
    expect(wrapper.find(RouterLinkStub).props().to).toBe('/')
    expect(wrapper.element).toMatchSnapshot();
  });

  it('should update the page state when input is changed', () => {
    const wrapper = mount(SignUpPage, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    });
    const firstNameInput = wrapper.find('#first-name');
    firstNameInput.element.value = 'firstname';
    firstNameInput.trigger('change');

    const lastNameInput = wrapper.find('#last-name');
    lastNameInput.element.value = 'lastname';
    lastNameInput.trigger('change');

    const emailInput = wrapper.find('#email');
    emailInput.element.value = 'test@email.com';
    emailInput.trigger('change');

    const passwordInput = wrapper.find('#password');
    passwordInput.element.value = 'test12345';
    passwordInput.trigger('change');

    expect(wrapper.vm.firstName).toBe('firstname');
    expect(wrapper.vm.lastName).toBe('lastname');
    expect(wrapper.vm.email).toBe('test@email.com');
    expect(wrapper.vm.password).toBe('test12345');
  });
});
