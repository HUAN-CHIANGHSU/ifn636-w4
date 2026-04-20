const axios = require('axios');
const API_URL = 'http://localhost:5001/api/auth';
const testLoginFlow = async () => {
    try {
        console.log('--- start test ---');
        const regData = { name: "Test", email: "t${Date.now()}@test.com", password: "123" };
        const regRes = await axios.post(`${API_URL}/register`, regData);
        //console.log('registtarion successful');
        const logRes = await axios.post(`${API_URL}/login`, { email: regData.email, password: regData.password });
        //console.log('log in successful take Token');
        const profRes = await axios.get(`${API_URL}/profile`, { headers: { Authorization: `Bearer ${logRes.data.token}` } });
        //console.log(' entry Profile successful:', profRes.data.name);sd
    } catch (e) { console.error('❌ fail:', e.response ? e.response.data : e.message); }
};
testLoginFlow();
