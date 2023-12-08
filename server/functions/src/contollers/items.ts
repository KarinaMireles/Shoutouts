import establishConnection from "../establishConnection"

// READ

export const getItems = async (req: any, res: any) => {
	try {
		await establishConnection()
		res.send("hello World")
	} catch (err) {
		res.code(500).send("Server Error")
	}
}
