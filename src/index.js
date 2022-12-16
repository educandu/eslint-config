import url from 'node:url';
import { promises as fs } from 'node:fs';

const eslintrcPath = url.fileURLToPath(new URL('../.eslintrc', import.meta.url));
const eslintConfig = await fs.readFile(eslintrcPath, 'utf8').then(JSON.parse);

export default eslintConfig;
