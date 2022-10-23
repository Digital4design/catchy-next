/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PrimaryPageBySlug
// ====================================================

export interface PrimaryPageBySlug_primaryPage_blocks_ServicePanelSetRecord {
  readonly __typename: "ServicePanelSetRecord";
}

export interface PrimaryPageBySlug_primaryPage_blocks_AgencyModelRecord_columns_image_responsiveImage {
  readonly __typename: "ResponsiveImage";
  readonly aspectRatio: any;
  readonly height: any;
  readonly width: any;
  readonly sizes: string;
  readonly src: string;
  readonly srcSet: string;
  readonly alt: string | null;
  readonly title: string | null;
  readonly base64: string | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_AgencyModelRecord_columns_image {
  readonly __typename: "FileField";
  readonly responsiveImage: PrimaryPageBySlug_primaryPage_blocks_AgencyModelRecord_columns_image_responsiveImage | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_AgencyModelRecord_columns_services {
  readonly __typename: "ServiceRecord";
  readonly id: any;
  readonly title: string | null;
  readonly text: string | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_AgencyModelRecord_columns {
  readonly __typename: "AgencyColumnRecord";
  readonly id: any;
  readonly image: PrimaryPageBySlug_primaryPage_blocks_AgencyModelRecord_columns_image | null;
  readonly title: string | null;
  readonly services: ReadonlyArray<PrimaryPageBySlug_primaryPage_blocks_AgencyModelRecord_columns_services>;
}

export interface PrimaryPageBySlug_primaryPage_blocks_AgencyModelRecord {
  readonly __typename: "AgencyModelRecord";
  readonly id: any;
  readonly text: string | null;
  readonly title: string | null;
  readonly columns: ReadonlyArray<PrimaryPageBySlug_primaryPage_blocks_AgencyModelRecord_columns>;
}

export interface PrimaryPageBySlug_primaryPage_blocks_BannerRecord_foregroundImage_responsiveImage {
  readonly __typename: "ResponsiveImage";
  readonly aspectRatio: any;
  readonly height: any;
  readonly width: any;
  readonly sizes: string;
  readonly src: string;
  readonly srcSet: string;
  readonly alt: string | null;
  readonly title: string | null;
  readonly base64: string | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_BannerRecord_foregroundImage {
  readonly __typename: "FileField";
  readonly responsiveImage: PrimaryPageBySlug_primaryPage_blocks_BannerRecord_foregroundImage_responsiveImage | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_BannerRecord_backgroundImage_responsiveImage {
  readonly __typename: "ResponsiveImage";
  readonly aspectRatio: any;
  readonly height: any;
  readonly width: any;
  readonly sizes: string;
  readonly src: string;
  readonly srcSet: string;
  readonly alt: string | null;
  readonly title: string | null;
  readonly base64: string | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_BannerRecord_backgroundImage {
  readonly __typename: "FileField";
  readonly responsiveImage: PrimaryPageBySlug_primaryPage_blocks_BannerRecord_backgroundImage_responsiveImage | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_BannerRecord {
  readonly __typename: "BannerRecord";
  readonly id: any;
  readonly titleOverline: string | null;
  readonly title: string | null;
  readonly addGreenLine: any | null;
  readonly subTitle: string | null;
  readonly text: string | null;
  readonly foregroundImage: PrimaryPageBySlug_primaryPage_blocks_BannerRecord_foregroundImage | null;
  readonly backgroundImage: PrimaryPageBySlug_primaryPage_blocks_BannerRecord_backgroundImage | null;
  readonly showContactButton: any | null;
  readonly contactButtonLabel: string | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ButtonExternalRecord {
  readonly __typename: "ButtonExternalRecord";
  readonly id: any;
  readonly label: string | null;
  readonly url: string | null;
  readonly align: string | null;
  readonly openInNewTab: any | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ButtonInternalRecord_link_ContentPageRecord {
  readonly __typename: "ContentPageRecord";
  readonly slug: string | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ButtonInternalRecord_link_BlogPostRecord {
  readonly __typename: "BlogPostRecord";
  readonly slug: string | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ButtonInternalRecord_link_PrimaryPageRecord {
  readonly __typename: "PrimaryPageRecord";
  readonly slug: string | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ButtonInternalRecord_link_DownloadPageRecord {
  readonly __typename: "DownloadPageRecord";
  readonly slug: string | null;
}

export type PrimaryPageBySlug_primaryPage_blocks_ButtonInternalRecord_link = PrimaryPageBySlug_primaryPage_blocks_ButtonInternalRecord_link_ContentPageRecord | PrimaryPageBySlug_primaryPage_blocks_ButtonInternalRecord_link_BlogPostRecord | PrimaryPageBySlug_primaryPage_blocks_ButtonInternalRecord_link_PrimaryPageRecord | PrimaryPageBySlug_primaryPage_blocks_ButtonInternalRecord_link_DownloadPageRecord;

export interface PrimaryPageBySlug_primaryPage_blocks_ButtonInternalRecord {
  readonly __typename: "ButtonInternalRecord";
  readonly id: any;
  readonly label: string | null;
  readonly link: PrimaryPageBySlug_primaryPage_blocks_ButtonInternalRecord_link | null;
  readonly align: string | null;
  readonly openInNewTab: any | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ClientSetRecord_clientSet_logo_responsiveImage {
  readonly __typename: "ResponsiveImage";
  readonly aspectRatio: any;
  readonly height: any;
  readonly width: any;
  readonly sizes: string;
  readonly src: string;
  readonly srcSet: string;
  readonly alt: string | null;
  readonly title: string | null;
  readonly base64: string | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ClientSetRecord_clientSet_logo {
  readonly __typename: "FileField";
  readonly responsiveImage: PrimaryPageBySlug_primaryPage_blocks_ClientSetRecord_clientSet_logo_responsiveImage | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ClientSetRecord_clientSet {
  readonly __typename: "ClientRecord";
  readonly id: any;
  readonly name: string | null;
  readonly logo: PrimaryPageBySlug_primaryPage_blocks_ClientSetRecord_clientSet_logo | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ClientSetRecord {
  readonly __typename: "ClientSetRecord";
  readonly id: any;
  readonly clientSet: ReadonlyArray<PrimaryPageBySlug_primaryPage_blocks_ClientSetRecord_clientSet>;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_PrimaryPageRecord_previewImage_responsiveImage {
  readonly __typename: "ResponsiveImage";
  readonly aspectRatio: any;
  readonly height: any;
  readonly width: any;
  readonly sizes: string;
  readonly src: string;
  readonly srcSet: string;
  readonly alt: string | null;
  readonly title: string | null;
  readonly base64: string | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_PrimaryPageRecord_previewImage {
  readonly __typename: "FileField";
  readonly responsiveImage: PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_PrimaryPageRecord_previewImage_responsiveImage | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_PrimaryPageRecord_previewImageLg_responsiveImage {
  readonly __typename: "ResponsiveImage";
  readonly aspectRatio: any;
  readonly height: any;
  readonly width: any;
  readonly sizes: string;
  readonly src: string;
  readonly srcSet: string;
  readonly alt: string | null;
  readonly title: string | null;
  readonly base64: string | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_PrimaryPageRecord_previewImageLg {
  readonly __typename: "FileField";
  readonly responsiveImage: PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_PrimaryPageRecord_previewImageLg_responsiveImage | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_PrimaryPageRecord_previewImageSm_responsiveImage {
  readonly __typename: "ResponsiveImage";
  readonly aspectRatio: any;
  readonly height: any;
  readonly width: any;
  readonly sizes: string;
  readonly src: string;
  readonly srcSet: string;
  readonly alt: string | null;
  readonly title: string | null;
  readonly base64: string | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_PrimaryPageRecord_previewImageSm {
  readonly __typename: "FileField";
  readonly responsiveImage: PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_PrimaryPageRecord_previewImageSm_responsiveImage | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_PrimaryPageRecord_previewImageCol_responsiveImage {
  readonly __typename: "ResponsiveImage";
  readonly aspectRatio: any;
  readonly height: any;
  readonly width: any;
  readonly sizes: string;
  readonly src: string;
  readonly srcSet: string;
  readonly alt: string | null;
  readonly title: string | null;
  readonly base64: string | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_PrimaryPageRecord_previewImageCol {
  readonly __typename: "FileField";
  readonly responsiveImage: PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_PrimaryPageRecord_previewImageCol_responsiveImage | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_PrimaryPageRecord {
  readonly __typename: "PrimaryPageRecord";
  readonly id: any;
  readonly slug: string | null;
  readonly title: string | null;
  readonly description: string | null;
  readonly previewImage: PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_PrimaryPageRecord_previewImage | null;
  readonly previewImageLg: PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_PrimaryPageRecord_previewImageLg | null;
  readonly previewImageSm: PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_PrimaryPageRecord_previewImageSm | null;
  readonly previewImageCol: PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_PrimaryPageRecord_previewImageCol | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_BlogPostRecord_previewImage_responsiveImage {
  readonly __typename: "ResponsiveImage";
  readonly aspectRatio: any;
  readonly height: any;
  readonly width: any;
  readonly sizes: string;
  readonly src: string;
  readonly srcSet: string;
  readonly alt: string | null;
  readonly title: string | null;
  readonly base64: string | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_BlogPostRecord_previewImage {
  readonly __typename: "FileField";
  readonly responsiveImage: PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_BlogPostRecord_previewImage_responsiveImage | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_BlogPostRecord_previewImageLg_responsiveImage {
  readonly __typename: "ResponsiveImage";
  readonly aspectRatio: any;
  readonly height: any;
  readonly width: any;
  readonly sizes: string;
  readonly src: string;
  readonly srcSet: string;
  readonly alt: string | null;
  readonly title: string | null;
  readonly base64: string | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_BlogPostRecord_previewImageLg {
  readonly __typename: "FileField";
  readonly responsiveImage: PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_BlogPostRecord_previewImageLg_responsiveImage | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_BlogPostRecord_previewImageSm_responsiveImage {
  readonly __typename: "ResponsiveImage";
  readonly aspectRatio: any;
  readonly height: any;
  readonly width: any;
  readonly sizes: string;
  readonly src: string;
  readonly srcSet: string;
  readonly alt: string | null;
  readonly title: string | null;
  readonly base64: string | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_BlogPostRecord_previewImageSm {
  readonly __typename: "FileField";
  readonly responsiveImage: PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_BlogPostRecord_previewImageSm_responsiveImage | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_BlogPostRecord_previewImageCol_responsiveImage {
  readonly __typename: "ResponsiveImage";
  readonly aspectRatio: any;
  readonly height: any;
  readonly width: any;
  readonly sizes: string;
  readonly src: string;
  readonly srcSet: string;
  readonly alt: string | null;
  readonly title: string | null;
  readonly base64: string | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_BlogPostRecord_previewImageCol {
  readonly __typename: "FileField";
  readonly responsiveImage: PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_BlogPostRecord_previewImageCol_responsiveImage | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_BlogPostRecord {
  readonly __typename: "BlogPostRecord";
  readonly id: any;
  readonly slug: string | null;
  readonly title: string | null;
  readonly description: string | null;
  readonly previewImage: PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_BlogPostRecord_previewImage | null;
  readonly previewImageLg: PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_BlogPostRecord_previewImageLg | null;
  readonly previewImageSm: PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_BlogPostRecord_previewImageSm | null;
  readonly previewImageCol: PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_BlogPostRecord_previewImageCol | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_ContentPageRecord_previewImage_responsiveImage {
  readonly __typename: "ResponsiveImage";
  readonly aspectRatio: any;
  readonly height: any;
  readonly width: any;
  readonly sizes: string;
  readonly src: string;
  readonly srcSet: string;
  readonly alt: string | null;
  readonly title: string | null;
  readonly base64: string | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_ContentPageRecord_previewImage {
  readonly __typename: "FileField";
  readonly responsiveImage: PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_ContentPageRecord_previewImage_responsiveImage | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_ContentPageRecord_previewImageLg_responsiveImage {
  readonly __typename: "ResponsiveImage";
  readonly aspectRatio: any;
  readonly height: any;
  readonly width: any;
  readonly sizes: string;
  readonly src: string;
  readonly srcSet: string;
  readonly alt: string | null;
  readonly title: string | null;
  readonly base64: string | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_ContentPageRecord_previewImageLg {
  readonly __typename: "FileField";
  readonly responsiveImage: PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_ContentPageRecord_previewImageLg_responsiveImage | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_ContentPageRecord_previewImageSm_responsiveImage {
  readonly __typename: "ResponsiveImage";
  readonly aspectRatio: any;
  readonly height: any;
  readonly width: any;
  readonly sizes: string;
  readonly src: string;
  readonly srcSet: string;
  readonly alt: string | null;
  readonly title: string | null;
  readonly base64: string | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_ContentPageRecord_previewImageSm {
  readonly __typename: "FileField";
  readonly responsiveImage: PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_ContentPageRecord_previewImageSm_responsiveImage | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_ContentPageRecord_previewImageCol_responsiveImage {
  readonly __typename: "ResponsiveImage";
  readonly aspectRatio: any;
  readonly height: any;
  readonly width: any;
  readonly sizes: string;
  readonly src: string;
  readonly srcSet: string;
  readonly alt: string | null;
  readonly title: string | null;
  readonly base64: string | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_ContentPageRecord_previewImageCol {
  readonly __typename: "FileField";
  readonly responsiveImage: PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_ContentPageRecord_previewImageCol_responsiveImage | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_ContentPageRecord {
  readonly __typename: "ContentPageRecord";
  readonly id: any;
  readonly slug: string | null;
  readonly title: string | null;
  readonly description: string | null;
  readonly previewImage: PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_ContentPageRecord_previewImage | null;
  readonly previewImageLg: PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_ContentPageRecord_previewImageLg | null;
  readonly previewImageSm: PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_ContentPageRecord_previewImageSm | null;
  readonly previewImageCol: PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_ContentPageRecord_previewImageCol | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_DownloadPageRecord_previewImage_responsiveImage {
  readonly __typename: "ResponsiveImage";
  readonly aspectRatio: any;
  readonly height: any;
  readonly width: any;
  readonly sizes: string;
  readonly src: string;
  readonly srcSet: string;
  readonly alt: string | null;
  readonly title: string | null;
  readonly base64: string | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_DownloadPageRecord_previewImage {
  readonly __typename: "FileField";
  readonly responsiveImage: PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_DownloadPageRecord_previewImage_responsiveImage | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_DownloadPageRecord_previewImageLg_responsiveImage {
  readonly __typename: "ResponsiveImage";
  readonly aspectRatio: any;
  readonly height: any;
  readonly width: any;
  readonly sizes: string;
  readonly src: string;
  readonly srcSet: string;
  readonly alt: string | null;
  readonly title: string | null;
  readonly base64: string | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_DownloadPageRecord_previewImageLg {
  readonly __typename: "FileField";
  readonly responsiveImage: PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_DownloadPageRecord_previewImageLg_responsiveImage | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_DownloadPageRecord_previewImageSm_responsiveImage {
  readonly __typename: "ResponsiveImage";
  readonly aspectRatio: any;
  readonly height: any;
  readonly width: any;
  readonly sizes: string;
  readonly src: string;
  readonly srcSet: string;
  readonly alt: string | null;
  readonly title: string | null;
  readonly base64: string | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_DownloadPageRecord_previewImageSm {
  readonly __typename: "FileField";
  readonly responsiveImage: PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_DownloadPageRecord_previewImageSm_responsiveImage | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_DownloadPageRecord_previewImageCol_responsiveImage {
  readonly __typename: "ResponsiveImage";
  readonly aspectRatio: any;
  readonly height: any;
  readonly width: any;
  readonly sizes: string;
  readonly src: string;
  readonly srcSet: string;
  readonly alt: string | null;
  readonly title: string | null;
  readonly base64: string | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_DownloadPageRecord_previewImageCol {
  readonly __typename: "FileField";
  readonly responsiveImage: PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_DownloadPageRecord_previewImageCol_responsiveImage | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_DownloadPageRecord {
  readonly __typename: "DownloadPageRecord";
  readonly id: any;
  readonly slug: string | null;
  readonly title: string | null;
  readonly description: string | null;
  readonly previewImage: PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_DownloadPageRecord_previewImage | null;
  readonly previewImageLg: PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_DownloadPageRecord_previewImageLg | null;
  readonly previewImageSm: PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_DownloadPageRecord_previewImageSm | null;
  readonly previewImageCol: PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_DownloadPageRecord_previewImageCol | null;
}

export type PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links = PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_PrimaryPageRecord | PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_BlogPostRecord | PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_ContentPageRecord | PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_DownloadPageRecord;

export interface PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord {
  readonly __typename: "ContentLinkSetRecord";
  readonly id: any;
  readonly displaySize: string | null;
  readonly imageAlign: string | null;
  readonly callToActionLabel: string | null;
  readonly isSlider: any | null;
  readonly links: ReadonlyArray<PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links>;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ColumnRowRecord_columns_image_responsiveImage {
  readonly __typename: "ResponsiveImage";
  readonly aspectRatio: any;
  readonly height: any;
  readonly width: any;
  readonly sizes: string;
  readonly src: string;
  readonly srcSet: string;
  readonly alt: string | null;
  readonly title: string | null;
  readonly base64: string | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ColumnRowRecord_columns_image {
  readonly __typename: "FileField";
  readonly responsiveImage: PrimaryPageBySlug_primaryPage_blocks_ColumnRowRecord_columns_image_responsiveImage | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ColumnRowRecord_columns_blocks_AgencyModelRecord {
  readonly __typename: "AgencyModelRecord" | "ImageSetRecord";
}

export interface PrimaryPageBySlug_primaryPage_blocks_ColumnRowRecord_columns_blocks_ButtonExternalRecord {
  readonly __typename: "ButtonExternalRecord";
  readonly id: any;
  readonly label: string | null;
  readonly url: string | null;
  readonly align: string | null;
  readonly openInNewTab: any | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ColumnRowRecord_columns_blocks_ButtonInternalRecord_link_ContentPageRecord {
  readonly __typename: "ContentPageRecord";
  readonly slug: string | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ColumnRowRecord_columns_blocks_ButtonInternalRecord_link_BlogPostRecord {
  readonly __typename: "BlogPostRecord";
  readonly slug: string | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ColumnRowRecord_columns_blocks_ButtonInternalRecord_link_PrimaryPageRecord {
  readonly __typename: "PrimaryPageRecord";
  readonly slug: string | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ColumnRowRecord_columns_blocks_ButtonInternalRecord_link_DownloadPageRecord {
  readonly __typename: "DownloadPageRecord";
  readonly slug: string | null;
}

export type PrimaryPageBySlug_primaryPage_blocks_ColumnRowRecord_columns_blocks_ButtonInternalRecord_link = PrimaryPageBySlug_primaryPage_blocks_ColumnRowRecord_columns_blocks_ButtonInternalRecord_link_ContentPageRecord | PrimaryPageBySlug_primaryPage_blocks_ColumnRowRecord_columns_blocks_ButtonInternalRecord_link_BlogPostRecord | PrimaryPageBySlug_primaryPage_blocks_ColumnRowRecord_columns_blocks_ButtonInternalRecord_link_PrimaryPageRecord | PrimaryPageBySlug_primaryPage_blocks_ColumnRowRecord_columns_blocks_ButtonInternalRecord_link_DownloadPageRecord;

export interface PrimaryPageBySlug_primaryPage_blocks_ColumnRowRecord_columns_blocks_ButtonInternalRecord {
  readonly __typename: "ButtonInternalRecord";
  readonly id: any;
  readonly label: string | null;
  readonly link: PrimaryPageBySlug_primaryPage_blocks_ColumnRowRecord_columns_blocks_ButtonInternalRecord_link | null;
  readonly align: string | null;
  readonly openInNewTab: any | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ColumnRowRecord_columns_blocks_FormBlockRecord_form_formFields {
  readonly __typename: "FormFieldRecord";
  readonly id: any;
  readonly label: string | null;
  readonly fieldName: string | null;
  readonly fieldType: string | null;
  readonly required: any | null;
  readonly invisible: any | null;
  readonly grouped: any | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ColumnRowRecord_columns_blocks_FormBlockRecord_form {
  readonly __typename: "FormRecord";
  readonly title: string | null;
  readonly name: string | null;
  readonly action: string | null;
  readonly method: string | null;
  readonly formFields: ReadonlyArray<PrimaryPageBySlug_primaryPage_blocks_ColumnRowRecord_columns_blocks_FormBlockRecord_form_formFields>;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ColumnRowRecord_columns_blocks_FormBlockRecord {
  readonly __typename: "FormBlockRecord";
  readonly id: any;
  readonly form: PrimaryPageBySlug_primaryPage_blocks_ColumnRowRecord_columns_blocks_FormBlockRecord_form | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ColumnRowRecord_columns_blocks_RichTextRecord {
  readonly __typename: "RichTextRecord";
  readonly id: any;
  readonly richText: string | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ColumnRowRecord_columns_blocks_VideoRecord_video {
  readonly __typename: "VideoField";
  readonly height: any;
  readonly provider: string;
  readonly providerUid: string;
  readonly thumbnailUrl: string;
  readonly title: string;
  readonly url: string;
  readonly width: any;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ColumnRowRecord_columns_blocks_VideoRecord {
  readonly __typename: "VideoRecord";
  readonly id: any;
  readonly video: PrimaryPageBySlug_primaryPage_blocks_ColumnRowRecord_columns_blocks_VideoRecord_video | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ColumnRowRecord_columns_blocks_VideoInternalRecord_thumbnail_responsiveImage {
  readonly __typename: "ResponsiveImage";
  readonly aspectRatio: any;
  readonly height: any;
  readonly width: any;
  readonly sizes: string;
  readonly src: string;
  readonly srcSet: string;
  readonly alt: string | null;
  readonly title: string | null;
  readonly base64: string | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ColumnRowRecord_columns_blocks_VideoInternalRecord_thumbnail {
  readonly __typename: "FileField";
  readonly id: any;
  readonly title: string | null;
  readonly responsiveImage: PrimaryPageBySlug_primaryPage_blocks_ColumnRowRecord_columns_blocks_VideoInternalRecord_thumbnail_responsiveImage | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ColumnRowRecord_columns_blocks_VideoInternalRecord_video_video {
  readonly __typename: "UploadVideoField";
  readonly mp4Url: string | null;
  readonly streamingUrl: string;
  readonly thumbnailUrl: string;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ColumnRowRecord_columns_blocks_VideoInternalRecord_video {
  readonly __typename: "FileField";
  readonly height: any | null;
  readonly mimeType: string;
  readonly title: string | null;
  readonly video: PrimaryPageBySlug_primaryPage_blocks_ColumnRowRecord_columns_blocks_VideoInternalRecord_video_video | null;
  readonly width: any | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ColumnRowRecord_columns_blocks_VideoInternalRecord {
  readonly __typename: "VideoInternalRecord";
  readonly id: any;
  readonly thumbnail: PrimaryPageBySlug_primaryPage_blocks_ColumnRowRecord_columns_blocks_VideoInternalRecord_thumbnail | null;
  readonly video: PrimaryPageBySlug_primaryPage_blocks_ColumnRowRecord_columns_blocks_VideoInternalRecord_video | null;
}

export type PrimaryPageBySlug_primaryPage_blocks_ColumnRowRecord_columns_blocks = PrimaryPageBySlug_primaryPage_blocks_ColumnRowRecord_columns_blocks_AgencyModelRecord | PrimaryPageBySlug_primaryPage_blocks_ColumnRowRecord_columns_blocks_ButtonExternalRecord | PrimaryPageBySlug_primaryPage_blocks_ColumnRowRecord_columns_blocks_ButtonInternalRecord | PrimaryPageBySlug_primaryPage_blocks_ColumnRowRecord_columns_blocks_FormBlockRecord | PrimaryPageBySlug_primaryPage_blocks_ColumnRowRecord_columns_blocks_RichTextRecord | PrimaryPageBySlug_primaryPage_blocks_ColumnRowRecord_columns_blocks_VideoRecord | PrimaryPageBySlug_primaryPage_blocks_ColumnRowRecord_columns_blocks_VideoInternalRecord;

export interface PrimaryPageBySlug_primaryPage_blocks_ColumnRowRecord_columns {
  readonly __typename: "ColumnRecord";
  readonly id: any;
  readonly title: string | null;
  readonly image: PrimaryPageBySlug_primaryPage_blocks_ColumnRowRecord_columns_image | null;
  readonly text: string | null;
  readonly blocks: ReadonlyArray<PrimaryPageBySlug_primaryPage_blocks_ColumnRowRecord_columns_blocks>;
  readonly textAlign: string | null;
  readonly width: string | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ColumnRowRecord {
  readonly __typename: "ColumnRowRecord";
  readonly id: any;
  readonly columns: ReadonlyArray<PrimaryPageBySlug_primaryPage_blocks_ColumnRowRecord_columns>;
  readonly verticallyCenterAcrossColumns: any | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_FormBlockRecord_form_formFields {
  readonly __typename: "FormFieldRecord";
  readonly id: any;
  readonly label: string | null;
  readonly fieldName: string | null;
  readonly fieldType: string | null;
  readonly required: any | null;
  readonly invisible: any | null;
  readonly grouped: any | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_FormBlockRecord_form {
  readonly __typename: "FormRecord";
  readonly title: string | null;
  readonly name: string | null;
  readonly action: string | null;
  readonly method: string | null;
  readonly formFields: ReadonlyArray<PrimaryPageBySlug_primaryPage_blocks_FormBlockRecord_form_formFields>;
}

export interface PrimaryPageBySlug_primaryPage_blocks_FormBlockRecord {
  readonly __typename: "FormBlockRecord";
  readonly id: any;
  readonly form: PrimaryPageBySlug_primaryPage_blocks_FormBlockRecord_form | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_FormulaRecord_step1_responsiveImage {
  readonly __typename: "ResponsiveImage";
  readonly aspectRatio: any;
  readonly height: any;
  readonly width: any;
  readonly sizes: string;
  readonly src: string;
  readonly srcSet: string;
  readonly alt: string | null;
  readonly title: string | null;
  readonly base64: string | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_FormulaRecord_step1 {
  readonly __typename: "FileField";
  readonly id: any;
  readonly responsiveImage: PrimaryPageBySlug_primaryPage_blocks_FormulaRecord_step1_responsiveImage | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_FormulaRecord_step2_responsiveImage {
  readonly __typename: "ResponsiveImage";
  readonly aspectRatio: any;
  readonly height: any;
  readonly width: any;
  readonly sizes: string;
  readonly src: string;
  readonly srcSet: string;
  readonly alt: string | null;
  readonly title: string | null;
  readonly base64: string | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_FormulaRecord_step2 {
  readonly __typename: "FileField";
  readonly id: any;
  readonly responsiveImage: PrimaryPageBySlug_primaryPage_blocks_FormulaRecord_step2_responsiveImage | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_FormulaRecord_step3_responsiveImage {
  readonly __typename: "ResponsiveImage";
  readonly aspectRatio: any;
  readonly height: any;
  readonly width: any;
  readonly sizes: string;
  readonly src: string;
  readonly srcSet: string;
  readonly alt: string | null;
  readonly title: string | null;
  readonly base64: string | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_FormulaRecord_step3 {
  readonly __typename: "FileField";
  readonly id: any;
  readonly responsiveImage: PrimaryPageBySlug_primaryPage_blocks_FormulaRecord_step3_responsiveImage | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_FormulaRecord {
  readonly __typename: "FormulaRecord";
  readonly id: any;
  readonly step1: PrimaryPageBySlug_primaryPage_blocks_FormulaRecord_step1 | null;
  readonly step2: PrimaryPageBySlug_primaryPage_blocks_FormulaRecord_step2 | null;
  readonly step3: PrimaryPageBySlug_primaryPage_blocks_FormulaRecord_step3 | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ImageSetRecord_imageSet_responsiveImage {
  readonly __typename: "ResponsiveImage";
  readonly aspectRatio: any;
  readonly height: any;
  readonly width: any;
  readonly sizes: string;
  readonly src: string;
  readonly srcSet: string;
  readonly alt: string | null;
  readonly title: string | null;
  readonly base64: string | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ImageSetRecord_imageSet {
  readonly __typename: "FileField";
  readonly id: any;
  readonly responsiveImage: PrimaryPageBySlug_primaryPage_blocks_ImageSetRecord_imageSet_responsiveImage | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ImageSetRecord {
  readonly __typename: "ImageSetRecord";
  readonly id: any;
  readonly imageSet: ReadonlyArray<PrimaryPageBySlug_primaryPage_blocks_ImageSetRecord_imageSet>;
  readonly verticallyCenterAcrossImages: any | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_RichTextRecord {
  readonly __typename: "RichTextRecord";
  readonly id: any;
  readonly richText: string | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ServiceSetRecord_services_serviceImage_responsiveImage {
  readonly __typename: "ResponsiveImage";
  readonly aspectRatio: any;
  readonly height: any;
  readonly width: any;
  readonly sizes: string;
  readonly src: string;
  readonly srcSet: string;
  readonly alt: string | null;
  readonly title: string | null;
  readonly base64: string | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ServiceSetRecord_services_serviceImage {
  readonly __typename: "FileField";
  readonly responsiveImage: PrimaryPageBySlug_primaryPage_blocks_ServiceSetRecord_services_serviceImage_responsiveImage | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ServiceSetRecord_services {
  readonly __typename: "ServiceRecord";
  readonly id: any;
  readonly title: string | null;
  readonly text: string | null;
  readonly fontAwesomeIcon: string | null;
  readonly serviceImage: PrimaryPageBySlug_primaryPage_blocks_ServiceSetRecord_services_serviceImage | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ServiceSetRecord {
  readonly __typename: "ServiceSetRecord";
  readonly id: any;
  readonly hideTextContent: any | null;
  readonly textAlignment: string | null;
  readonly services: ReadonlyArray<PrimaryPageBySlug_primaryPage_blocks_ServiceSetRecord_services>;
}

export interface PrimaryPageBySlug_primaryPage_blocks_TeamRecord_members_image_responsiveImage {
  readonly __typename: "ResponsiveImage";
  readonly aspectRatio: any;
  readonly height: any;
  readonly width: any;
  readonly sizes: string;
  readonly src: string;
  readonly srcSet: string;
  readonly alt: string | null;
  readonly title: string | null;
  readonly base64: string | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_TeamRecord_members_image {
  readonly __typename: "FileField";
  readonly responsiveImage: PrimaryPageBySlug_primaryPage_blocks_TeamRecord_members_image_responsiveImage | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_TeamRecord_members {
  readonly __typename: "MemberRecord";
  readonly id: any;
  readonly name: string | null;
  readonly title: string | null;
  readonly image: PrimaryPageBySlug_primaryPage_blocks_TeamRecord_members_image | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_TeamRecord {
  readonly __typename: "TeamRecord";
  readonly id: any;
  readonly teamTitle: string | null;
  readonly members: ReadonlyArray<PrimaryPageBySlug_primaryPage_blocks_TeamRecord_members>;
}

export interface PrimaryPageBySlug_primaryPage_blocks_TitleTextRecord {
  readonly __typename: "TitleTextRecord";
  readonly id: any;
  readonly title: string | null;
  readonly text: string | null;
  readonly maxWidth: any | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_VideoRecord_video {
  readonly __typename: "VideoField";
  readonly height: any;
  readonly provider: string;
  readonly providerUid: string;
  readonly thumbnailUrl: string;
  readonly title: string;
  readonly url: string;
  readonly width: any;
}

export interface PrimaryPageBySlug_primaryPage_blocks_VideoRecord {
  readonly __typename: "VideoRecord";
  readonly id: any;
  readonly video: PrimaryPageBySlug_primaryPage_blocks_VideoRecord_video | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_VideoInternalRecord_thumbnail_responsiveImage {
  readonly __typename: "ResponsiveImage";
  readonly aspectRatio: any;
  readonly height: any;
  readonly width: any;
  readonly sizes: string;
  readonly src: string;
  readonly srcSet: string;
  readonly alt: string | null;
  readonly title: string | null;
  readonly base64: string | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_VideoInternalRecord_thumbnail {
  readonly __typename: "FileField";
  readonly id: any;
  readonly title: string | null;
  readonly responsiveImage: PrimaryPageBySlug_primaryPage_blocks_VideoInternalRecord_thumbnail_responsiveImage | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_VideoInternalRecord_video_video {
  readonly __typename: "UploadVideoField";
  readonly mp4Url: string | null;
  readonly streamingUrl: string;
  readonly thumbnailUrl: string;
}

export interface PrimaryPageBySlug_primaryPage_blocks_VideoInternalRecord_video {
  readonly __typename: "FileField";
  readonly height: any | null;
  readonly mimeType: string;
  readonly title: string | null;
  readonly video: PrimaryPageBySlug_primaryPage_blocks_VideoInternalRecord_video_video | null;
  readonly width: any | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_VideoInternalRecord {
  readonly __typename: "VideoInternalRecord";
  readonly id: any;
  readonly thumbnail: PrimaryPageBySlug_primaryPage_blocks_VideoInternalRecord_thumbnail | null;
  readonly video: PrimaryPageBySlug_primaryPage_blocks_VideoInternalRecord_video | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ViewMoreLinkRecord {
  readonly __typename: "ViewMoreLinkRecord";
  readonly id: any;
  readonly text: string | null;
  readonly url: string | null;
}

export type PrimaryPageBySlug_primaryPage_blocks = PrimaryPageBySlug_primaryPage_blocks_ServicePanelSetRecord | PrimaryPageBySlug_primaryPage_blocks_AgencyModelRecord | PrimaryPageBySlug_primaryPage_blocks_BannerRecord | PrimaryPageBySlug_primaryPage_blocks_ButtonExternalRecord | PrimaryPageBySlug_primaryPage_blocks_ButtonInternalRecord | PrimaryPageBySlug_primaryPage_blocks_ClientSetRecord | PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord | PrimaryPageBySlug_primaryPage_blocks_ColumnRowRecord | PrimaryPageBySlug_primaryPage_blocks_FormBlockRecord | PrimaryPageBySlug_primaryPage_blocks_FormulaRecord | PrimaryPageBySlug_primaryPage_blocks_ImageSetRecord | PrimaryPageBySlug_primaryPage_blocks_RichTextRecord | PrimaryPageBySlug_primaryPage_blocks_ServiceSetRecord | PrimaryPageBySlug_primaryPage_blocks_TeamRecord | PrimaryPageBySlug_primaryPage_blocks_TitleTextRecord | PrimaryPageBySlug_primaryPage_blocks_VideoRecord | PrimaryPageBySlug_primaryPage_blocks_VideoInternalRecord | PrimaryPageBySlug_primaryPage_blocks_ViewMoreLinkRecord;

export interface PrimaryPageBySlug_primaryPage__seoMetaTags {
  readonly __typename: "Tag";
  readonly attributes: any | null;
  readonly content: string | null;
  readonly tag: string;
}

export interface PrimaryPageBySlug_primaryPage {
  readonly __typename: "PrimaryPageRecord";
  readonly title: string | null;
  readonly showBreadcrumbs: any | null;
  readonly textAlign: string | null;
  readonly blocks: ReadonlyArray<PrimaryPageBySlug_primaryPage_blocks>;
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

export interface PrimaryPageBySlug_header_logo {
  readonly __typename: "FileField";
  readonly url: string;
  readonly title: string | null;
  readonly alt: string | null;
}

export interface PrimaryPageBySlug_header_links {
  readonly __typename: "PrimaryPageRecord";
  readonly id: any;
  readonly title: string | null;
  readonly slug: string | null;
}

export interface PrimaryPageBySlug_header {
  readonly __typename: "HeaderRecord";
  readonly logo: PrimaryPageBySlug_header_logo | null;
  readonly links: ReadonlyArray<PrimaryPageBySlug_header_links>;
  readonly contactLinkLabel: string | null;
}

export interface PrimaryPageBySlug_footer_footerLogo {
  readonly __typename: "FileField";
  readonly url: string;
  readonly title: string | null;
  readonly alt: string | null;
}

export interface PrimaryPageBySlug_footer_socialLinks {
  readonly __typename: "SocialLinkRecord";
  readonly id: any;
  readonly fontAwesomeIcon: string | null;
  readonly url: string | null;
}

export interface PrimaryPageBySlug_footer {
  readonly __typename: "FooterRecord";
  readonly title: string | null;
  readonly formTitle: string | null;
  readonly firstNameLabel: string | null;
  readonly lastNameLabel: string | null;
  readonly emailAddressLabel: string | null;
  readonly messageLabel: string | null;
  readonly destinationEmail: string | null;
  readonly contactText: string | null;
  readonly contactEmail: string | null;
  readonly directionsUrl: string | null;
  readonly footerLogo: PrimaryPageBySlug_footer_footerLogo | null;
  readonly socialLinks: ReadonlyArray<PrimaryPageBySlug_footer_socialLinks>;
  readonly richText: string | null;
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
  /**
   * Returns the single instance record
   */
  readonly header: PrimaryPageBySlug_header | null;
  /**
   * Returns the single instance record
   */
  readonly footer: PrimaryPageBySlug_footer | null;
}

export interface PrimaryPageBySlugVariables {
  readonly slug?: string | null;
}
