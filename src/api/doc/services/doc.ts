/**
 * doc service
 */
import path from 'node:path';
import fs from 'node:fs';

const docPath = 'src/extensions/documentation/documentation/1.0.0/full_documentation.json';

export default () => ({
	async loadJson() {
		const filePath = path.join(process.cwd(), docPath);
		if (!fs.existsSync(filePath)) {
			throw new Error(`File not found: ${filePath}`);
		}
		return JSON.parse(fs.readFileSync(filePath, 'utf8'));
	},
});
