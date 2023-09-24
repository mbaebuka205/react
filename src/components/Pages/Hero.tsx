import styled from 'styled-components'
import pix from '../../assets/waitlist-a41208d5.png'

const Hero = () =>{
  return(
    <div>
       <Container>
        <Wrapper>
         <Dtop><h1>SuperCharge Your Mobile Life With <span>Hashit</span></h1></Dtop>
         <Dbottom><img src={pix}/></Dbottom>
         <Dlast><p>Level up your mobile experience with Hashit! Send money, buy airtime, pay utilities, save, earn, learn, connect with friends, explore our vibrant marketplace, advertise your biz, and win exciting giveaways - all in one place.
Join the waitl
</p></Dlast>
        </Wrapper>
       </Container>
       
    </div>
  ) 
}

export default Hero;
const Dlast = styled.div`
width:70%;
text-align:center;
`
const Dbottom = styled.div`
width:95%;
img{
  height:100%;
  width:100%;
};

`
const Dtop = styled.div`
width:45%;
h1{
  font-size:45px;
  text-align:center
};
span{
  color:orangered
};
 @media (max-width:500px){
  width:70%;
   h1{
     font-size:30px
   }
}
`
const Wrapper = styled.div`
height:640px;
width:85%;
display:flex;
justify-content:space-between;
flex-direction:column;
align-items:center;

@media (max-width:500px){
  width:90%;
}
`
const Container = styled.div`
height:700px;
width:100%;
background-color:#EEEEEE;
display:flex;
justify-content:center;
align-items:center;
padding-top:50px;
@media (max-width:500px){
  width:100%;
}
`
