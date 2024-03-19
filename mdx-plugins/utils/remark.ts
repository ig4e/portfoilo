/* eslint-disable @typescript-eslint/no-explicit-any  -- MD STUFF   */
/* eslint-disable @typescript-eslint/no-unsafe-call -- MD STUFF  */
/* eslint-disable @typescript-eslint/no-unsafe-member-access -- MD STUFF */
/* eslint-disable @typescript-eslint/no-unsafe-return -- MD STUFF */

export function flattenNode(node: any): string {
  if ('children' in node)
    return node.children.map((child: never) => flattenNode(child)).join('');

  if ('value' in node) return node.value;

  return '';
}
