export interface Picture {
  id?: number;
  created_at?: number;
  user_id?: number;
  title: string;
  size_x: number;
  size_y: number;
  url: string;
  isActive?: boolean;
}
