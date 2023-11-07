//=============================================
// Application settings
//=============================================
process.env.PORT = process.env.PORT || 3001;
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';  // Enviroment

//=============================================
// Database server settings MySQL
//=============================================
process.env.MYSQL_HOST = 'your.server.demo';
process.env.MYSQL_PORT = '3306';
process.env.MYSQL_DATABASE = 'LivePreview';
process.env.MYSQL_USER = 'youruser';
process.env.MYSQL_PASSWORD = `youpa$$w0rd`;