/* Every photo in /assets/media has a 640px "-640.webp" sibling (see README). */
export const SIZES_HALF = '(min-width: 992px) 50vw, 100vw';
export const SIZES_CARD = '(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw';
export const SIZES_WIDE = '(min-width: 1240px) 1160px, 100vw';

export default function Photo({ src, sizes = SIZES_HALF, alt, ...rest }) {
  const small = src.replace(/\.webp$/, '-640.webp');
  return <img src={src} srcSet={`${small} 640w, ${src} 1280w`} sizes={sizes} alt={alt} {...rest} />;
}
