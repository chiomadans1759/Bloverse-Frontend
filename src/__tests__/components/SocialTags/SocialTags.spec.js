import { mount, RouterLinkStub } from '@vue/test-utils';
import SocialTags from '@/components/SocialTags/SocialTags.vue';

describe('SocialTags Component', () => {
  it('should render correctly', () => {
    const wrapper = mount(SocialTags, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it('should close socialTag', () => {
    const wrapper = mount(SocialTags, {
      stubs: { RouterLink: RouterLinkStub }
    });
    wrapper.find('.closeIcon').trigger('click')
  })
})