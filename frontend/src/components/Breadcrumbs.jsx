import React from 'react';
import { useLocation } from '@docusaurus/router';
import { useDoc } from '@docusaurus/plugin-content-docs/client';
import Link from '@docusaurus/Link';
import clsx from 'clsx';

import styles from './Breadcrumbs.module.css';

// Simple component to extract the module from the pathname
function getModuleFromPathname(pathname) {
  const parts = pathname.split('/');
  if (parts.length >= 2) {
    const modulePart = parts[2]; // Assuming structure is /docs/module-name/page
    if (modulePart) {
      return modulePart.replace(/-/g, ' ');
    }
  }
  return null;
}

export default function Breadcrumbs() {
  const location = useLocation();
  const doc = useDoc();

  if (!doc) {
    return null;
  }

  const { frontMatter, metadata } = doc;
  const { title } = metadata;
  const { custom_edit_url: customEditUrl } = frontMatter;

  const module = getModuleFromPathname(location.pathname);

  return (
    <nav className={clsx(styles.breadcrumbsContainer, 'padding-top--sm')} aria-label="breadcrumbs">
      <ul className="breadcrumbs">
        <li className="breadcrumbs__item">
          <Link className="breadcrumbs__link" to="/docs/intro">
            Home
          </Link>
        </li>
        {module && (
          <li className="breadcrumbs__item">
            <Link className="breadcrumbs__link" to={`/docs/${module}`}>
              {module.charAt(0).toUpperCase() + module.slice(1)}
            </Link>
          </li>
        )}
        <li className="breadcrumbs__item breadcrumbs__item--active">
          <span className="breadcrumbs__link">{title}</span>
        </li>
      </ul>
    </nav>
  );
}