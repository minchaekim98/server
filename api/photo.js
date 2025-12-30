// Vercel Serverless Function
const https = require('https');

// 외부 API 호출을 위한 헬퍼 함수
function fetchFromAPI(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', () => {
                try {
                    resolve(JSON.parse(data));
                } catch (e) {
                    reject(e);
                }
            });
        }).on('error', (err) => {
            reject(err);
        });
    });
}

module.exports = async (req, res) => {
    // CORS 설정
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    const type = req.query.type || 'dog';
    
    try {
        let imageUrl;
        
        switch(type) {
            case 'dog':
                const dogData = await fetchFromAPI('https://dog.ceo/api/breeds/image/random');
                imageUrl = dogData.message;
                break;
                
            case 'cat':
                const catData = await fetchFromAPI('https://api.thecatapi.com/v1/images/search');
                imageUrl = catData[0].url;
                break;
                
            case 'nature':
                const randomId = Math.floor(Math.random() * 1000);
                imageUrl = `https://picsum.photos/600/400?random=${randomId}`;
                break;
                
            case 'random':
                const types = ['dog', 'cat', 'nature'];
                const randomType = types[Math.floor(Math.random() * types.length)];
                
                if (randomType === 'dog') {
                    const dogData = await fetchFromAPI('https://dog.ceo/api/breeds/image/random');
                    imageUrl = dogData.message;
                } else if (randomType === 'cat') {
                    const catData = await fetchFromAPI('https://api.thecatapi.com/v1/images/search');
                    imageUrl = catData[0].url;
                } else {
                    const randomId = Math.floor(Math.random() * 1000);
                    imageUrl = `https://picsum.photos/600/400?random=${randomId}`;
                }
                break;
                
            default:
                throw new Error('알 수 없는 이미지 타입입니다.');
        }
        
        res.status(200).json({
            success: true,
            type: type,
            imageUrl: imageUrl
        });
        
    } catch (error) {
        console.error('이미지 가져오기 실패:', error);
        res.status(500).json({
            success: false,
            error: '이미지를 가져오는데 실패했습니다.'
        });
    }
};
