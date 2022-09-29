const base = "upload/";
interface cloudArgs {
  e_gradient_fade?: boolean;
  crop?: string;
  height?: number;
  width?: number;
  gravity?: string;
}

const bannerExample =
  "b_rgb:000000,e_gradient_fade,y_-0.50/c_scale,co_rgb:ffffff,fl_relative,w_0.5,y_0.18/";

const defaultBannerArgs = {
  crop: "fill",
  width: 1900,
  height: 450,
  gravity: "auto",
};

export const cloudBanner = (
  url: string,
  args: cloudArgs = defaultBannerArgs
): string => {
  url = url.replace(base, base + handleArgs(args) + bannerExample);
  return url;
};

const handleArgs = (args: cloudArgs): string => {
  const height = args.height ? `h_${args.height}` : "";
  const width = args.width ? `w_${args.width}` : "";
  const crop = args.crop ? `c_${args.crop}` : "";
  const gravity = `g_${args.gravity}`;
  const urlValues = `${crop},${gravity},${width},${height}/`;
  return urlValues;
};
