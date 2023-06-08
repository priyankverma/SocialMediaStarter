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

export const postsData = [
  {
    userImage: require('../assets/images/user1.png'),
    userName: 'Theresa Webb',
    timePassed: '5mins ago',
    moodEmoji: require('../assets/images/wave.png'),
    postText:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    commentNumber: '24',
    edited: false,
  },
  {
    userImage: require('../assets/images/user2.png'),
    userName: 'Marvin McKinney',
    timePassed: '8mins ago',
    moodEmoji: require('../assets/images/sad.png'),
    postText:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    commentNumber: '24',
    edited: true,
  },
  {
    userImage: require('../assets/images/user1.png'),
    userName: 'Lonie Cole',
    timePassed: '11mins ago',
    moodEmoji: require('../assets/images/sad.png'),
    postText:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
    commentNumber: '2',
    edited: false,
  },
];
