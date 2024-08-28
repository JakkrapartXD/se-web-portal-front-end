/** @format */

import { Typography, Box, Button } from '@mui/material';
import React from 'react';
import imagePresentaion from '../../../../public/images/logo-se1.png';
import hand from '../../../../public/images/hand.png';
import { Footer } from '../../../components';

import './styles.css';

function StrutureCE() {
  return (
    <>
      <header>
        <Box
          sx={{
            textAlign: 'center',
            background:
              'linear-gradient(94deg, rgba(255,155,123,1) 46%, rgba(254,111,65,1) 50%)',
            backgroundClip: 'text',
            color: 'blue',
            fontWeight: 600,
            filter: 'drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.1))',
            fontSize: '32px',
          }}>
          หลักสูตรวิศวกรรมซอฟต์แวร์ 4 ปี
        </Box>
      </header>
      <section className='section'>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            // border: '1px solid red',
            flexWrap: 'wrap',
          }}>
          <div style={{ width: '400px', height: '330px' }}>
            <img src={imagePresentaion} style={{ height: '100%' }} />
          </div>
          <div className='BoxPayment'>
            <div>
              <img src={hand} />
            </div>
            <div>
              <Typography fontWeight={500} fontSize={24}>
                ค่าธรรมเนียมการศึกษา
              </Typography>
              <Typography fontSize={24} fontWeight={500}>
                16,000
              </Typography>
              <Typography fontSize={24} fontWeight={500}>
                บาท / ภาคเรียน
              </Typography>
            </div>
          </div>
        </div>
        <div
          style={{
            height: '80px',
          }}>
          <Button className='button' href='/Coures-SE-detail'>
            ดูโครงสร้างหลักสูตร
          </Button>
        </div>
        <div
          style={{
            width: '100%',
            marginBottom: '2%',

            // border: '1px solid red',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}>
          <div
            style={{
              width: '150px',
              height: '3px',
              background: 'linear-gradient(90deg, #FE6439 0%, #EBAA48 100%)',
              marginRight: '10px',
            }}
          />
          <Typography fontSize={20} textAlign={'right'}>
            ทำไมต้องเรียน วศ.บ. วิศวกรรมซอฟต์แวร์ ?
          </Typography>
        </div>
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-end',
          }}>
          <Typography fontSize={16} textAlign={'right'} width={510}>
          หลักสูตรมุ่งผลิตบัณฑิตนักปฏิบัติที่มีความเป็นมืออาชีพโดยใช้หลักวิศวกรรมซอฟต์แวร์ใน
          การพัฒนาซอฟต์แวร์และประยุกต์ใช้ในภาคอุตสาหกรรมและท้องถิ่นรวมทั้งธุรกิจบริการทาง
          ดิจิตอลบนพื้นฐานความรู้คุณวุฒิวิชาชีพที่มีความรับผิดชอบต่อสังคมและปรับตัวได้อย่างคล่องตัว
          เพื่อตอบรับความต้องการของกำลังคนในสังคมเศรษฐกิจที่ขับเคลื่อนด้วยนวัตกรรมของประเทศ
          </Typography>
        </div>
        <div
          style={{
            marginTop: '6%',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}>
          <div>
            <Typography fontWeight={500} fontSize={20}>
              โอกาสหางาน / อาชีพที่รองรับ ?
            </Typography>
            <li>วิศวกรซอฟต์แวร์(Software Engineer)</li>
            <li>นักพัฒนาซอฟต์แวร์(Developer/Programmer)</li>
            <li>นักประกันคุณภาพซอฟต์แวร์(Software Quality Assurance)</li>
            <li>นักวิเคราะห์และออกแบบระบบ (System Analyst and Designer)</li>
            <li>สถาปนิกซอฟต์แวร์(Software Architect)</li>
            <li>ผู้ประกอบการด้านซอฟต์แวร์(Software Entrepreneurship)</li>
            <li>นักวิเคราะห์ระบบสารสนเทศในงานอุตสาหกรรม (IT Analyst)</li>
          </div>
          <div>
            <img
              src={imagePresentaion}
              style={{ width: 400, objectFit: 'cover' }}
            />
          </div>
        </div>
        <div
          style={{
            width: '100%',
            marginBottom: '2%',
            display: 'flex',
            alignItems: 'center',
            marginTop: '4%',
          }}>
          <Typography fontSize={20} textAlign={'right'}>
            คุณสมบัติของผู้เรียนหรือผู้ที่สนใจ
          </Typography>
          <div
            style={{
              width: '150px',
              height: '3px',
              background: 'linear-gradient(90deg, #FE6439 0%, #EBAA48 100%)',
              marginLeft: '10px',
            }}
          />
        </div>
        <Typography sx={{ marginBottom: '4%' }}>
          เป็นนักศึกษาที่เป็นนักศึกษาไทยและนักศึกษาต่างประเทศที่มีสมรรถนะในการใช้ภาษาไทยในระดับดีและเป็นผู้ที่สำเร็จการศึกษาตั้งแต่
          นักศึกษาที่สำเร็จการศึกษาระดับ มัธยมศึษาปีที่ 6 (ม.6) /
          ประกาศนียบัตรวิชาชีพขั้นสูง (ปวส.) / ประกาศนียบัตร์วิชาชีพ (ปวช)
        </Typography>
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default StrutureCE;
