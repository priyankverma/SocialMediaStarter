export const modalContents = {
  login: {
    messageLine: 'WELCOME BACK',
    instruction: 'Log into your account',
    inputComponent: [
      {
        title: 'Email or Username',
        placeholder: 'Enter your email',
        type: 'input',
        value: 'userName',
        id: 'loginName',
      },
      {
        title: 'Password',
        placeholder: 'Choose a preferred password',
        type: 'password',
        inlineText: 'Forgot password?',
        value: 'password',
        id: 'loginPassword',
      },
    ],
    ctaText: 'Login now',
    bottomQuestion: 'Not registered yet?',
    bottomQuestionCTA: 'Register →',
    bottmCTAAction: () => alert('Take me to Register'),
  },

  register: {
    messageLine: 'SIGN UP',
    instruction: 'Create an account to continue',
    inputComponent: [
      {
        title: 'Email',
        placeholder: 'Enter your email',
        type: 'input',
       
        value: 'userName',
        id: 'registerEmail',
      },
      {
        title: 'Username',
        placeholder: 'Choose a preferred username',
        type: 'input',
       
        value: 'userName',
        id: 'registerName',
      },
      {
        title: 'Password',
        placeholder: 'Choose a preferred password',
        type: 'password',
        inlineText: 'Forgot password?',
       
        value: 'password',
        id: 'registerPassword',
      },
    ],
    ctaText: 'Continue',
    // ctaAction: () => setModalVisible(false),
    bottomQuestion: 'Already have an account?',
    bottomQuestionCTA: 'Login →',
    bottmCTAAction: () => alert('Take me to Register'),
  },
};
