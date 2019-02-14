import { mount } from '@vue/test-utils';
import EntitySection from '@/components/EntitySection/EntitySection.vue';

describe('EntitySection Component', () => {
  it('should render correctly', () => {
    const wrapper = mount(EntitySection);

    expect(wrapper.element).toMatchSnapshot();
  });
});
