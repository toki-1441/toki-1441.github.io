// src/data/projects.js

// 画像ファイルをインポートする場合（推奨）
// import project1Image from '/project1.png'; // publicフォルダにある場合
// import project2Image from '/project2.png';

export const projectsData = [
  {
    title: 'LidarLLM Project',
    description: 'A multi-modal AI system connecting LiDAR point cloud data to a Large Language Model for scene understanding.',
    image: '/project1.png', // publicフォルダの画像パス or インポートした変数
    tags: ['PyTorch', 'CUDA', 'ROS', 'React'],
    githubUrl: 'https://github.com/', // あなたのURL
    liveUrl: '#',
  },
  {
    title: 'Portfolio Website',
    description: 'A professional portfolio website built with React and Material-UI to showcase my skills and projects.',
    image: '/project2.png', // publicフォルダの画像パス or インポートした変数
    tags: ['React', 'MUI', 'Vite', 'GitHub Pages'],
    githubUrl: 'https://github.com/', // あなたのURL
    liveUrl: '#',
  },
  // 新しいプロジェクトは、この配列にオブジェクトを追加するだけ！
];