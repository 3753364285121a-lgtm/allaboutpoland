import { visit } from 'unist-util-visit';

const glossaryTerms = [
  { term: 'PESEL', slug: 'pesel' },
  { term: 'ZUS', slug: 'zus' },
  { term: 'NFZ', slug: 'nfz' },
  { term: 'NIP', slug: 'nip' },
  { term: 'PIT', slug: 'pit' },
  { term: 'Karta Pobytu', slug: 'karta-pobytu' },
  { term: 'Karta pobytu', slug: 'karta-pobytu' },
  { term: 'karta pobytu', slug: 'karta-pobytu' },
  { term: 'Zameldowanie', slug: 'zameldowanie' },
  { term: 'zameldowanie', slug: 'zameldowanie' },
  { term: 'Umowa o pracę', slug: 'umowa-o-prace' },
  { term: 'umowa o pracę', slug: 'umowa-o-prace' },
];

// Sort by length descending so longer terms match first
const sortedTerms = [...glossaryTerms].sort((a, b) => b.term.length - a.term.length);

// Build regex: match whole words, case-sensitive
const pattern = new RegExp(
  `\\b(${sortedTerms.map((t) => t.term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})\\b`,
  'g'
);

export function remarkGlossaryAutolink() {
  return (tree, file) => {
    // Skip glossary files themselves to avoid self-links
    const filePath = file.history?.[0] || '';
    if (filePath.includes('/glossary/')) return;

    // Track which terms we've already linked (only link first occurrence)
    const linked = new Set();

    visit(tree, 'text', (node, index, parent) => {
      // Don't process text inside links, headings, or code
      if (!parent || parent.type === 'link' || parent.type === 'heading' || parent.type === 'code' || parent.type === 'inlineCode') {
        return;
      }

      const text = node.value;
      const matches = [...text.matchAll(pattern)];
      if (matches.length === 0) return;

      const newNodes = [];
      let lastIndex = 0;

      for (const match of matches) {
        const termText = match[0];
        const termInfo = sortedTerms.find((t) => t.term === termText);
        if (!termInfo) continue;

        // Only link first occurrence of each term per article
        if (linked.has(termInfo.slug)) continue;
        linked.add(termInfo.slug);

        const matchStart = match.index;

        // Add text before the match
        if (matchStart > lastIndex) {
          newNodes.push({ type: 'text', value: text.slice(lastIndex, matchStart) });
        }

        // Add link node
        newNodes.push({
          type: 'link',
          url: `/glossary/${termInfo.slug}`,
          title: `Глоссарий: ${termInfo.term}`,
          data: {
            hProperties: {
              class: 'glossary-link',
            },
          },
          children: [{ type: 'text', value: termText }],
        });

        lastIndex = matchStart + termText.length;
      }

      if (newNodes.length === 0) return;

      // Add remaining text
      if (lastIndex < text.length) {
        newNodes.push({ type: 'text', value: text.slice(lastIndex) });
      }

      // Replace the node with our new nodes
      parent.children.splice(index, 1, ...newNodes);
      return index + newNodes.length;
    });
  };
}
