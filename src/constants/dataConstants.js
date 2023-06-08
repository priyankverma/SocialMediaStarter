export const modalContents = {
  login: {
    messageLine: 'WELCOME BACK',
    instruction: 'Log into your account',
    inputComponent: [
      {
        title: 'Email or Username',
        placeholder: 'Enter your email',
        type: 'input',
        id: 'loginName',
      },
      {
        title: 'Password',
        placeholder: 'Choose a preferred password',
        type: 'password',
        inlineText: 'Forgot password?',
        id: 'loginPassword',
      },
    ],
    ctaText: 'Login now',
    bottomQuestion: 'Not registered yet?',
    bottomQuestionCTA: 'Register →',
  },

  register: {
    messageLine: 'SIGN UP',
    instruction: 'Create an account to continue',
    inputComponent: [
      {
        title: 'Email',
        placeholder: 'Enter your email',
        type: 'input',
       
        id: 'registerEmail',
      },
      {
        title: 'Username',
        placeholder: 'Choose a preferred username',
        type: 'input',
       
        id: 'registerName',
      },
      {
        title: 'Password',
        placeholder: 'Choose a preferred password',
        type: 'password',
        inlineText: 'Forgot password?',
       
        id: 'registerPassword',
      },
    ],
    ctaText: 'Continue',
    bottomQuestion: 'Already have an account?',
    bottomQuestionCTA: 'Login →',
  },
};
