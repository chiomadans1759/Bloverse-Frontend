import { mount, RouterLinkStub } from '@vue/test-utils';
import PublishPage from '@/views/journalists/Publish/PublishPage.vue';

describe('PublishPage Component', () => {
  it('should render correctly', () => {

    const wrapper = mount(PublishPage);

    expect(wrapper.element).toMatchSnapshot();
  });
  it('should render correctly', () => {
    
    const wrapper = mount(PublishPage, {
      stubs: 
      { RouterLink: RouterLinkStub }
    });
    wrapper.find('.show').trigger('click');

    expect(wrapper.vm.textArea).toBe(true);
  });

  it('should display `showMe`', () => {
    const wrapper = mount(PublishPage, {
      stubs: 
      { RouterLink: RouterLinkStub }
    });
    wrapper.find('.text').trigger('click');

    expect(wrapper.vm.showMe).toBe(false);
  });

  it('should display `showThis`', () => {
    const wrapper = mount(PublishPage, {
      stubs: 
      { RouterLink: RouterLinkStub }
    });
    wrapper.find('.btn').trigger('input');
    wrapper.find('.nav-link').trigger('input');

    expect(wrapper.vm.showThis).toBe(false);
  })
})
