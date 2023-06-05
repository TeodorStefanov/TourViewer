export interface Hotspot {
  id: string;
  name: string;
  assets: Assets;
  risk_status: string;
  floor_id: string;
  hotspot_id: string;
  meta: Meta;
  taken_on: number;
  marker_token: string;
  attached_to: null;
}
export interface Assets {
  thumbnail: string;
  standard: string;
  hd: string;
}
export interface Meta {
  type: string;
  config: Config;
}
export interface Config {
  opening_view_latitude: number;
  opening_view_longitude: number;
  heading: number;
  pitch: number;
  roll: number;
}
