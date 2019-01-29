import { mount, RouterLinkStub } from '@vue/test-utils';
import ProfileCard from '@/components/ProfileCard/ProfileCard.vue';

describe('ProfileCard Component', () => {
  it('should render correctly', () => {

    const wrapper = mount(ProfileCard, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
