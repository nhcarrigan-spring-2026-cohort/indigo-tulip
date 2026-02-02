const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const paths = {
  server: path.join(__dirname, '../apps/server/.env'),
  client: path.join(__dirname, '../apps/client/.env')
};

const generateEnv = () => {
  const dbPassword = crypto.randomBytes(12).toString('hex');
  const jwtSecret = crypto.randomBytes(32).toString('base64');

  const serverContent = `POSTGRES_PASSWORD="${dbPassword}"\nDATABASE_URL="postgresql://postgres:${dbPassword}@localhost:5432/app_db"\nJWT_SECRET="${jwtSecret}"\nPORT=3000`.trim();
  const clientContent = `VITE_API_URL="http://localhost:3000"`;

  if (!fs.existsSync(paths.server)) fs.writeFileSync(paths.server, serverContent);
  if (!fs.existsSync(paths.client)) fs.writeFileSync(paths.client, clientContent);
  
  console.log('.ENV files generated successfully ✅');
}

generateEnv();