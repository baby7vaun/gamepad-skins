
export interface User {
  name: string;
  avatarUrl: string;
}

export interface Project {
  id: string;
  title: string;
  artist: User;
  artworkUrl: string;
  likes: number;
  comments: number;
  forks: number;
  originalProjectId?: string;
}

export interface MasteringResult {
  eq_suggestions: string[];
  compression_settings: string[];
  stereo_imaging: string[];
  final_thoughts: string;
}

export enum MasteringStyle {
  BASS_BOOST = "Bass Boost",
  VOCAL_CLARITY = "Vocal Clarity",
  TAPE_SATURATION = "Tape Saturation",
  BALANCED_WARMTH = "Balanced Warmth",
  RADIO_READY = "Radio Ready",
}
