import React from "react";
import styled from "styled-components";

export default function Contact() {
  return (
    <Wrapper id="contact">
      <div className="lightBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Suscríbete</h1>
            <p className="font13">
              Suscríbete a nuestro boletín informativo
            </p>
          </HeaderInfo>
          <FormWrapper className="row">
            
              <Form>
                <label className="font13">Nombre:</label>
                <input type="text" id="fname" name="fname" className="font20 extraBold" />
                <label className="font13">Correo:</label>
                <input type="text" id="email" name="email" className="font20 extraBold" />
                <label className="font13">Fecha de Nacimiento:</label>
                <input type="date" id="date" name="date" className="font20 extraBold" />
                <label className="font13">Cargo:</label>
                <input type="text" id="fname" name="fname" className="font20 extraBold" />
                <label className="font13">Organización:</label>
                <input type="text" id="fname" name="fname" className="font20 extraBold" />
                <label className="font13">Ciudad:</label>
                <input type="text" id="fname" name="fname" className="font20 extraBold" />
              </Form>
              <SubmitWrapper className="flexCenter">
                <ButtonInput type="submit" value="SUSCRIBIR" className="pointer animate radius8" style={{ maxWidth: "220px" }} />
              </SubmitWrapper>
            
          </FormWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;

const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;

const FormWrapper = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;

const Form = styled.form`
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
  }
  textarea {
    min-height: 100px;
  }
`;

const ButtonInput = styled.input`
  border: 1px solid #00703C;
  background-color: #00703C;
  width: 100%;
  padding: 15px;
  outline: none;
  color: #fff;
  :hover {
    background-color: #00703C;
    border: 1px solid #7620ff;
    color: #fff;
  }
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;

const SubmitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;
