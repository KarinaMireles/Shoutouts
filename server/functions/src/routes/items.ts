import { Router } from "express"
import { getItems } from "../contollers/items"

const router = Router()

router.get("/", getItems)

export default router
