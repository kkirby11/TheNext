import styled from 'styled-components';

    
export const MainHeader = styled.div`
  background-image: url(https://images.unsplash.com/photo-1527234639945-70d78416bd7d?ixlib=rb-0.3.5&s=a9ebd4e986e2f1c37d371c511d9515a4&auto=format&fit=crop&w=1438&q=80);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat; 
  height: 700px;
  `

export const Headerr = styled.h1`
  position: absolute;
  left: 23%;
  top: 5%;
  text-align: center;
  padding-top: 70px;
  font-size: 75px;
  color: white;
  font-family: 'Crete Round', serif;
  `
export const HeaderTwo = styled.h3`
    position: absolute;
    left: 15%;
    top: 15%;
    text-align: center;
    padding-top: 70px;
    font-size: 45px;
    color: white;
    font-family: 'Crete Round', serif;
  `

  export const SecondHeader = styled.div`
  position: absolute;
  text-align: center;
  font-size: 75px;
  padding-top: 690px;
  color: black;
  font-family: 'Crete Round', serif;
  left: 2%;
  top: 52%;
`
export const ThirdHeader = styled.div`
  position: absolute;
  text-align: center;
  font-size: 65px;
  color: black;
  font-family: 'Crete Round', serif;
  left: 24%;
  top: 208%;
`
export const EmailHeader = styled.div`
  position: absolute;
  text-align: center;
  font-size: 45px;
  color: black;
  font-family: 'Crete Round', serif;
  left: 10%;
  top: 115%;
`
export const EmailWrapper = styled.div`
  background-color: #EF5D60;
  height: 200px;
`

export const Paragraph = styled.h1`
  font-family: 'Crete Round', serif;
  // text-align: center;
  padding-left: 40px;
  padding-right: 20px;
`

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	height: 450px;
  background-color: #E3E1E0;
`

export const TestWrapper = styled.div`
  background-color: white;
  height: 110px;
`

export const ImageDiv = styled.div`
  padding: 100px; 
  align-content: center;
`

export const Preview = styled.div`
  background-image: url(${props => props.picture});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat; 
  flex: 1;
  flex-basis: 200px;
  height: 350px;
  display: flex;
  text-align: center;
  color: transparent;
  flex-direction: column;
  justify-content: space-around;


  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
   
  }
`
export const PreviewText = styled(Preview)`
  color: transparent;
  font-size: 30px;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding-left: 50px;
  padding=right: 50px
`

export const FormStyle = styled.div`
  // align-items: center;
  padding-left: 600px;
  padding-top: 125px;
  // display: flex;
`

