import { mount, RouterLinkStub } from '@vue/test-utils'
import SinglePost from '@/views/general/SinglePost/SinglePostPage.vue';

describe('SinglePost Page', () => {
  it('should render correctly', () => {

    const wrapper = mount(SinglePost, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    });
    expect(wrapper.find(RouterLinkStub).props().to).toBe('/register')
    expect(wrapper.element).toMatchSnapshot();
  });

  it('should toggle like button', () => {
    const wrapper = mount(SinglePost, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    });

    wrapper.findAll('.thumbs-up').at(0).trigger('click');

    expect(wrapper.vm.likePost).toBe(true);
    expect(wrapper.vm.dislikePost).toBe(false);
  });

  it('should toggle dislike button', () => {
    const wrapper = mount(SinglePost, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    });

    wrapper.findAll('.thumbs-down').at(0).trigger('click');

    expect(wrapper.vm.likePost).toBe(false);
    expect(wrapper.vm.dislikePost).toBe(true);
  });

  it('should toggle the read later icon', () => {
    const wrapper = mount(SinglePost, {
      stubs: { RouterLink: RouterLinkStub },
    });


    wrapper.findAll('.toggle-bookmark').at(1).trigger('click');

    expect(wrapper.vm.addBookmark).toBe(true);
  });

  it('should toggle the read story icon', () => {
    const wrapper = mount(SinglePost, {
      stubs: { RouterLink: RouterLinkStub },
    });


    wrapper.findAll('.toggle-story').at(1).trigger('click');

    expect(wrapper.vm.readStory).toBe(true);
  });

  it('should change the arrow position of the dropdown', () => {
    const wrapper = mount(SinglePost, {
      stubs: { RouterLink: RouterLinkStub },
    });

    wrapper.findAll('.dropdown-toggle').at(0).trigger('click');

    expect(wrapper.vm.dropdownArrowDown).toBe(false);
  });
});
