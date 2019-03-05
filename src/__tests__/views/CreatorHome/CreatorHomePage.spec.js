import { mount, RouterLinkStub  } from '@vue/test-utils'
import CreatorHomePage from '@/views/journalists/CreatorHome/CreatorHomePage.vue';

describe('Creator Home Page', () => {
  let wrapper = mount(CreatorHomePage, {
    stubs: {
      RouterLink: RouterLinkStub
    },
  });

  it('should render correctly', () => {
    expect(wrapper.find(RouterLinkStub).props().to).toBe('/')
    expect(wrapper.element).toMatchSnapshot();
  });

  describe('Computed', () => {
    it('should get all images', (done) => {

      expect(wrapper.vm.getImages).toHaveLength(20);
      done();
    });

    it('should set the top section style', () => {

      expect(wrapper.vm.topSectionStyle.opacity).toBe(1);
      wrapper.setData({playing: true});
      expect(wrapper.vm.topSectionStyle.opacity).toBe(0.4);
    });
  });

  it('should play the video', () => {
    const playStub = jest.spyOn(window.HTMLMediaElement.prototype, 'play').mockImplementation(() => {});
    wrapper.setData({playing: false});
    wrapper.find('.video-button').trigger('click');

    expect(wrapper.vm.playing).toBeTruthy();
    expect(wrapper.vm.paused).toBeFalsy();
    expect(playStub).toHaveBeenCalled();
    playStub.mockRestore();
  });

  it('should close the video', () => {
    const pauseStub = jest.spyOn(window.HTMLMediaElement.prototype, 'pause').mockImplementation(() => {});
    wrapper.find('.creator-video').trigger('blur');

    expect(wrapper.vm.playing).toBeFalsy();
    expect(wrapper.vm.paused).toBeTruthy();
    expect(pauseStub).toHaveBeenCalled();
    pauseStub.mockRestore();
  });

});
