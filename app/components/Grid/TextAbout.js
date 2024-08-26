/** @format */

import React from 'react';
import Typewriter from 'typewriter-effect';
import { Typography, Box, Button } from '@mui/material';
import useStyles from './GridsAbout-jss';
function TextAbout() {
  const { classes } = useStyles();

  return (
    <div className={classes.position}>
      <div style={{ display: 'flex', flex: '1' }}>
        <div className={classes.divider}></div>
        <div className={classes.txtstyle}>เกี่ยวกับวิศวกรรมซอฟต์แวร์</div>
      </div>
      <div
        style={{
          marginTop: 2,
          marginBottom: 2,
          fontSize: 36,
        }}
        className={classes.typing}>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString('RMUTL')
              .pauseFor(5000)
              .deleteChars(5)
              .typeString('Software Engineering')
              .pauseFor(5000)
              .deleteChars(20)
              .typeString('RMUTL : Software Engineering')
              .start();
          }}
        />
      </div>
      <Typography
        style={{
          fontSize: '18px',
          marginTop: 10,
          marginBottom: 5,
          fontWeight: 300,
        }}>
        วิศวกรรมซอฟต์แวร์ (SE) เป็นสาขาวิชาวิศวกรรมที่เกี่ยวข้องกับการผลิตซอฟต์แวร์ทุกด้าน รวมถึงการวิเคราะห์ซอฟต์แวร์ การออกแบบ การพัฒนา การทดสอบ และการใช้งาน SE ต้องการการคิดเชิงนามธรรมและเชิงตรรกะที่ลึกซึ้ง และการประยุกต์ใช้คณิตศาสตร์ ตรรกะ และวิทยาการคอมพิวเตอร์ เพื่อผลิตซอฟต์แวร์ที่มีประสิทธิภาพและเชื่อถือได้ด้วยทรัพยากรที่มีอยู่.
      </Typography>
      <Box className={classes.buttonstyles}>
        <Button variant='contained' className={classes.Button} href='/aboutus'>
          รู้จักเรามากขึ้น
        </Button>
      </Box>
    </div>
  );
}

export default TextAbout;
