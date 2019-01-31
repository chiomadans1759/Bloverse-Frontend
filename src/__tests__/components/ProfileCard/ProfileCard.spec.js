import { mount, RouterLinkStub } from '@vue/test-utils';
import ProfileCard from '@/components/ProfileCard/ProfileCard.vue';

describe('ProfileCard Component', () => {
  it('should render correctly', () => {

    const wrapper = mount(ProfileCard, {
      stubs: {
        RouterLink: RouterLinkStub
      },
      propsData: {
        hideMobileUserInfo: jest.fn(),
        displayInterest: true,
        hideFollowing: true,
        displayFollowers: true,
      }
    });
    expect(wrapper.element).toMatchSnapshot();
    expect(wrapper.props().displayInterest).toBeTruthy();
    expect(wrapper.props().hideFollowing).toBeTruthy();
    expect(wrapper.props().displayFollowers).toBeTruthy();
  });
});
