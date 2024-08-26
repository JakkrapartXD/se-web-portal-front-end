/** @format */

import React from 'react';
import useStyles from './cardStyle-jss';
import imagebanner from '../../../public/images/bannerv.3.png';
function BannerCard() {
  const { classes } = useStyles();
  return (
    <>
      <div className={classes.bannerRoot}>
        <img
          // src='./images/test-gif.gif'
          src={imagebanner}
          style={{ width: '100%', objectFit: 'cover' }}
        />
      </div>
    </>
  );
}
export default BannerCard;
