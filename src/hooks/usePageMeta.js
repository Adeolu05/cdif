import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { orgDetails } from '../data/cdifData';

const DEFAULT_TITLE = `${orgDetails.name} | Strengthening Families, Nurturing Children`;

function setHeadAttribute(selector, attribute, value) {
  const element = document.head.querySelector(selector);
  if (element && value) element.setAttribute(attribute, value);
}

/* index.html carries the defaults that link-preview crawlers read; this keeps them in step per route. */
export default function usePageMeta(title, description) {
  const { pathname } = useLocation();

  useEffect(() => {
    const fullTitle = title ? `${title} | ${orgDetails.name}` : DEFAULT_TITLE;
    const url = `${window.location.origin}${pathname}`;

    document.title = fullTitle;
    setHeadAttribute('meta[name="description"]', 'content', description);
    setHeadAttribute('meta[property="og:title"]', 'content', fullTitle);
    setHeadAttribute('meta[property="og:description"]', 'content', description);
    setHeadAttribute('meta[property="og:url"]', 'content', url);
    setHeadAttribute('link[rel="canonical"]', 'href', url);
  }, [title, description, pathname]);
}
