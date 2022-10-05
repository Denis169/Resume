const labels = [
  'Critical thinking',
  'Communication skills',
  'People and interpersonal skills',
  'Self-awareness',
  'Self-learning',
  'Accountability',
  'Time management',
  'Emotional intelligence',
];

const data = {
  labels: labels,
  datasets: [
    {
      label: 'My First Dataset',
      data: [19, 16, 13, 18, 14, 12, 14, 15],
      backgroundColor: [
        'rgb(255,22,70)',
        'rgb(255,76,76)',
        'rgb(255,72,146)',
        'rgb(152,37,37)',
        'rgb(96,8,8)',
        'rgb(122,58,58)',
        'rgb(213,102,102)',
        'rgb(197,142,142)',
      ],
      borderColor: [`rgb(225, 225, 225)`],
      color: ['#666'],
    },
  ],
};

export const config = {
  type: 'polarArea',
  data: data,
  options: {
    scales: {
      r: {
        pointLabels: {
          display: false, // Hides the labels around the radar chart
        },
        ticks: {
          display: false, // Hides the labels in the middel (numbers)
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          // This more specific font property overrides the global property
          font: {
            color: [`rgb(225, 225, 225)`],
            size: 15,
          },
        },
      },
    },
  },
};
