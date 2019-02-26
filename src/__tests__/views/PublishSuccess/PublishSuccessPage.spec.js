import { shallowMount, RouterLinkStub } from '@vue/test-utils';
import PublishuccessPage from '@/views/journalists/PublishSuccess/PublishSuccessPage.vue';

describe('PublishSuccess Component', () => {
  it('should render correctly', () => {
    const wrapper = shallowMount(PublishuccessPage, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    });
    expect(wrapper.element).toMatchSnapshot()
  });

  it('should load `reloadIcons`', () => {
    const wrapper = shallowMount(PublishuccessPage, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    });
    wrapper.find('.btn').trigger('click')

    expect(wrapper.vm.reloadIcons).toBe(false)
  });
})
