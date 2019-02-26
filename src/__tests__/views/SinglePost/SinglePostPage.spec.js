import { mount, RouterLinkStub } from '@vue/test-utils'
import SinglePost from '@/views/general/SinglePost/SinglePostPage.vue';

describe('SinglePost Page', () => {
  it('should render correctly', () => {

    const wrapper = mount(SinglePost, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    });
    expect(wrapper.find(RouterLinkStub).props().to).toBe('/posts/rere')
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

  it('has a created hook', () => {
    const removeStickyActions = jest.fn();
    const realRemoveStickyActions = SinglePost.methods.removeStickyActions;
    SinglePost.methods.removeStickyActions = removeStickyActions;

    mount(SinglePost, {
      stubs: { RouterLink: RouterLinkStub },
    });

    global.onscroll();

    expect(typeof SinglePost.created).toBe('function');
    expect(removeStickyActions).toBeCalled();
    removeStickyActions.mockRestore();

    SinglePost.methods.removeStickyActions = realRemoveStickyActions;
  });

  it('should call remove sticky action', () => {
    const wrapper = mount(SinglePost, {
      stubs: { RouterLink: RouterLinkStub },
    });

    wrapper.vm.$refs.postContent = {
      getClientRects() {
        return [{
          bottom: 0
        }]
      }
    }
    const postContentFooter = {
      setAttribute: jest.fn()
    }
    global.document.getElementById = jest.fn(() => postContentFooter);
    
    wrapper.vm.removeStickyActions();

    expect(postContentFooter.setAttribute).toBeCalledWith("style", "position:absolute");
  });

  it('should call add sticky action', () => {
    const wrapper = mount(SinglePost, {
      stubs: { RouterLink: RouterLinkStub },
    });

    wrapper.vm.$refs.postContent = {
      getClientRects() {
        return [{
          bottom: 10
        }]
      }
    }
    const postContentFooter = {
      setAttribute: jest.fn()
    }
    global.document.getElementById = jest.fn(() => postContentFooter);
    wrapper.vm.removeStickyActions();

    expect(postContentFooter.setAttribute).toBeCalledWith("style", "position:fixed");
  });

  it('should toggle comment section', () => {
    const wrapper = mount(SinglePost, {
      stubs: { RouterLink: RouterLinkStub },
    });


    wrapper.findAll('.comment').at(0).trigger('click');

    expect(wrapper.vm.addComment).toBe(true);
  });

  it('should add emoji', () => {
    const addEmoji = jest.spyOn(SinglePost.methods, "addEmoji");
    const wrapper = mount(SinglePost, {
      stubs: { RouterLink: RouterLinkStub },
    });

    wrapper.findAll('.comment-box__emoji').at(0).trigger('click');
    expect(addEmoji).toBeCalledWith("1F621");
  });

  describe('Computed', () => {
    it('should get emoji', (done) => {
      const wrapper = mount(SinglePost, {
        stubs: { RouterLink: RouterLinkStub },
      });

      expect(wrapper.vm.getEmoji).toHaveLength(9);
      done();
    })
  })
});
