const asyncFs = require('fs').promises;
const syncFs = require('fs');
const path = require('path');

const data = 'The sun dipped below the horizon, casting a golden hue across the rippling waves. A soft breeze carried the scent of salt and wildflowers, blending into the tranquil rhythm of the evening. Birds soared overhead, their silhouettes briefly catching the last rays of light. On the shore, a child laughed as they chased the receding tide, leaving footprints that would soon be washed away. It was one of those rare moments where time felt still, suspended in a perfect blend of peace and wonder.';

function syncCode() {
    try {
        // Check if file exists
        const exists = syncFs.existsSync(path.join(__dirname, './file.txt'));
        console.log(`File exists in the directory: ${exists}`);

        // Read file content
        const content = syncFs.readFileSync(path.join(__dirname, './file.txt'));
        console.log(`File Content: ${content}`);
    } catch (error) {
        
    }
}

async function writeIntofile(data) {
    try {
        await fs.writeFile(path.join(__dirname, 'file.txt'), data);
    } catch (error) {
        console.error(`Something went wrong ${error.message}`);
    }
}

// writeIntofile(data);


async function readFromfile() {
    try {
        const fileData = await fs.readFile(path.join(__dirname, 'file.txt'), 'utf-8');
        console.log(fileData);
    } catch (error) {
        console.log(`Something went wrong ${error}`)
    }
}

// readFromfile();/

syncCode()