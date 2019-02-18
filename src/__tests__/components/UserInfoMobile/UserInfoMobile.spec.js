import { mount, RouterLinkStub } from '@vue/test-utils';
import UserInfoMobile from '@/components/UserInfoMobile/UserInfoMobile.vue';

describe('CountryCard Component', () => {
  it('should render correctly', () => {

    const wrapper = mount(UserInfoMobile, {
      stubs: {
        RouterLink: RouterLinkStub
      },
      propsData: {
        hideMobileUserInfo: jest.fn(),
        displayInterest: true,
        hideFollowing: true,
        displayFollowers: true,
        hideCountry: true,
      }
    });
    expect(wrapper.element).toMatchSnapshot();
    expect(wrapper.props().displayInterest).toBeTruthy();
    expect(wrapper.props().hideFollowing).toBeTruthy();
    expect(wrapper.props().displayFollowers).toBeTruthy();
    expect(wrapper.props().hideCountry).toBeTruthy();
  });
});
