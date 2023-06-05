export interface Tour {
  id: string;
  name: string;
  description: string;
  options: Options;
  shareable: boolean;
  opening_view: OpeningView;
  structure: Structure[];
  property_name: string;
  heartbeat: boolean;
}
export interface Options {
  hd: boolean;
  force_opening_view: boolean;
  show_info_popup: boolean;
  clustering: boolean;
  show_date_taken: boolean;
}
export interface OpeningView {
  floor_id: string;
  hotspot_id: string;
  photo_id: null;
}
export interface Structure {
  id: string;
  name: string;
  floor_plan: string;
  hotspots: Hotspot[];
}
export interface Hotspot {
  id: string;
  floor_id: string;
  name: string;
  position: Position;
}
export interface Position {
  x: number;
  y: number;
}
