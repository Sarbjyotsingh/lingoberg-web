import { buildLlmsTxtContent } from '../llms.txt/route';

export const dynamic = 'force-static';

export function GET() {
  return new Response(buildLlmsTxtContent(), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
