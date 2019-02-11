import { mount, RouterLinkStub } from '@vue/test-utils';
import Drafts from '../../../views/journalists/Drafts/DraftsPage.vue';

describe('Drafts Component', () => {
  global.hideTawkBot = jest.fn();
  it('should render correctly', () => {
    const wrapper = mount(Drafts, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
