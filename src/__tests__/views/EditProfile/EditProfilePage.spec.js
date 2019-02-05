import { mount, RouterLinkStub } from '@vue/test-utils'
import EditProfilePage from '@/views/general/EditProfile/EditProfilePage.vue';

describe('EditProfile Page', () => {
  it('should render correctly', () => {

    const wrapper = mount(EditProfilePage, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    });
    expect(wrapper.find(RouterLinkStub).props().to).toBe('/')
    expect(wrapper.element).toMatchSnapshot();
  });

  it('should update the page state when input is changed', () => {
    const wrapper = mount(EditProfilePage, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    });
    const firstNameInput = wrapper.find('#firstName');
    firstNameInput.element.value = 'firstname';
    firstNameInput.trigger('change');

    const lastNameInput = wrapper.find('#lastName');
    lastNameInput.element.value = 'lastname';
    lastNameInput.trigger('change');

    const emailInput = wrapper.find('#email');
    emailInput.element.value = 'test@email.com';
    emailInput.trigger('change');

    const bioInput = wrapper.find('#bio');
    bioInput.element.value = "i am a boy";
    bioInput.trigger('change');

    const countryCodeInput = wrapper.find('#countrycode');
    countryCodeInput.element.value = "+234";
    countryCodeInput.trigger('change');

    const userNameInput = wrapper.find('#username');
    userNameInput.element.value = "test333";
    userNameInput.trigger('change');

    const phoneInput = wrapper.find('#phone');
    phoneInput.element.value = "080123456";
    phoneInput.trigger('change');


    const locationInput = wrapper.find('#location');
    locationInput.element.value = "nigeria";
    locationInput.trigger('change');

    expect(wrapper.vm.firstName).toBe('firstname');
    expect(wrapper.vm.lastName).toBe('lastname');
    expect(wrapper.vm.email).toBe('test@email.com');
    expect(wrapper.vm.bio).toBe('i am a boy');
    expect(wrapper.vm.countrycode).toBe('+234');
    expect(wrapper.vm.username).toBe('test333');
    expect(wrapper.vm.phone).toBe('080123456');
    expect(wrapper.vm.location).toBe('nigeria');
  });
});
