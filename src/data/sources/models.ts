import { files } from "dropbox";

export interface PhotoSource {
  '.tag': string;
  client_modified: string;
  content_hash: string;
  id: string;
  is_downloadable: boolean;
  name: string
  path_display: string;
  path_lower: string;
  rev: string;
  server_modified: string;
  size: number;
}

export interface PhotoThumbnail {
  metadata: files.FileMetadata;
  thumbnail: string;
}
