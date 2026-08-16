import type { Schema, Struct } from '@strapi/strapi';

export interface PageFaq extends Struct.ComponentSchema {
  collectionName: 'components_page_faqs';
  info: {
    description: 'Satu pertanyaan umum';
    displayName: 'FAQ';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PageMilestone extends Struct.ComponentSchema {
  collectionName: 'components_page_milestones';
  info: {
    description: 'Satu tonggak perjalanan';
    displayName: 'Milestone';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    year: Schema.Attribute.String;
  };
}

export interface PagePack extends Struct.ComponentSchema {
  collectionName: 'components_page_packs';
  info: {
    description: 'Satu opsi kemasan';
    displayName: 'Packaging';
  };
  attributes: {
    body: Schema.Attribute.Text;
    image: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PageRegion extends Struct.ComponentSchema {
  collectionName: 'components_page_regions';
  info: {
    description: 'Satu origin kopi';
    displayName: 'Region';
  };
  attributes: {
    island: Schema.Attribute.String;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PageStep extends Struct.ComponentSchema {
  collectionName: 'components_page_steps';
  info: {
    description: 'Satu langkah proses pemesanan';
    displayName: 'Step';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PageTerm extends Struct.ComponentSchema {
  collectionName: 'components_page_terms';
  info: {
    description: 'Satu baris ketentuan dagang';
    displayName: 'Term';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    note: Schema.Attribute.Text;
    val: Schema.Attribute.String;
  };
}

export interface PageValue extends Struct.ComponentSchema {
  collectionName: 'components_page_values';
  info: {
    description: 'Satu kartu nilai';
    displayName: 'Value';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'page.faq': PageFaq;
      'page.milestone': PageMilestone;
      'page.pack': PagePack;
      'page.region': PageRegion;
      'page.step': PageStep;
      'page.term': PageTerm;
      'page.value': PageValue;
    }
  }
}
