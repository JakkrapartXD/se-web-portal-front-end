/** @format */

import React from 'react';
import { Box, Typography } from '@mui/material';
import logic from '../../../public/images/studyplan/logic.png';
import math from '../../../public/images/studyplan/math.png';
import web from '../../../public/images/studyplan/web.png';

import useStyles from './cardStyle-jss';
function Plancards() {
  const { classes } = useStyles();
  return (
    <>
      <Box className={classes.rootsplan}>
        <Box className={classes.setborder}>
          <Box className={classes.setlightborder}></Box>
          <img className={classes.imgstyles} src={math} />
          <div className={classes.styletxt}>
            <Typography variant='h5' sx={{ padding: '2px 0px 2px 0px' }}>
            คณิตศาสตร์ และ ตรรกะ
            </Typography>
            <Typography sx={{ padding: '2px 0px 2px 0px' }}>
              เป็นพื้นฐานที่ควรมีก่อนเรียนวิศวกรรมซอฟต์แวร์
               เพราะมีความจำเป็นที่ต้องได้ใช้เรียน เช่น
              <div style={{ color: '#716F6F' }}>
              ความน่าจะเป็นและสถิติในงานวิศวกรรม, คณิตศาสตร์ดิสครีต เป็นต้น
              </div>
            </Typography>
          </div>
        </Box>
        <Box className={classes.setborder}>
          <Box className={classes.setlightborder}></Box>
          <img className={classes.imgstyles} src={logic} />
          <div className={classes.styletxt}>
            <Typography variant='h5' sx={{ margin: '2px 0px 2px 0px' }}>
            กระบวนการคิด วิเคราะห์
            </Typography>
            <Typography sx={{ padding: '2px 0px 0px 0px' }}>
              กระบวนการคิดเป็นอีกหนึ่งวิชาที่จำเป็น
              <br />
              ต้องได้เรียนเมื่อมาเรียนวิศวกรรมซอฟต์แวร์
              <br />
              เพราะเป็นรายวิชาบังคับที่ต้องเรียนตามหลักสูตร เช่น{' '}
              <div style={{ color: '#716F6F' }}>
                วิชา กระบวนการซอฟต์แวร์และการประกันคุณภาพ, <br />
                การกำหนดความต้องการและการออกแบบทางซอฟต์แวร์ เป็นต้น
              </div>
            </Typography>
          </div>
        </Box>
        <Box className={classes.setborder}>
          <Box className={classes.setlightborder}></Box>
          <img className={classes.imgstyles} src={web} />
          <div className={classes.styletxt}>
            <Typography variant='h5' sx={{ padding: '2px 0px 2px 0px' }}>
            การเขียนโปรแกรม
            </Typography>
            <Typography
              sx={{ padding: '2px 0px 2px 0px', wordBreak: 'break-word' }}>
              พื้นฐานที่ควรมีเบื้งต้นเมื่อมาเรียน เช่น <br />
              <div style={{ color: '#716F6F' }}>
                ภาษา C++ , JavaScript เป็นต้น
                <br />
              </div>
              เพราะมีความจำเป็นที่ต้องได้ใช้เรียนเป็นอย่างมาก <br />
              ในหลายวิชา เช่น
              <div style={{ color: '#716F6F' }}>
                วิชา การเขียนโปรแกรมคอมพิวเตอร์, การเขียนโปรแกรมสำหรับวิศวกรรมซอฟต์แวร์ เป็นต้น
              </div>
            </Typography>
          </div>
        </Box>
      </Box>
    </>
  );
}
export default Plancards;
