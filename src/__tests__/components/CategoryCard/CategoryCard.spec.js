import { mount, RouterLinkStub  } from '@vue/test-utils'
import CategoryCard from '@/components/CategoryCard/CategoryCard.vue';

describe('CategoryCard Component', () => {
  it('should render correctly', () => {

    const wrapper = mount(CategoryCard, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it('should render not show edit icon', () => {

    const wrapper = mount(CategoryCard, {
      stubs: {
        RouterLink: RouterLinkStub
      },
      propsData: {
        showEditIcon: false,
        showSubtitle: false,
        addPadding: false,
        title: 'Category'
      }
    });

    const editIcon = wrapper.findAll('.edit-icon');
    expect(editIcon.length).toEqual(0);
    expect(wrapper.props().addPadding).toBeFalsy();
    expect(wrapper.props().showEditIcon).toBeFalsy();
    expect(wrapper.props().showSubtitle).toBeFalsy();

  });
});
