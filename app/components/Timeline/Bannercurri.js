/** @format */

import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import Curriculum from '../CardPaper/CourseCard';
import openscitrend from '../../../public/images/openscitrend.jpg';
import curriculum from '../../api/dummy/curriculum';
import useStyles from './index-jss';

function Showcurriculum() {
  const { classes } = useStyles();

  return (
    <>
      {/* เปลี่ยนเป็น flex */}
      <Box className={classes.cours}>
        {Object.values(curriculum).map((data) => (
          <Curriculum
            key={data.id}
            title={data.title}
            subtitle={data.subtitle}
            temppathimg={data.imgPath}
            pathcurriculum={data.link}
          />
        ))}
      </Box>
    </>
  );
}

function Bannercurri() {
  const { classes } = useStyles();
  return (
    <>
      <Box className={classes.bannercurriroot}>
        <Box className={classes.layout}>
          {/* Box left */}
          <Box className={classes.layoutleft}>
            <Showcurriculum />
          </Box>
          {/* Box right */}
          <Box className={classes.layoutright}>
            <Typography className={classes.txttitle}>
              Software Engineering
            </Typography>
            <Typography className={classes.subtitle}>
            มุ่งผลิตบัณฑิตนักปฏิบัติที่มีความเป็นมืออาชีพโดยใช้หลักวิศวกรรมซอฟต์แวร์ในการพัฒนาซอฟต์แวร์และประยุกต์ใช้ในภาคอุตสาหกรรมและผู้ให้บริการเทคโนโลยีดิจิตอล
            <br />
            1. มีทักษะในการนำหลักการทางวิศวกรรมซอฟต์แวร์ ไปใช้ในการออกแบบและพัฒนาซอฟต์แวร์ที่มีคุณภาพและได้มาตรฐานสากล
            <br />
            2. สามารถการออกแบบและประยุกต์ใช้ซอฟต์แวร์โดยคำนึงถึงสถาปัตยกรรมที่เหมาะสมและมีประสิทธิภาพด้านความปลอดภัย
            <br />
            3. สามารถควบคุมและตรวจสอบคุณภาพของการพัฒนาซอฟต์แวร์ได้อย่างเป็นระบบ
          </Typography>
            <Button href='/Coures-SE' className={classes.buttonstyles1}>
              LEAN MORE
            </Button>
          </Box>
        </Box>
        <Box className={classes.underimg}></Box>
        <img src={openscitrend} className={classes.imgbackgroundCurri} />
      </Box>
    </>
  );
}
export default Bannercurri;
