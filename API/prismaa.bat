 
npm init -y && ^
npm install typescript ts-node @types/node --save-dev && ^
npx tsc --init && ^
npm install prisma --save-dev && ^
npx prisma init --datasource-provider sqlite && ^
echo // npx prisma migrate dev --name init && ^
echo // touch script.ts && ^
echo // npx ts-node script.ts && ^
echo // npx prisma studio && ^
 

 
