// Match MongoDB's ascending createdAt/_id display order even if writes resolve out of order.
export function mergeMessage(current, incoming) {
  if (current.some(message => message.id === incoming.id)) return current;
  return [...current, incoming]
    .sort((a, b) => a.createdAt.localeCompare(b.createdAt) || a.id.localeCompare(b.id))
    .slice(-100);
}
