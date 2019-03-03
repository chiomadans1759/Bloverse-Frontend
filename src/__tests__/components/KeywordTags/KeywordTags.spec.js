import { mount, RouterLinkStub } from '@vue/test-utils';
import KeywordTags from '@/components/KeywordTags/KeywordTags.vue';

describe('KeywordTags Component', () => {
  it('should render correctly', () => {
    const wrapper = mount(KeywordTags, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it('should close socialTag', () => {
    const wrapper = mount(KeywordTags, {
      stubs: { RouterLink: RouterLinkStub }
    });
    wrapper.find('.closeIcon').trigger('click')
  })
})
