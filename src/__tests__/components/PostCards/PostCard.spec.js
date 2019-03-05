import { mount, RouterLinkStub } from '@vue/test-utils'
import PostCard from '@/components/PostCards/PostCard.vue';

describe('PostCard Component', () => {
  it('should render correctly', () => {

    const wrapper = mount(PostCard, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    });

    expect(wrapper.element).toMatchSnapshot();
  });

  it('should toggle like button', () => {
    const wrapper = mount(PostCard, {
      stubs: { RouterLink: RouterLinkStub },
    });


    wrapper.findAll('.thumbs-up-icon').at(0).trigger('click');

    expect(wrapper.vm.likePost).toBe(true);
    expect(wrapper.vm.dislikePost).toBe(false);
  });

  it('should toggle dislike button', () => {
    const wrapper = mount(PostCard, {
      stubs: { RouterLink: RouterLinkStub },
    });


    wrapper.findAll('.thumbs-down-icon').at(0).trigger('click');

    expect(wrapper.vm.likePost).toBe(false);
    expect(wrapper.vm.dislikePost).toBe(true);
  });

  it('should toggle bookmark icon', () => {
    const wrapper = mount(PostCard, {
      stubs: { RouterLink: RouterLinkStub },
    });


    wrapper.findAll('.bookmark').at(1).trigger('click');

    expect(wrapper.vm.bookmarked).toBe(true);
  });

  it('should toggle share icon', () => {
    const wrapper = mount(PostCard, {
      stubs: { RouterLink: RouterLinkStub },
    });


    wrapper.findAll('.share-icon').at(0).trigger('click');

    expect(wrapper.vm.share).toBe(true);
  });

  it('should change the arrow position of the dropdown', () => {
    const wrapper = mount(PostCard, {
      stubs: { RouterLink: RouterLinkStub },
    });

    wrapper.findAll('.dropdown-toggle').at(0).trigger('click');

    expect(wrapper.vm.dropdownArrowDown).toBe(false);
  });

  it('sets the correct default data', () => {
    expect(typeof PostCard.data).toBe('function')
    const defaultData = PostCard.data()
    expect(defaultData.likePost).toBe(false);
    expect(defaultData.dislikePost).toBe(false);
    expect(defaultData.readStory).toBe(false);
  });
});