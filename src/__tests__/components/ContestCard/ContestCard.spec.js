import { mount } from '@vue/test-utils'
import ContestCardComponent from '@/components/ContestCard/ContestCard.vue';

describe('ContestCard Component', () => {
  it('should render correctly', () => {

    const wrapper = mount(ContestCardComponent, {});
    expect(wrapper.element).toMatchSnapshot();
  });
});
