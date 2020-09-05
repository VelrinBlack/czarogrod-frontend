export const loadArticlePreviewText = (string) => {
  const cutString = (string, number) => {
    const cut = string.indexOf(' ', number);
    if (cut === -1) return string;
    return string.substring(0, cut);
  };

  try {
    return cutString(
      string
        .replace(/\r?\n|\r/g, ' ')
        .match(/[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ0-9 !?,.]/g)
        .join(''),
      210,
    );
  } catch (error) {
    return 'Ładowanie...';
  }
};
