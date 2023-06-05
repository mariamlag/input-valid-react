import { useState } from "react";
import { Container, Form, Input, Parag, PurpleDiv, Span, Submit } from "../themes/Input";

function ValidInput() {
    const [userName, setuserName] = useState<string>("");
    const [userNameInvalid, setUserNameInvalid] = useState<boolean>(false);
    const [userLastName, setuserLastName] = useState<string>("");
    const [userLastNameInvalid, setuserLastNameInvalid] = useState<boolean>(false);
    const [email, setEmail] = useState<string>("");
    const [emailInvalid, setEmailInvalid] = useState<boolean>(false);
    const [password, setPassword] = useState<string>("");
    const [passwordInvalid, setPasswordInvalid] = useState<boolean>(false);
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const passwordRegex =/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

      return (
        <>
         <PurpleDiv>
            <p>
                <strong>Try it free 7 days  </strong>  then $20/mo.thereafter
            </p>
        </PurpleDiv>

        <Container>
          <Form>
            <div>
              <label></label>
              <Input name="firstName" placeholder="First Name" invalid={userNameInvalid}
                onChange={(event) => {
                setuserName(event.target.value);
              }}/>
            </div>
    
            <div>
              <label></label>
              <Input name="lastName" placeholder="Last name" invalid={userLastNameInvalid}
              onChange={(event) => {
                setuserLastName(event.target.value);
              }}/>
            </div>
    
            <div>
              <label></label>
              <Input name="email" placeholder="Email Address" invalid={emailInvalid}
                onChange={(event) => {
                setEmail(event.target.value);
            
              }}/>
            </div> 

            <div>
              <label></label>
              <Input name="password" placeholder="Password" invalid={passwordInvalid}
              onChange={(event) => {
                setPassword(event.target.value);
              }}/>
            </div>

            <Submit
              type='submit' 
              onClick={(event) => {
              event.preventDefault();

              if(userName.length < 2){
                setUserNameInvalid(true)
              } else {
                setUserNameInvalid(false)
              } 

              if(userLastName.length < 2){
                setuserLastNameInvalid(true)
              } else {
                setuserLastNameInvalid(false)
              } 

    
              if(emailRegex.test(email)){
                setEmailInvalid(false)
              }else{
                setEmailInvalid(true)
              }

              if(passwordRegex.test(password)){
                setPasswordInvalid(false)
              }else{
                setPasswordInvalid(true)
              }
            }}
            >
              CLAIM YOUR FREE TRIAL
              </Submit>
          </Form>
          <Parag>By clicking the button, you are agreeing to our <Span> Terms and Services</Span> </Parag>
      </Container>
      </>  
      );
    }

   

export default ValidInput;