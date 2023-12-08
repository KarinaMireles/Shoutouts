import admin from "firebase-admin"
import { Request, Response, NextFunction } from "express"

const serviceAccount = require("../serviceAccountKey.json")

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount)
})

interface TokenVerifier {
	(req: Request, res: Response, next: NextFunction): Promise<void>
}

export const verifyToken: TokenVerifier = async (req, res, next) => {
	try {
		if (!req.headers.authorization) throw new Error()
		const token = req.headers.authorization.split(" ")[1]
		const decodedToken = await admin.auth().verifyIdToken(token)
		const uid = decodedToken.uid
		if (!uid) throw new Error()
		req.body.user = decodedToken
		next()
	} catch (err) {
		res.status(403).send("Forbidden")
	}
}
