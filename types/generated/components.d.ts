import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedTrustSlider extends Schema.Component {
  collectionName: 'components_shared_trust_sliders';
  info: {
    displayName: 'TrustSlider';
  };
  attributes: {
    header: Attribute.String;
    description: Attribute.Text;
    Trustimages: Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface SharedTimeSection extends Schema.Component {
  collectionName: 'components_shared_time_sections';
  info: {
    displayName: 'TimeSection';
  };
  attributes: {
    ValueName: Attribute.String;
    title: Attribute.String;
  };
}

export interface SharedTimeCourseSection extends Schema.Component {
  collectionName: 'components_shared_time_course_sections';
  info: {
    displayName: 'TimeCourseSection';
    description: '';
  };
  attributes: {
    CourseTime: Attribute.Component<'shared.time-section', true>;
    header: Attribute.String;
    description: Attribute.Text;
  };
}

export interface SharedTeamPopup extends Schema.Component {
  collectionName: 'components_shared_team_popups';
  info: {
    displayName: 'TeamPopup';
    description: '';
  };
  attributes: {
    Name: Attribute.String;
    Qualification: Attribute.String;
    Position: Attribute.Text;
    Photo: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    PhotoAlt: Attribute.String;
  };
}

export interface SharedTeamPopupSection extends Schema.Component {
  collectionName: 'components_shared_team_popup_sections';
  info: {
    displayName: 'TeamPopupSection';
    description: '';
  };
  attributes: {
    TeamPopupSection: Attribute.Component<'shared.team-popup', true>;
    header: Attribute.String;
    button: Attribute.Component<'gradient-button.gradientbutton'>;
  };
}

export interface SharedTagsSection extends Schema.Component {
  collectionName: 'components_shared_tags_sections';
  info: {
    displayName: 'TagsSection';
  };
  attributes: {
    ValueName: Attribute.String;
  };
}

export interface SharedSubCategory extends Schema.Component {
  collectionName: 'components_shared_sub_categories';
  info: {
    displayName: 'sub_category';
  };
  attributes: {
    sub_category: Attribute.String;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media<'images' | 'files' | 'videos'>;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    canonicalURL: Attribute.String;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedListSection extends Schema.Component {
  collectionName: 'components_shared_list_sections';
  info: {
    displayName: 'ListSection';
  };
  attributes: {
    ValueName: Attribute.Text;
  };
}

export interface SharedImageWithButtonSection extends Schema.Component {
  collectionName: 'components_shared_image_with_button_sections';
  info: {
    displayName: 'ImageWithButtonSection';
    description: '';
  };
  attributes: {
    header: Attribute.String & Attribute.Required;
    GradientButton: Attribute.Component<'gradient-button.gradientbutton', true>;
    ImageSection: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    ImageSectionUlt: Attribute.String;
    ImageSectionPosition: Attribute.Boolean;
    description: Attribute.Blocks & Attribute.Required;
  };
}

export interface SharedDropdownWithImage extends Schema.Component {
  collectionName: 'components_shared_dropdown_with_images';
  info: {
    displayName: 'DropdownWithImage';
    description: '';
  };
  attributes: {
    header: Attribute.String;
    DropDown: Attribute.Component<'shared.drop-down-section', true>;
  };
}

export interface SharedDropDownSection extends Schema.Component {
  collectionName: 'components_shared_drop_down_sections';
  info: {
    displayName: 'DropDownSection';
    description: '';
  };
  attributes: {
    header: Attribute.String;
    description: Attribute.Text;
    ImageForDrop: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    ImageAlt: Attribute.String;
  };
}

export interface SharedCoursesSection extends Schema.Component {
  collectionName: 'components_shared_courses_sections';
  info: {
    displayName: 'CoursesSection';
    description: '';
  };
  attributes: {
    Header: Attribute.String;
    LinkTo: Attribute.String;
    Courses: Attribute.Component<'shared.courses-dynamic-section', true>;
    button: Attribute.Component<'gradient-button.gradientbutton'>;
    description: Attribute.Text;
  };
}

export interface SharedCoursesDynamicSection extends Schema.Component {
  collectionName: 'components_shared_courses_dynamic_sections';
  info: {
    displayName: 'CoursesDynamicSection';
    description: '';
  };
  attributes: {
    header: Attribute.String;
    description: Attribute.Blocks;
    LinkTo: Attribute.String;
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    ImageAlt: Attribute.String;
  };
}

export interface SharedContentWithTwoSection extends Schema.Component {
  collectionName: 'components_shared_content_with_two_sections';
  info: {
    displayName: 'ContentWithTwoSection';
  };
  attributes: {
    header_left: Attribute.String;
    description_left: Attribute.Blocks;
    header_right: Attribute.String;
    description_right: Attribute.Blocks;
  };
}

export interface SharedContentWithTagsSection extends Schema.Component {
  collectionName: 'components_shared_content_with_tags_sections';
  info: {
    displayName: 'ContentWithTagsSection';
  };
  attributes: {
    header: Attribute.String;
    description: Attribute.Text;
    Tags: Attribute.Component<'shared.tags-section', true>;
  };
}

export interface SharedContentWithOneSection extends Schema.Component {
  collectionName: 'components_shared_content_with_one_sections';
  info: {
    displayName: 'ContentWithOneSection';
    description: '';
  };
  attributes: {
    header: Attribute.String;
    description: Attribute.Blocks;
    button: Attribute.Component<'gradient-button.gradientbutton'>;
  };
}

export interface SharedCategory extends Schema.Component {
  collectionName: 'components_shared_categories';
  info: {
    displayName: 'category';
  };
  attributes: {
    subCategories: Attribute.String;
    LinkTo: Attribute.String;
  };
}

export interface SharedCardWithListSection extends Schema.Component {
  collectionName: 'components_shared_card_with_list_sections';
  info: {
    displayName: 'CardWithListSection';
  };
  attributes: {
    header: Attribute.String;
    description: Attribute.Text;
    CardWithList: Attribute.Component<'shared.card-list', true>;
  };
}

export interface SharedCardSection extends Schema.Component {
  collectionName: 'components_shared_card_sections';
  info: {
    displayName: 'CardSection';
  };
  attributes: {
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    IconAlt: Attribute.String;
    header: Attribute.String;
    description: Attribute.Text;
  };
}

export interface SharedCardSectionWithIcon extends Schema.Component {
  collectionName: 'components_shared_card_section_with_icons';
  info: {
    displayName: 'CardSectionWithIcon';
    description: '';
  };
  attributes: {
    header: Attribute.String;
    HomeCardSection: Attribute.Component<'shared.card-section', true>;
    CardButton: Attribute.Component<'gradient-button.gradientbutton'>;
    description: Attribute.Text;
  };
}

export interface SharedCardList extends Schema.Component {
  collectionName: 'components_shared_card_lists';
  info: {
    displayName: 'CardList';
  };
  attributes: {
    header: Attribute.String;
    title: Attribute.String;
    ListSectionCard: Attribute.Component<'shared.list-section', true>;
  };
}

export interface GradientButtonGradientbutton extends Schema.Component {
  collectionName: 'components_gradient_button_gradientbuttons';
  info: {
    displayName: 'gradientbutton';
    description: '';
  };
  attributes: {
    ValueName: Attribute.String;
    LinkTo: Attribute.String;
    Variant: Attribute.String;
    position: Attribute.Boolean;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.trust-slider': SharedTrustSlider;
      'shared.time-section': SharedTimeSection;
      'shared.time-course-section': SharedTimeCourseSection;
      'shared.team-popup': SharedTeamPopup;
      'shared.team-popup-section': SharedTeamPopupSection;
      'shared.tags-section': SharedTagsSection;
      'shared.sub-category': SharedSubCategory;
      'shared.seo': SharedSeo;
      'shared.meta-social': SharedMetaSocial;
      'shared.list-section': SharedListSection;
      'shared.image-with-button-section': SharedImageWithButtonSection;
      'shared.dropdown-with-image': SharedDropdownWithImage;
      'shared.drop-down-section': SharedDropDownSection;
      'shared.courses-section': SharedCoursesSection;
      'shared.courses-dynamic-section': SharedCoursesDynamicSection;
      'shared.content-with-two-section': SharedContentWithTwoSection;
      'shared.content-with-tags-section': SharedContentWithTagsSection;
      'shared.content-with-one-section': SharedContentWithOneSection;
      'shared.category': SharedCategory;
      'shared.card-with-list-section': SharedCardWithListSection;
      'shared.card-section': SharedCardSection;
      'shared.card-section-with-icon': SharedCardSectionWithIcon;
      'shared.card-list': SharedCardList;
      'gradient-button.gradientbutton': GradientButtonGradientbutton;
    }
  }
}
