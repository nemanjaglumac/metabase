function getLinkedIssues(body) {
  const matches = body.match(
    /(close(s|d)?|fixe?(s|d)?|resolve(s|d)?) (#|https?:\/\/github.com\/.+\/issues\/)(\d+)/gi,
  );

  if (matches) {
    return matches.map(m => {
      const numberMatch = m.match(/\d+/);
      return numberMatch ? numberMatch[0] : null;
    });
  }

  return null;
}

module.exports = {
  getLinkedIssues,
};
