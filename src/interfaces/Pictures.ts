export interface Picture {
  id?: number;
  created_at?: number;
  user_id?: number;
  title: string;
  size_x: number;
  size_y: number;
  url: string;
  tags?: any[];
  isActive?: boolean;
}

export const createEmptyPicture = (): Picture => {
  return {
    id: -1,
    created_at: -1,
    user_id: -1,
    title: "",
    size_x: -1,
    size_y: -1,
    url: "",
    isActive: false,
    tags: [],
  };
};
