import react,{useState, useEffect} from 'react'
import styled from 'styled-components'
import pix from '../../assets/Membership_Coco.png'
import pix1 from '../../assets/Membership_Lowry.png'
import pix2 from '../../assets/Membership_Molina-1.png'
import pix3 from '../../assets/download-removebg-preview (9).png'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
import {HiOutlineArrowNarrowLeft} from 'react-icons/hi'


interface iData {
    img?:string,
    name:any,
    text:string
}
const Medium = () =>{
    const [number, setNumber] = useState(0)
    const [slide, setSlide] = useState<Array<iData>>([
        {text:"I love Medium’s membership — it gives me access to the stories I love by the writers I love, and it allows me to help support those writers financially.",name:"JESSICA", img:pix2},
        {text:"For me, the access to a variety of ideas and perspectives is invaluable. Medium brings people from all over into one shared space where we can grow and learn together.",name:"AHMED", img:pix1},
        {text:"My favorite thing about a Medium membership is endlessly reading up-and-coming and well-known writers alike.",name:"ISAAC", img:pix}
    ])
    const incr = () =>{
        setNumber((el:number)=>{
            return el + 1
        })
    }
    const dcr = () =>{
        setNumber((el:number)=>{
            return el - 1
        })
    }

    useEffect(()=>{
       setInterval(()=>{
        setNumber((el:number)=>{
            return el + 1
        })
       },3000)
    },[])
   return(
    <div>
      <Container>
        <span>Why I'm A Medium Member</span>
        <Wrapper>
           <Left>
            <Circle1 src={slide[number% slide.length].img}/>
            <Circle2/>
            <Circle3/>
           </Left>
           <Right>{slide[number% slide.length].text}
            <Name>{slide[number% slide.length].name}</Name>
           </Right>
        </Wrapper>
        <Dbtm>
           <L onClick={dcr}><HiOutlineArrowNarrowLeft/></L>
           <R onClick={incr}><HiOutlineArrowNarrowRight/></R>
        </Dbtm>
      </Container>
      <Footer>
        <Lside><img src={pix3}/></Lside>
        <p style={{fontSize:"20px"}}>Every Idea Needs A Medium</p>
        <Rside>
           <nav>About</nav>
           <nav>Terms</nav> 
           <nav>Privacy</nav> 
           <nav>Help</nav> 
           <nav>Team</nav> 
        </Rside>
      </Footer>
    </div>
   )
}
export default Medium;
const Rside = styled.div`
width:250px;
display:flex;
justify-content:space-between;
align-items:center;
margin-right:12px
`
const Lside = styled.div`
height:30px;
width:170px;
img{
  height:100%;
  width:100%;
}
margin-left:12px;
margin-top:18px;
`
const Footer = styled.div`
width:100%;
height:65px;
background-color:pink;
display:flex;
justify-content:space-between;
align-item:center;
`
const R = styled.div`
width:30%;
height:100%;
font-size:27px;
`
const L = styled.div`
width:30%;
height:100%;
font-size:27px;
`
const Dbtm = styled.div`
height:30px;
width:100px;
display:flex;
justify-content:space-between;
`
const Circle3 = styled.div`
height:135px;
width:30px;
border-radius:50%;
background-color:green;
`
const Circle2 = styled.div`
height:145px;
width:70px;
border-radius:50%;
background-color:orange;
`
const Circle1 = styled.img`
height:150px;
width:150px;
border-radius:50%;
background-color:orange;
`
const Name = styled.div`
height:20px;
width:70px;
position:absolute;
top:200px;
left:30px;
`
const Right = styled.div`
height:100%;
width:66%;
position:relative;
font-size:25px;
transition:all ease-in-out 350ms;
margin-left:30px
`
const Left = styled.div`
height:100%;
width:34%;
display:flex;
justify-content:space-between;
align-items:center;
`
const Wrapper = styled.div`
width:62%;
height:230px;
display:flex;
`
const Container = styled.div`
height:400px;
width:100%;
background-color:white;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
span{
    font-size:38px;
    font-weight:bold;
  }
`