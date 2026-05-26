export function categoryGradientStyle(category: string) {
  const s = String(category || "").trim();
  if (!s) return {};
  // Create subtle variations around the app indigo tone per category
  // Base indigo hues (approx): 240 and 225 degrees
  let hash = 0;
  for (let i = 0; i < s.length; i++) {
    hash = (hash << 5) - hash + s.charCodeAt(i);
    hash |= 0;
  }

  const absHash = Math.abs(hash);
  const offset = (absHash % 25) - 12; // -12 .. 12 degrees

  const baseH1 = 240;
  const baseH2 = 225;

  const h1 = baseH1 + offset;
  const h2 = baseH2 + Math.round(offset / 2);

  const l1 = 52 + ((absHash >> 3) % 9) - 4; // ~48..56
  const l2 = 40 + ((absHash >> 6) % 9) - 4; // ~36..44

  const color1 = `hsl(${h1} 65% ${l1}%)`;
  const color2 = `hsl(${h2} 65% ${l2}%)`;

  return {
    background: `linear-gradient(135deg, ${color1} 0%, ${color2} 100%)`,
  };
}
