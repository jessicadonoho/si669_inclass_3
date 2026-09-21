import { describe, expect, it } from 'vitest';
import { tokens } from '../tokens';

describe('tokens', () => {
  it('exposes the green primary color used by the reference controls', () => {
    expect(tokens.colors.primary).toBe('#06c167');
  });
});
