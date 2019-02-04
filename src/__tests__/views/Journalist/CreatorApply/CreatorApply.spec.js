import { mount, RouterLinkStub } from '@vue/test-utils';
import SignUp from '../../../../views/journalists/CreatorApply/CreatorApplyPage.vue';

describe('Creator Apply Component', () => {
  it('should render correctly', () => {
    const wrapper = mount(SignUp, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it('should add a field', () => {
    const wrapper = mount(SignUp, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    });
    wrapper.find('#add-article').trigger('click');

    expect((wrapper.vm.articleInputs).length).toBe(1);
  });

  it('should delete a field', () => {
    const wrapper = mount(SignUp, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    });
    wrapper.find('#add-article').trigger('click');
    wrapper.find('.delete-field').trigger('click');

    expect((wrapper.vm.articleInputs).length).toBe(0);
  })
});
