import * as fs from 'fs';

export const writeToCsv = async (data: any[], filename: string) => {
    const header = Object.keys(data[0]).join(',') + '\n';
    const rows = data.map(item => Object.values(item).join(',')).join('\n');
    await fs.promises.writeFile(filename, header + rows);
};