const config = {

    myDomain : 'http://localhost:3001',
    domain : 'http://localhost:3001/codeid',
    urlImage : 'http://localhost:3001/codeid/api/images',
    domainAuth : 'http://localhost:3001/codeid/auth/',
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key"
  }
  
  export default config
