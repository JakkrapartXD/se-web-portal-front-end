/** @format */
import { Card, Box, Typography } from '@mui/material';
import React from 'react';
import './styles.css';
import AOS from 'aos';

AOS.init();
function futureCareerSubport() {
  return (
    <>
      <div className='Career'>
        <Box
          className='CareerSubject'
          sx={{ marginBottom: '2%' }}
          data-aos='fade-up'
          data-aos-duration='3000'>
          <Card className='CareerCard'>
            <Typography>วิศวกรซอฟต์แวร์</Typography>
          </Card>
          <Card className='CareerCard'>
            <Typography>นักวิเคราะห์และออกแบบระบบ</Typography>
          </Card>
          <Card className='CareerCard'>
            <Typography>นักวิเคราะห์ระบบสารสนเทศในงานอุตสาหกรรม</Typography>
          </Card>
        </Box>
        <Box
          className='CareerSubject'
          sx={{ marginBottom: '2%' }}
          data-aos='fade-up'
          data-aos-duration='1000'>
          <Card className='CareerCard'>
            <Typography>นักพัฒนาซอฟต์แวร์</Typography>
          </Card>
          <Card className='CareerCard'>
            <Typography>สถาปนิกซอฟต์แวร์</Typography>
          </Card>
          <Card className='CareerCard'>
            <Typography></Typography>
          </Card>
        </Box>
        <Box
          className='CareerSubject'
          sx={{ marginBottom: '2%' }}
          data-aos='fade-up'
          data-aos-duration='3000'>
          <Card className='CareerCard'>
            <Typography>นักประกันคุณภาพซอฟต์แวร์</Typography>
          </Card>
          <Card className='CareerCard'>
            <Typography>ผู้ประกอบการด้านซอฟต์แวร์</Typography>
          </Card>
          <Card className='CareerCard'>
            <Typography></Typography>
          </Card>
        </Box>
      </div>
    </>
  );
}

export default futureCareerSubport;
