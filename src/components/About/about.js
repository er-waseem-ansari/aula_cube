import React from 'react'
import { styled } from 'styled-components';
function About() {
  return (
    <Details>
      Dear Sir/Ma'am, <br/><br/>
      I am writing this because I have very much interest in Web Development Internship opportunity at AulaCube Technologies Private Limited. I am enthusiastic about the prospect of contributing my skills and passion for Web Development to your team.<br/>
      <br/>
      My academic background has equipped me with a solid foundation in web technologies, including HTML, CSS, JavaScript, and various frontend frameworks such as ReactJS.<br/>
      <br/>
      What excites me most about the opportunity at AulaCube Technologies is the chance to work on meaningful projects that have a real impact. Your company's reputation for innovation and commitment to creating user-friendly digital experiences aligns perfectly with my career aspirations. <br/>
      <br/>
      Thank you<br/>
      Best regards,<br/>
      Waseem Ansari<br/>
      E-mail : erwaseem26@gmail.com <br/>
      Mobile no. : +91 7860451506 <br/>

    </Details>
  )
}
export default About;

export const Details = styled.div`
height:80vh;
width: 50vw;
background-color: rgb(255, 255, 255,0.1);
margin: 0 2vw;
margin-top:3vh;
color: white;
padding: 1vw;
font-size: 1.3vw;
border-radius: 15px;

`