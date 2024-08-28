/** @format */

import { Typography } from '@mui/material';
import Link from '@mui/material/Link';
import React from 'react';
import telephone from 'dan-images/telephone.png';
import email from 'dan-images/email.png';
import facebook from 'dan-images/facebook.png';
import line from 'dan-images/linelogo2.png';
import map from 'dan-images/google-maps.png';
import { Footer } from '../../../components';
import './styles.css';

function contactus() {
  return (
    <>
      <header>
        <Typography
          variant='h4'
          sx={{
            textAlign: 'center',
            background:
              'linear-gradient(94deg, rgba(255,155,123,1) 47%, rgba(254,111,65,1) 48%)',
            backgroundClip: 'text',
            color: 'blue',
            fontWeight: 700,
            filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15))',
            marginBottom: '20px',
          }}>
          ติดต่อเรา
        </Typography>
      </header>
      <section className='section'>
        <div className='map-container'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3647.9317549398497!2d99.1809128!3d18.8534759!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da2750ef274987%3A0xa2bb7aeab05963f2!2sV54M%2B724!5e1!3m2!1sth!2sth!4v1724499664476!5m2!1sth!2sth'
            width='600'
            height='450'
            allowFullScreen=''
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          />
        </div>
      </section>
      <section className='content'>
        <div>
          <Typography fontWeight={500} fontSize={20} sx={{ color: '#FE6F41' }}>
            มหาวิทยาลัยเทคโนโลยีราชมงคลล้านนา
          </Typography>
          <div style={{ textIndent: '30px' }}>
            <Typography>
              <img
                src={map}
                style={{ width: '18px', padding: '1px', marginRight: '1%' }}
              />
              128 ถ.ห้วยแก้ว ต.ช้างเผือก อ.เมือง จ.เชียงใหม่ 50300
            </Typography>
            <Typography>
              <img
                src={telephone}
                style={{ width: '18px', padding: '1px', marginRight: '1%' }}
              />
              โทรศัพท์ : 0 5392 1444
            </Typography>
            <Typography>
              <img
                src={email}
                style={{ width: '18px', padding: '1px', marginRight: '1%' }}
              />
              email : saraban@rmutl.ac.th
            </Typography>
          </div>
        </div>
        <div>
          <Typography fontWeight={500} fontSize={20} sx={{ color: '#FE6F41' }}>
            สำนักงานสาขาวิศวกรรมไฟฟ้า
          </Typography>
          <Typography style={{ textIndent: '30px' }}>
            <img
              src={telephone}
              style={{ width: '18px', padding: '1px', marginRight: '1%' }}
            />
            โทรศัพท์ : 05-392-1444 ต่อ 1508{' '}
          </Typography>
        </div>
        <div>
          <Typography fontWeight={500} fontSize={20} sx={{ color: '#FE6F41' }}>
            หลักสูตรวิศวกรรมซอฟต์แวร์
          </Typography>
          <div style={{ textIndent: '30px' }}>
          <Typography>
              <img
                src={map}
                style={{ width: '18px', padding: '1px', marginRight: '1%' }}
              />
              เลขที่ 98 หมู่ 8 ตำบลป่าป้อง อำเภอดอยสะเก็ด จังหวัดเชียงใหม่ 50220
            </Typography>
            <Typography>
              <img
                src={line}
                style={{ width: '18px', padding: '1px', marginRight: '1%' }}
              />
              <Link
                fontSize={16}
                sx={{ color: '#000' }}
                href='https://lin.ee/AqLquMD'
                underline='none'>
                {'Line : @675vsmtr'}
              </Link>
            </Typography>
            <Typography>
              <img
                src={facebook}
                style={{ width: '20px', marginRight: '1%' }}
              />
              <Link
                fontSize={16}
                sx={{ color: '#000' }}
                href='https://www.facebook.com/sermutl'
                underline='none'>
                {'Facebook : Software Engineering - RMUTL'}
              </Link>
            </Typography>
          </div>
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default contactus;
