/** @format */

import React from 'react';
import useStyles from '../../../components/Forms/user-jss';
import PortalShortcut from '../../../components/Forms/PortalShortcut';

function Shortcut() {
  const { classes } = useStyles();

  return (
    <>
      <div className={classes.root}>
        <div className={classes.container}>
          <div className={classes.userFormWrap}>
            <PortalShortcut />
          </div>
        </div>
      </div>
    </>
  );
}
export default Shortcut;
