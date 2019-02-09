import debug from 'debug';

export default function debugWrap(header: string, prefix?: string) {
  return debug(`${prefix || 'api'}:${header}`);
}
