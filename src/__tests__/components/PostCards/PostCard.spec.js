import { mount, RouterLinkStub  } from '@vue/test-utils'
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

  it('should toggle keypoints', () => {
    const toggleKeypointsStub = jest.fn();

    const wrapper = mount(PostCard, {
      stubs: { RouterLink: RouterLinkStub },
    });


    wrapper.setMethods({ toggleKeypoints: toggleKeypointsStub });
    wrapper.findAll('.toggle-keypoints').at(1).trigger('click');

    expect(wrapper.vm.toggleKeypoints).toHaveBeenCalled();
  })

  it('should show keypoints', () => {
    const wrapper = mount(PostCard, {
      stubs: { RouterLink: RouterLinkStub },
    });


    wrapper.findAll('.toggle-keypoints').at(1).trigger('click');

    expect(wrapper.vm.showKeypoints).toBe(true);
  });

  it('should toggle like button', () => {
    const wrapper = mount(PostCard, {
      stubs: { RouterLink: RouterLinkStub },
    });


    wrapper.findAll('.thumbs-up').at(0).trigger('click');

    expect(wrapper.vm.likePost).toBe(true);
    expect(wrapper.vm.dislikePost).toBe(false);
  });

  it('should toggle dislike button', () => {
    const wrapper = mount(PostCard, {
      stubs: { RouterLink: RouterLinkStub },
    });


    wrapper.findAll('.thumbs-down').at(0).trigger('click');

    expect(wrapper.vm.likePost).toBe(false);
    expect(wrapper.vm.dislikePost).toBe(true);
  });
});
