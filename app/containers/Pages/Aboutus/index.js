/** @format */

import React from 'react';
import { Typography } from '@mui/material';
import imagebanner from '../../../../public/images/bannerv.3.png';
import { Basicsubject, Footer, FutureCareerSubport } from '../../../components';
import './styles.css';
function CECourses() {
  return (
    <>
      <header>
        <Typography
          variant='h4'
          sx={{
            textAlign: 'center',
            background:
              'linear-gradient(94deg, rgba(255,155,123,1) 44%, rgba(254,111,65,1) 48%)',
            backgroundClip: 'text',
            color: 'blue',
            fontWeight: 700,
            filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15))',
          }}>
          สาขาวิศวกรรมซอฟต์แวร์ ?
        </Typography>
      </header>
      <section
        style={{
          marginTop: '2%',
          padding: '0px 5% 0px 5%',
          // border: '2px solid red',
          textAlign: 'center',
        }}>
        <Typography
          style={{ fontSize: '20px', fontWeight: 400, marginBottom: '30px' }}>
          วิศวกรรมซอฟต์แวร์เป็นสาขาวิชาที่เกี่ยวข้องกับการสร้างและออกแบบซอฟต์แวร์
        </Typography>
        <img src={imagebanner} className='imgsyles' />
        <Typography
         style={{
          fontSize: '20px',
          fontWeight: 400,
          marginTop: '2%',
          marginBottom: '30px'
        }}>
          เกี่ยวกับสาขาวิชา
        </Typography>
        <Typography style={{ fontSize: '16px', marginTop: '30px' }}>
          วิศวกรรมซอฟต์แวร์ เป็นสาขาที่เกี่ยวข้องกับการผลิตซอฟต์แวร์ทุกด้าน รวมถึงการวิเคราห์ ซอฟต์แวร์ การออกแบบ การพัฒนา การทดสอบ
          <br />
          และการใช้งาน SE ต้องการการคิดเชิงนามธรรมและเชิงตรรกะที่ลึกซึ้งและการประยุกต์ใช้คณิตศาสตร์ ตรรกะ
          <br />
          และวิทยาการคอมพิวเตอร์ เพื่อผลิตซอฟต์แวร์ที่มี ประสิทธิภาพและเชื่อถื่อได้ด้วยทรัพยากรที่มีอยู่
        </Typography>
        <Typography
          style={{
            color: 'blue',
            fontWeight: 700,
            fontSize: '20px',
            margin: '50px 0px 50px',
          }}>
          การจัดการเรียนการสอนใน 4 ชั้นปี
        </Typography>
        {/* <div style={{ fontSize: '16px', fontFamily: 'Noto Sans Thai' }}>
          <ul style={{ textAlign: 'center' }}>
            <li> •  ชั้นปีที่ 1 รู้หลักการพัฒนาซอฟต์แวร์เบื้องต้น มีทักษะในการเขียนโปรแกรมคอมพิวเตอร์
              เบื้องต้นและประสบการณ์ในการสร้างซอฟต์แวร์ขนาดเล็ก เพื่อสร้างแรงบันดาลใจในการเรียน</li>
            <li>
              • ระบบฐานข้อมูลและวิศวกรรมข้อมูล (database systems and data
              engineering)
            </li>
            <li>
              • ระบบเครือข่ายและความปลอดภัยของข้อมูล (networks and information
              security)
            </li>
          </ul>
        </div> */}
        <Typography style={{ margin: '30px 0px 30px' }}>
        •  ชั้นปีที่ 1 รู้หลักการพัฒนาซอฟต์แวร์เบื้องต้น มีทักษะในการเขียนโปรแกรมคอมพิวเตอร์
        <br />
        เบื้องต้นและประสบการณ์ในการสร้างซอฟต์แวร์ขนาดเล็ก เพื่อสร้างแรงบันดาลใจในการเรียน
          <br />
        </Typography>
        <Typography style={{ margin: '30px 0px 30px' }}>
        •  ชั้นปีที่ 2 สามารถจัดการโครงสร้างข้อมูลและการจัดเก็บข้อมูลได้อย่างเป็นระบบ
          <br />
        การวิเคราะห์ออกแบบระบบซอฟต์แวร์ เรียนรู้การสร้างซอฟต์แวร์และแอพพลิเคชั่นเพื่อให้
        <br />
        มีทักษะในการพัฒนาโปรแกรมคอมพิวเตอร์ชั้นสูง
        </Typography>
        <Typography style={{ margin: '30px 0px 30px' }}>
        •  ชั้นปีที่ 3 สามารถพิจารณา ประเมินความเป็นไปได้และนำเสนอโครงการระบบซอฟต์แวร์เข้าใจ
        <br />
        หลักการพัฒนาซอฟต์แวร์และนำไปใช้ในโครงการอย่างเป็นระบบ
        </Typography>
        <Typography>
        •  ชั้นปีที่ 4 มีประสบการณ์ในการออกแบบและพัฒนาซอฟต์แวร์ จากการทำงานในสถาน
        <br />
        ประกอบการ สามารถทำงานเป็นทีมโดยการรับโจทย์จริงจากสถานประกอบการ
        <br />
        และใช้ กระบวนการพัฒนาซอฟต์แวร์เต็มรูปแบบ
        </Typography>
        {/* tab 2 */}
        <div style={{ margin: '30px 0px 40px' }}>
          <Typography
            sx={{
              fontSize: '32px',
              textAlign: 'center',
              background: 'linear-gradient(94deg, #8C8C8C 44%, #6F6F6F 48%)',
              backgroundClip: 'text',
              color: 'blue',
              fontWeight: 700,
              filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15))',
            }}>
            วิชาเรียนพื้นฐาน
          </Typography>
        </div>
        <div>
          <Basicsubject />
        </div>
        {/* tab3 */}
        <div style={{ margin: '50px 0px 40px' }}>
          <Typography
            sx={{
              fontSize: '32px',
              textAlign: 'center',
              background: 'linear-gradient(94deg, #8C8C8C 44%, #6F6F6F 48%)',
              backgroundClip: 'text',
              color: 'blue',
              fontWeight: 700,
              filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15))',
            }}>
            อาชีพที่รองรับ
          </Typography>
          <div>
            <FutureCareerSubport />
          </div>
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default CECourses;
