import { mount } from '@vue/test-utils';
import Modal from '@/components/Modal/Modal.vue';

describe('Modal component', () => {
  it('should render properly', () => {
    const wrapper =  mount(Modal, {
      propsData: {
        target: 'target',
        modalTop: false,
      }
    });

    expect(wrapper.element).toMatchSnapshot();
  });

  it('should render intial modal', () => {
    const wrapper =  mount(Modal, {
      propsData: {
        title: 'Modal Title',
        hideFooter: false,
        actionText: 'Save changes',
        closeText: 'Close',
        target: 'target',
        modalTop: true,
      }
    });

    expect(wrapper.props().title).toBe('Modal Title');
    expect(wrapper.props().hideFooter).toBeFalsy();
    expect(wrapper.props().actionText).toBe('Save changes');
    expect(wrapper.props().closeText).toBe('Close');
    expect(wrapper.props().target).toBe('target');
    expect(wrapper.props().modalTop).toBeTruthy();
  })
});
