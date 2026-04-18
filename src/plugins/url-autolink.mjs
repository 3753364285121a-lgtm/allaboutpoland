import { visit } from 'unist-util-visit';

// Match domain-like patterns: word.word.tld or word.tld (not already in a link)
// Covers .pl, .com, .gov.pl, .com.pl, .org etc.
const urlPattern = /(?<![\/\w@])([a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)*\.(?:pl|com|org|eu|net|gov\.pl|com\.pl)(?:\/[^\s),."']*)?)/g;

// Domains to skip (too generic or not real links)
const skipDomains = ['gov.pl'];

export function remarkUrlAutolink() {
  return (tree) => {
    visit(tree, 'text', (node, index, parent) => {
      if (!parent) return;
      // Don't process inside links, code, or headings
      if (parent.type === 'link' || parent.type === 'code' || parent.type === 'inlineCode') return;

      const text = node.value;
      const matches = [...text.matchAll(urlPattern)];
      if (matches.length === 0) return;

      const newNodes = [];
      let lastIndex = 0;

      for (const match of matches) {
        const domain = match[1];
        const matchStart = match.index;

        // Skip if it's a generic domain
        if (skipDomains.includes(domain.toLowerCase())) continue;

        // Add text before the match
        if (matchStart > lastIndex) {
          newNodes.push({ type: 'text', value: text.slice(lastIndex, matchStart) });
        }

        // Build the URL
        const href = domain.startsWith('http') ? domain : `https://${domain}`;

        // Add link node
        newNodes.push({
          type: 'link',
          url: href,
          data: {
            hProperties: {
              target: '_blank',
              rel: 'noopener noreferrer',
            },
          },
          children: [{ type: 'text', value: domain }],
        });

        lastIndex = matchStart + domain.length;
      }

      if (newNodes.length === 0) return;

      // Add remaining text
      if (lastIndex < text.length) {
        newNodes.push({ type: 'text', value: text.slice(lastIndex) });
      }

      parent.children.splice(index, 1, ...newNodes);
      return index + newNodes.length;
    });
  };
}
