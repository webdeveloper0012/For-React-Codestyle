import './footer.scss';
import React from 'react';
import {RouteComponentProps} from 'react-router';
import {Link, useLocation} from 'react-router-dom';

export const Footer = () => {
  const location = useLocation();

  const displayAirbnbPageLinks = () => {

    const pageLinks = [
      {
        caption: 'ADHurry',
        links: [
          {link: '/page/careers', caption: 'Careers'},
          {link: '/page/news', caption: 'News'},
          {link: '/page/policies', caption: 'Policies'},
          {link: '/page/diversity-belonging', caption: 'Diversity & Belonging'},
          // { link: '/page/accessibility', caption: 'Accessibility' },
          // { link: '/page/terms', caption: 'Terms' },
          // { link: '/page/privacy', caption: 'Privacy' },
        ],
      },
      {
        caption: 'Buying Ads',
        links: [
          {link: '/page/why-buy', caption: 'Why Buy'},
          {link: '/page/successful-buying', caption: 'Successful Buying'},
          // { link: '/page/responsible-buying', caption: 'Responsible Buying' },
          {link: '/page/buying-agreement', caption: 'Buying Agreement'}

        ],
      },
      {
        caption: 'Selling Ads',
        links: [
          {link: '/page/why-sell', caption: 'Why Sell'},
          {link: '/page/successful-selling', caption: 'Successful Selling'},
          // { link: '/page/responsible-selling', caption: 'Responsible Selling' },
          {link: '/page/selling-agreement', caption: 'Selling Agreement'}
        ],
      },
      {
        caption: 'Support',
        links: [
          {link: '/page/help', caption: 'Help', isNew: false},
          {link: '/contact-us', caption: 'Contact Us'}
          // { link: '/page/neighborhood-support', caption: 'Neighborhood Support', isNew: true },
        ],
      },
    ];

    return (
      <div className="page-link-footer-section">
        {
          pageLinks.map(link => (
            <div className="page-link-part-section" key={link.caption}>
              <h4 className="page-link-part-caption"> {link.caption} </h4>
              <ul className="page-link-part-items">
                {
                  link.links.map(itemLink => (
                    <li className="page-link-part-item" key={itemLink.caption}>
                      <Link to={itemLink.link} className="page-link-part-item-a"> {itemLink.caption} </Link>
                      {
                        itemLink.isNew &&
                        <span className="page-link-item-new-cover-span">
                          <span className="page-link-item-new-span">
                            <span className="page-link-item-text">
                              New
                            </span>
                          </span>
                        </span>
                      }
                    </li>
                  ))
                }
              </ul>
            </div>
          ))
        }
      </div>
    );
  }

  const displaySocialLinks = () => {
    const socialLinks = [
      {
        href: "https://www.facebook.com/ADHurry",
        pathd: "m8 14.41v-4.17c0-.42.35-.81.77-.81h2.52v-2.08c0-4.84 2.48-7.31 7.42-7.35 1.65 0 3.22.21 4.69.64.46.14.63.42.6.88l-.56 4.06c-.04.18-.14.35-.32.53-.21.11-.42.18-.63.14-.88-.25-1.78-.35-2.8-.35-1.4 0-1.61.28-1.61 1.73v1.8h4.52c.42 0 .81.42.81.88l-.35 4.17c0 .42-.35.71-.77.71h-4.21v16c0 .42-.35.81-.77.81h-5.21c-.42 0-.8-.39-.8-.81v-16h-2.52a.78.78 0 0 1 -.78-.78",
        id: '1',
      },
      {
        href: "https://twitter.com/ad_hurry",
        pathd: "m31 6.36c-1.16.49-2.32.82-3.55.95 1.29-.76 2.22-1.87 2.72-3.38a13.05 13.05 0 0 1 -3.91 1.51c-1.23-1.28-2.75-1.94-4.51-1.94-3.41 0-6.17 2.73-6.17 6.12 0 .49.07.95.17 1.38-4.94-.23-9.51-2.6-12.66-6.38-.56.95-.86 1.97-.86 3.09 0 2.07 1.03 3.91 2.75 5.06-1-.03-1.92-.3-2.82-.76v.07c0 2.89 2.12 5.42 4.94 5.98-.63.17-1.16.23-1.62.23-.3 0-.7-.03-1.13-.13a6.07 6.07 0 0 0 5.74 4.24c-2.22 1.74-4.78 2.63-7.66 2.63-.56 0-1.06-.03-1.43-.1 2.85 1.84 6 2.76 9.41 2.76 7.29 0 12.83-4.01 15.51-9.3 1.36-2.66 2.02-5.36 2.02-8.09v-.46c-.03-.17-.03-.3-.03-.33a12.66 12.66 0 0 0 3.09-3.16",
        id: 2,
      },
      {
        href: "https://www.instagram.com/adhurry/",
        pathd: "m23.09.91c-.61-.61-1.33-.91-2.17-.91h-17.84c-.85 0-1.57.3-2.17.91s-.91 1.33-.91 2.17v17.84c0 .85.3 1.57.91 2.17s1.33.91 2.17.91h17.84c.85 0 1.57-.3 2.17-.91s.91-1.33.91-2.17v-17.84c0-.85-.3-1.57-.91-2.17zm-14.48 7.74c.94-.91 2.08-1.37 3.4-1.37 1.33 0 2.47.46 3.41 1.37s1.41 2.01 1.41 3.3-.47 2.39-1.41 3.3-2.08 1.37-3.41 1.37c-1.32 0-2.46-.46-3.4-1.37s-1.41-2.01-1.41-3.3.47-2.39 1.41-3.3zm12.66 11.63c0 .27-.09.5-.28.68a.92.92 0 0 1 -.67.28h-16.7a.93.93 0 0 1 -.68-.28.92.92 0 0 1 -.27-.68v-10.13h2.2a6.74 6.74 0 0 0 -.31 2.05c0 2 .73 3.71 2.19 5.12s3.21 2.12 5.27 2.12a7.5 7.5 0 0 0 3.75-.97 7.29 7.29 0 0 0 2.72-2.63 6.93 6.93 0 0 0 1-3.63c0-.71-.11-1.39-.31-2.05h2.11v10.12zm0-13.95c0 .3-.11.56-.31.77a1.05 1.05 0 0 1 -.77.31h-2.72c-.3 0-.56-.11-.77-.31a1.05 1.05 0 0 1 -.31-.77v-2.58c0-.29.11-.54.31-.76s.47-.32.77-.32h2.72c.3 0 .56.11.77.32s.31.47.31.76z",
        id: 3,
      }
    ];
    return (
      <div className="social-link-footer-section">
        {
          socialLinks.map(link => (
            <span className="social-link-button" key={link.id}>
            <a href={link.href} target="_blank" rel="noopener noreferrer" className="social-link-hypera">
              <svg viewBox="0 0 32 32" focusable="false"
                   style={{height: '18px', width: '18px', display: 'block', fill: 'rgb(118, 118, 118)'}}>
                <path d={link.pathd} fillRule="evenodd"/>
              </svg>
            </a>
          </span>
          ))
        }
      </div>
    );
  }

  const displayAdHurryBottomLink = () => (
    <div className="airbnb-link-footer-section">
      <div className="airbnb-link-padding-section">
        <div className="airbnb-link-item-section">
          <div style={{marginRight: '8px'}}>
            <img src="content/images/adhurry_circular_logo.png" alt="Logo" style={{width: '28px', height: '28px'}}/>
          </div>
        </div>
        <div className="airbnb-link-item-section">
          <div>
            <span dir="ltr" className="airbnb-link-span">
              © 2019 ADHurry, Inc. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="footer page-content">
      <div className="center-footer">
        {displayAirbnbPageLinks()}
        <div className="global-link-footer-section">
          {displayAdHurryBottomLink()}
          {displaySocialLinks()}
        </div>
      </div>
    </div>
  );
};

export default Footer;
