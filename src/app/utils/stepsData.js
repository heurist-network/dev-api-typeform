const stepsData = [
  {
    id: 1,
    type: 'section',
    content: [
      {
        type: 'text',
        value: 'Hello! We’re excited to offer trial access to our AI APIs.',
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
            label: 'AI Agents',
          },
          {
            id: 4,
            label: 'Data Analytics',
          },
          {
            id: 5,
            label: 'Marketing and Social Media',
          },
          {
            id: 6,
            label: 'Gaming',
          },
          {
            id: 7,
            label: 'Research',
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
    title: 'How do you plan to use our AI APIs in your project? *',
    subtitle: 'This will help us tailor our products to better suit your needs.',
    content: [
      {
        type: 'input',
        placeholder: 'Describe your use case',
      },
    ]
  },
  {
    id: 4,
    question_id: 3,
    type: 'question',
    title: 'What is your email address? *',
    subtitle: 'We will use this to get back to you with the API keys.',
    content: [
      {
        type: 'input',
        placeholder: 'Enter your email address',
      },
    ]
  },
  {
    id: 5,
    question_id: 4,
    type: 'question',
    title: 'What is your project name and project URL?',
    subtitle: 'We will prioritize giving free trial access for projects that have a clear use case and a live URL.',
    content: [
      {
        type: 'input',
        placeholder: 'Project name and URL',
      },
    ]
  },
  {
    id: 6,
    question_id: 5,
    type: 'question',
    title: 'What is your Twitter handle? (MUST follow https://x.com/heurist_ai to get free access)',
    subtitle: '',
    content: [
      {
        type: 'input',
        placeholder: 'Enter your Twitter handle',
      },
    ]
  },
  {
    id: 7,
    question_id: 6,
    type: 'question',
    title: 'What is your GitHub username? (MUST hit a star on https://github.com/heurist-network/heurist-agent-framework to get free access)',
    subtitle: '',
    content: [
      {
        type: 'input',
        placeholder: 'Enter your GitHub username',
      },
    ]
  },
  {
    id: 8,
    question_id: 7,
    type: 'question',
    title: 'Do you have a referral code?',
    subtitle: '',
    content: [
      {
        type: 'input',
        placeholder: 'Referral code (optional)',
      },
    ]
  },
  {
    id: 9,
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
        value: 'We\'ll get back to you with early access details soon. Join our <a href="https://discord.com/invite/heuristai">Discord</a> for updates. Read our <a href="https://docs.heurist.ai/dev-guide/integration-overview">developer docs</a> for more information.',
      }
    ]
  },
];

export default stepsData;
