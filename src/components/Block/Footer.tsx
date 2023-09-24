import styled from 'styled-components'

const Footer = ()=>{
    return (
        <div>
          <Container>
            <p>2023 HashIT App Ltd. Allrights reserved.</p>
          </Container>
        </div>
    )
}
export default Footer;
const Container = styled.div`
height:100px;
width:100%;
background-color:#EEEEEE;
color:black;
display:flex;
justify-content:center;
align-items:center;
`