/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PrimaryPageBySlug
// ====================================================

export interface PrimaryPageBySlug_primaryPage_blocks_BannerRecord {
  readonly __typename: "BannerRecord";
  readonly id: any;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ClientSetRecord {
  readonly __typename: "ClientSetRecord";
  readonly id: any;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord {
  readonly __typename: "ContentLinkSetRecord";
  readonly id: any;
}

export interface PrimaryPageBySlug_primaryPage_blocks_FormulaRecord {
  readonly __typename: "FormulaRecord";
  readonly id: any;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ServiceSetRecord {
  readonly __typename: "ServiceSetRecord";
  readonly id: any;
}

export interface PrimaryPageBySlug_primaryPage_blocks_TeamRecord {
  readonly __typename: "TeamRecord";
  readonly id: any;
}

export interface PrimaryPageBySlug_primaryPage_blocks_TitleTextRecord {
  readonly __typename: "TitleTextRecord";
  readonly id: any;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ViewMoreLinkRecord {
  readonly __typename: "ViewMoreLinkRecord";
  readonly id: any;
}

export type PrimaryPageBySlug_primaryPage_blocks = PrimaryPageBySlug_primaryPage_blocks_BannerRecord | PrimaryPageBySlug_primaryPage_blocks_ClientSetRecord | PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord | PrimaryPageBySlug_primaryPage_blocks_FormulaRecord | PrimaryPageBySlug_primaryPage_blocks_ServiceSetRecord | PrimaryPageBySlug_primaryPage_blocks_TeamRecord | PrimaryPageBySlug_primaryPage_blocks_TitleTextRecord | PrimaryPageBySlug_primaryPage_blocks_ViewMoreLinkRecord;

export interface PrimaryPageBySlug_primaryPage__seoMetaTags {
  readonly __typename: "Tag";
  readonly attributes: any | null;
  readonly content: string | null;
  readonly tag: string;
}

export interface PrimaryPageBySlug_primaryPage {
  readonly __typename: "PrimaryPageRecord";
  readonly title: string | null;
  readonly blocks: ReadonlyArray<(PrimaryPageBySlug_primaryPage_blocks | null)> | null;
  readonly slug: string | null;
  /**
   * SEO meta tags
   */
  readonly _seoMetaTags: ReadonlyArray<PrimaryPageBySlug_primaryPage__seoMetaTags>;
}

export interface PrimaryPageBySlug_site_faviconMetaTags {
  readonly __typename: "Tag";
  readonly attributes: any | null;
  readonly content: string | null;
  readonly tag: string;
}

export interface PrimaryPageBySlug_site {
  readonly __typename: "Site";
  readonly faviconMetaTags: ReadonlyArray<PrimaryPageBySlug_site_faviconMetaTags>;
}

export interface PrimaryPageBySlug {
  /**
   * Returns a specific record
   */
  readonly primaryPage: PrimaryPageBySlug_primaryPage | null;
  /**
   * Returns the single instance record
   */
  readonly site: PrimaryPageBySlug_site;
}

export interface PrimaryPageBySlugVariables {
  readonly slug?: string | null;
}
