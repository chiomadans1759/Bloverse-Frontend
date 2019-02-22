import { shallowMount, RouterLinkStub } from '@vue/test-utils';
import PublishPage from '@/views/journalists/Publish/PublishPage.vue';

describe('PublishPage Component', () => {
  it('should render correctly', () => {
    const wrapper = shallowMount(PublishPage, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it('should increase the `textArea`', () => {
    const wrapper = shallowMount(PublishPage, {
      stubs: { RouterLink: RouterLinkStub }
    });
    wrapper.find('.show').trigger('click');

    expect(wrapper.vm.textArea).toBe(true);
  });

  it('should display `showMe`', () => {
    const wrapper = shallowMount(PublishPage, {
      stubs: 
        { RouterLink: RouterLinkStub }
    });
    wrapper.find('.text').trigger('click');

    expect(wrapper.vm.showMe).toBe(false);
  });

  it('should display `showThis`', () => {
    const wrapper = shallowMount(PublishPage, {
      stubs: 
      { RouterLink: RouterLinkStub }
    });
    wrapper.find('.btn').trigger('input');
    wrapper.find('.nav-link').trigger('input');

    expect(wrapper.vm.showThis).toBe(false);
  })
})
