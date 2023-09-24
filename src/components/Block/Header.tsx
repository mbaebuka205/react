import styled from 'styled-components'
import pix from '../../assets/logo-black-12822108.svg'
import pix2 from '../../assets/light-mode-btn-8c3556bd.svg'

const Header = () =>{
  return(
    <div>
       <Container>
        <Wrapper>
        <Left><img src={pix}/></Left>
        <Right><img src = {pix2}/></Right>
        </Wrapper>
       </Container>
    </div>
  ) 
}

export default Header;
const Right = styled.div`
width:7%;
@media (max-width:500px){
  width:20%
}

`
const Left = styled.div`
width:7%;
@media (max-width:500px){
  width:7%
}

`
const Wrapper = styled.div`
height:100%;
width:90%;
display:flex;
justify-content:space-between;
align-items:center;
@media (max-width:500px){
  width:90%;
}

`
const Container = styled.div`
height:70px;
width:100%;
display:flex;
justify-content:center;
align-items:center;
position:fixed;
background-color:white;
@media (max-width:500px){}
`
