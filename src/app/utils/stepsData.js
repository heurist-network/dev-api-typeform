const stepsData = [
  {
    id: 1,
    type: 'section',
    content: [
      {
        type: 'text',
        value: 'Hello! We’re excited to offer early access to our AI APIs and would love to understand your needs better.',
      },
      {
        type: 'text',
        value: 'Can you take a few minutes to share some insights with us?',
      }
    ]
  },
  {
    id: 2,
    question_id: 1,
    type: 'question',
    title: 'What types of projects are you working on? *',
    subtitle: 'Select all that apply.',
    content: [
      {
        type: 'checkbox',
        values: [
          {
            id: 1,
            label: 'DeFi',
          },
          {
            id: 2,
            label: 'NFT',
          },
          {
            id: 3,
            label: 'DAO',
          },
          {
            id: 4,
            label: 'Crypto wallets and payments',
          },
          {
            id: 5,
            label: 'Blockchain analytics and data services',
          },
          {
            id: 6,
            label: 'Gaming and metaverse',
          },
          {
            id: 7,
            label: 'Security solutions',
          },
          {
            id: 8,
            label: 'Other',
          },
        ],
      },
    ]
  },
  {
    id: 3,
    question_id: 2,
    type: 'question',
    title: 'Which AI model categories are you most interested in? *',
    subtitle: 'Select all that apply.',
    content: [
      {
        type: 'checkbox',
        values: [
          {
            id: 1,
            label: 'Image generation (Stable Diffusion)',
          },
          {
            id: 2,
            label: 'Language models',
          },
          {
            id: 3,
            label: 'Other',
          },
        ],
      },
    ]
  },
  {
    id: 4,
    question_id: 3,
    type: 'question',
    title: 'What is your level of experience with using AI? *',
    subtitle: 'Select an option.',
    content: [
      {
        type: 'select',
        values: [
          {
            id: 1,
            label: 'Beginner (new to AI)',
          },
          {
            id: 2,
            label: 'Intermediate (some experience)',
          },
          {
            id: 3,
            label: 'Advanced (familiar with AI)',
          },
          {
            id: 4,
            label: 'Expert (AI professional)',
          },
        ],
      },
    ]
  },
  {
    id: 5,
    question_id: 4,
    type: 'question',
    title: 'How do you plan to use our AI APIs in your project? *',
    subtitle: 'This will help us tailor the AI models and APIs to better suit your needs.',
    content: [
      {
        type: 'input',
        placeholder: 'Describe your use case',
      },
    ]
  },
  {
    id: 6,
    question_id: 5,
    type: 'question',
    title: 'What is your email address? *',
    subtitle: 'We will use this to get back to you with early access details.',
    content: [
      {
        type: 'input',
        placeholder: 'Enter your email address',
      },
    ]
  },
  {
    id: 7,
    question_id: 6,
    type: 'question',
    title: 'What is your project name and project URL?',
    subtitle: 'We will prioritize early access for projects that have a clear use case and a live URL.',
    content: [
      {
        type: 'input',
        placeholder: 'Project name and URL',
      },
    ]
  },
  {
    id: 8,
    question_id: 7,
    type: 'question',
    title: 'Are you attending ETHDenver 2024?',
    subtitle: 'We’d love to provide support with your project at the event or just meet you in person.',
    content: [
      {
        type: 'select',
        values: [
          {
            id: 1,
            label: 'Yes',
          },
          {
            id: 2,
            label: 'No',
          },
          {
            id: 3,
            label: 'Maybe',
          }
        ],
      },
    ]
  },
  {
    id: 9,
    question_id: 8,
    type: 'question',
    title: 'Is there anything else you’d like to share with us?',
    subtitle: '',
    content: [
      {
        type: 'input',
        placeholder: 'Share your thoughts',
      },
    ]
  },
  {
    id: 10,
    type: 'section',
    should_save: true,
    hide_next_button: true,
    content: [
      {
        type: 'text',
        value: 'Your response has been submitted successfully.',
      },
      {
        type: 'text',
        value: 'We\'ll get back to you with early access details soon. Follow us on <a href="https://twitter.com/heurist_ai">Twitter</a> and join our <a href="https://discord.gg/uekZGwkrW5">Discord</a> for updates.',
      }
    ]
  },
];

export default stepsData;
