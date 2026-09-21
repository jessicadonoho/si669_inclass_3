import { describe, expect, it } from 'vitest';
import { tokens } from '../tokens';

describe('tokens', () => {
  it('exposes the primary color used by components', () => {
    expect(tokens.colors.primary).toBe('#2563eb');
  });
});
