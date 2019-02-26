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
  });

  it('should toggle `hideMobileProfile`', () => {
    const wrapper = mount(Profile, {
      stubs: { RouterLink: RouterLinkStub },
    });

    wrapper.find('.initials').trigger('click');
    
    wrapper.find('.bl-back-arrow').trigger('click');

    expect(wrapper.vm.showMobileProfile).toBe(true);
  });

  it('should toggle `read-later`', () => {
    const wrapper = mount(Profile, {
      stubs: { RouterLink: RouterLinkStub },
    });

    wrapper.find('.read-later').trigger('click');
    
    expect(wrapper.vm.showPrevRead).toBe(false);
  });
  
  it('should toggle `previously-read`', () => {
    const wrapper = mount(Profile, {
      stubs: { RouterLink: RouterLinkStub },
    });

    wrapper.find('.prev-read').trigger('click');
    
    expect(wrapper.vm.showPrevRead).toBe(true);
  });

  it('should toggle view to `list`', () => {
    const wrapper = mount(Profile, {
      stubs: { RouterLink: RouterLinkStub },
    });

    wrapper.find('.list-view').trigger('click');
    
    expect(wrapper.vm.showListView).toBe(true);
  });

  it('should toggle view to `grid`', () => {
    const wrapper = mount(Profile, {
      stubs: { RouterLink: RouterLinkStub },
    });

    wrapper.find('.grid-view').trigger('click');
    
    expect(wrapper.vm.showListView).toBe(false);
  });
});
