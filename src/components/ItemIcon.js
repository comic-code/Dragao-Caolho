export default function ItemIcon({ item, size = 20 }) {
  const isArmor = item.category === 'armor';
  const isRanged = !isArmor && item.type?.toLowerCase().includes('distância');

  if (isArmor) {
    return (
      <svg aria-hidden="true" focusable="false" width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path d="M12 2.5 20 5v6.1c0 5.1-3.3 8.8-8 10.4-4.7-1.6-8-5.3-8-10.4V5l8-2.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="m8.5 12 2.2 2.2 4.8-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (isRanged) {
    return (
      <svg aria-hidden="true" focusable="false" width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path d="M6 2.5c8 4.5 8 14.5 0 19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="m6 2.5 13 9.5L6 21.5M12 12h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="m17 9 3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" focusable="false" width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="m14.4 4.1 5.5 5.5M17.2 2.7l4.1 4.1-1.9 1.9-4.1-4.1 1.9-1.9ZM4 17l8.9-8.9 3 3L7 20H4v-3Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m3 20 4-4" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}
