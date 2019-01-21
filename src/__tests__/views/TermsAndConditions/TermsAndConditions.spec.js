import { mount, RouterLinkStub } from '@vue/test-utils';
import TermsAndConditions from '../../../views/general/TermsAndConditions/TermsAndConditionsPage.vue';

describe('Terms And Conditions', () => {
  it('should render correctly', () => {
    const wrapper = mount(TermsAndConditions, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    });

    expect(wrapper.element).toMatchSnapshot();
  })
})
