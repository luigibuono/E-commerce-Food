# ProgettoMEAN
<br>
<h1>MONGO-EXPRESS.ANGULAR-NODE</h1>
<h3>Applicazione link online: https://foodmine-yjri.onrender.com/</h3>
<br><br>
<hr>
# STRUTTURA
<br>
# FRONTEND
1: ng new frontend(crea Angular App)<br>
2:Crea L'header component <br>
3:Crea HomeComponent con food model,data.ts,Add image to assets,food service.<br>
4:Aggiungi metodi a Food service, crea searchComponent <br>
5:Crea Tags Model e aggiungi a data.ts e a food service, crea il tags component <br>
6:Crea il Food-page Component <br>
7:crea il cart-component con cart Model,cartItem Model,cart service <br>
8:Genera il not found component e aggiungilo a Home,Food,Cart<br>
#BACKEND
1:nuovo terminale, npm init -y e aggiungi dependencies: <br>
"dependencies": {
    "bcryptjs": "^2.4.3",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "express": "^4.18.2",
    "express-async-handler": "^1.2.0",
    "jsonwebtoken": "^9.0.1",
    "mongoose": "^7.5.0",
    "typescript": "^5.2.2"
  },
  "devDependencies": {
    "@types/bcryptjs": "^2.4.3",
    "@types/cors": "^2.8.13",
    "@types/express": "^4.17.17",
    "@types/jsonwebtoken": "^9.0.2",
    "nodemon": "^3.0.1",
    "ts-node": "^10.9.1"
  }


