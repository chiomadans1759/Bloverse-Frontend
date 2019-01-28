import { mount, RouterLinkStub } from '@vue/test-utils';
import CountryCard from '@/components/CountryCard/CountryCard.vue';

describe('CountryCard Component', () => {
  it('should render correctly', () => {

    const wrapper = mount(CountryCard, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
