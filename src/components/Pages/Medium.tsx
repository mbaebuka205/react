import styled from 'styled-components'
import {GoPerson} from 'react-icons/go'
import {BsEnvelopeDash} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {AiFillInstagram, AiFillTwitterCircle, AiFillLinkedin} from 'react-icons/ai'

const Medium = () =>{

   return(
    <div>
     <Container>
        <Whtin>
            <h1>SuperCharge Your<br/> Mobile Life With <span>Hashit</span></h1>
            <Divs>
                <Icon>
                   <GoPerson/>
                </Icon>
                <p>Full Name</p>
            </Divs>
            <Divs>               
                 <Icon>
                   <BsEnvelopeDash/>
                </Icon>
                <p>Email Address</p></Divs>  
            <Divs1><p>Get Notified When Hashit is live</p></Divs1>
            <Imgs>
              <BsFacebook/>
              <AiFillInstagram/>
              <AiFillTwitterCircle/>
              <AiFillLinkedin/>
            </Imgs>
        </Whtin>
     </Container>
    </div>
   )
}
export default Medium;
const Icon = styled.div`
font-size:100%
`
const Imgs = styled.div`
width:40%;
display:flex;
justify-content:space-between;
font-size:29px;
@media (max-width:500px){
  width:50%;
}
`
const Divs1 = styled.div`
width:60%;
color:white;
background-color:black;
border:1px solid black;
text-align:center;
@media (max-width:500px){
  width:85%;
}
`
const Divs = styled.div`
height:40px;
width:60%;
border:1px solid black;
display:flex;
align-items:center;
color:gray;
@media (max-width:500px){
  width:85%;
}
`
const Whtin = styled.div`
height:450px;
width:59%;
display:flex;
justify-content:space-between;
flex-direction:column;
align-items:center;
h1{
    font-size:30px;
    text-align:center
  };
  span{
    color:orangered
  };
  @media(max-width:768px){
    width:100%;
  };
  @media(max-width:500px){
    width:100%;
  }
`
const Container = styled.div`
height:600px;
width:100%;
background-color:white;
display:flex;
justify-content:center;
align-items:center;
`
