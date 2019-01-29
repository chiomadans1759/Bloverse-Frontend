import { mount, RouterLinkStub } from '@vue/test-utils';
import Profile from '../../../views/consumers/Profile/ProfilePage.vue';

describe('Profile Component', () => {
  it('should render correctly', () => {

    const wrapper = mount(Profile, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it('should toggle `showMobileProfile`', () => {
    const wrapper = mount(Profile, {
      stubs: { RouterLink: RouterLinkStub },
    });

    wrapper.find('.initials').trigger('click');
    
    expect(wrapper.vm.showMobileProfile).toBe(false);
  })
});
