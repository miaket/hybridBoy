import React from 'react';
import PageContainer from '../../elements/pageContainer/PageContainer';
import MainTitle from '../../elements/mainTitle/MainTitle';
import ContentBlock from '../../elements/contentBlock/ContentBlock';
import InputButton from '../../elements/inputButton/InputButton';
import InputText from '../../elements/inputText/InputText';

class ExamplePage extends React.Component {
  render() {
    return (
      <PageContainer>
        <MainTitle>
          Signup
        </MainTitle>
        <ContentBlock>
          <InputText
            inputLabel={'Username'}
            inputType="text"
          />
          <InputText
            inputLabel={'Password'}
            inputType="password"
          />
          <InputText
            inputLabel={'Password confirmation'}
            inputType="password"
          />
        </ContentBlock>
        <ContentBlock>
          <InputButton>Login</InputButton>
          <InputButton>Register</InputButton>
        </ContentBlock>
      </PageContainer>
    );
  }
}

//alterar rotas com history.push apos importar navigationServices!

export default ExamplePage;
