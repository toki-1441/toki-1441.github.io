// src/data/projects.js

export const projectsData = [
  // --- 完成したプロジェクト ---
  {
    status: 'completed', // ← 追加
    title: 'Portfolio Website',
    description: 'A professional portfolio website built with React and Material-UI to showcase my skills and projects.',
    image: '/src/images/portfolio.png',
    tags: ['React', 'MUI', 'Vite', 'GitHub Pages'],
    githubUrl: 'https://github.com/toki-1441/toki-1441.github.io.git',
    liveUrl: 'https://toki-1441.github.io/',
  },

  // --- 今後の目標 (Coming Soon) ---
  {
    status: 'coming_soon', // ← 新しいステータス
    title: '画像クロップ＆解像度変更ツール',
    description: 'Web上で手軽に使える画像編集ツールを開発予定。',
    tags: ['WebAssembly', 'React'],
  },
  {
    status: 'coming_soon',
    title: 'インタラクティブな3Dゲーム',
    description: 'Three.jsやReact Three Fiberを用いて、ブラウザで動作する3Dゲームを開発したい。',
    tags: ['Three.js', 'React Three Fiber'],
  },
];