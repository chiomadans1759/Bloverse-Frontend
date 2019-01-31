import { mount, RouterLinkStub } from '@vue/test-utils';
import UserInfoMobile from '@/components/UserInfoMobile/UserInfoMobile.vue';

describe('CountryCard Component', () => {
  it('should render correctly', () => {

    const wrapper = mount(UserInfoMobile, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
